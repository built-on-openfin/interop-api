import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.openfin.desktop.ClientIdentity;
import com.openfin.desktop.DesktopConnection;
import com.openfin.desktop.interop.Context;
import com.openfin.desktop.interop.ContextGroupInfo;

public class InteropTest {
	private static Logger logger = LoggerFactory.getLogger(InteropTest.class.getName());

	private static final String DESKTOP_UUID = InteropTest.class.getName();
	private static DesktopConnection desktopConnection;
	private String platformId;
	public void setup(String platformId) throws Exception {
		logger.debug("starting");
		desktopConnection = TestUtils.setupConnection(DESKTOP_UUID);
		this.platformId = platformId;
	}

	public void clientGetContextGroupInfo() throws Exception {
		CompletionStage<ContextGroupInfo[]> getContextFuture = desktopConnection.getInterop().connect(this.platformId).thenCompose(client->{
			return client.getContextGroups();
		});
		
		ContextGroupInfo[] contextGroupInfo = getContextFuture.toCompletableFuture().get(100, TimeUnit.SECONDS);
		for(ContextGroupInfo c : contextGroupInfo) {
			//clientAddContextListener();
		}
	}

	public void clientGetInfoForContextGroup() throws Exception {
		CompletionStage<ContextGroupInfo> getContextFuture = desktopConnection.getInterop().connect(this.platformId).thenCompose(client->{
			return client.getInfoForContextGroup("red");
		});
		
		ContextGroupInfo contextGroupInfo = getContextFuture.toCompletableFuture().get(100, TimeUnit.SECONDS);
		logger.debug("Context Group Info" + contextGroupInfo.toString());
	}
	
	public void clientGetAllClientsInContextGroup() throws Exception {
		CompletionStage<ClientIdentity[]> getContextFuture = desktopConnection.getInterop().connect(this.platformId).thenCompose(client->{
			return client.joinContextGroup("red").thenCompose(v->{
				return client.getAllClientsInContextGroup("red");
			});
		});
		
		ClientIdentity[] clientIdentity = getContextFuture.toCompletableFuture().get(10, TimeUnit.SECONDS);
	}

	public void clientJoinThenRemoveFromContextGroup() throws Exception {
		AtomicInteger clientCntAfterJoin = new AtomicInteger(0);
		AtomicInteger clientCntAfterRemove = new AtomicInteger(0);
		CompletionStage<?> testFuture = desktopConnection.getInterop().connect(this.platformId).thenCompose(client->{
			return client.joinContextGroup("red").thenCompose(v->{
				return client.getAllClientsInContextGroup("red");
			}).thenAccept(clients->{
				clientCntAfterJoin.set(clients.length);
			}).thenCompose(v->{
				return client.removeFromContextGroup();
			}).thenCompose(v->{
				return client.getAllClientsInContextGroup("red");
			}).thenAccept(clients->{
				clientCntAfterRemove.set(clients.length);
			});
		});
		
		testFuture.toCompletableFuture().get(10, TimeUnit.SECONDS);
	}

	public void clientSetContext(String group, String ticker, String platformName) throws Exception {
		Context context = new Context();	
        JSONObject contextId = new JSONObject();
		contextId.put("ticker", ticker);
        context.setId(contextId);
		context.setName("MyName");
		context.setType("instrument");
		CompletionStage<Void> setContextFuture = desktopConnection.getInterop().connect(platformName).thenCompose(client->{
			return client.getContextGroups().thenCompose(groups->{
				return client.joinContextGroup(group).thenCompose(v->{
					return client.setContext(context);
				});
			});
		});
		
		setContextFuture.toCompletableFuture().get(10, TimeUnit.SECONDS);
	}

	public void clientAddContextListener() throws Exception {
		Context context = new Context();	
        JSONObject contextId = new JSONObject();
		contextId.put("ticker", "WMT");
        context.setId(contextId);
		context.setName("MyName");
		context.setType("instrument");

		CompletableFuture<Context> listenerInvokedFuture = new CompletableFuture<>();
		
		desktopConnection.getInterop().connect(this.platformId).thenCompose(client->{
			return client.addContextListener(ctx->{
				listenerInvokedFuture.complete(ctx);
			}).thenApply(v->{
				return client;
			});
		}).thenCompose(client->{
			return client.joinContextGroup("red").thenCompose(v->{
				return client.setContext(context);
			});
		});
		
		Context ctx = listenerInvokedFuture.toCompletableFuture().get(10, TimeUnit.SECONDS);
	}
	
	public void joinAllGroups(String color, JavaTest JT) throws Exception {
		CompletableFuture<Context> listenerInvokedFuture = new CompletableFuture<>();		
		JSONObject retval = new JSONObject(); 
			desktopConnection.getInterop().connect(platformId).thenCompose(client->{
				return client.getContextGroups().thenCompose(groups->{
					return client.joinContextGroup(color).thenCompose(v->{
						return client.addContextListener(ctx->{
							System.out.print(color + ctx.getId());
							JT.updateTicker(ctx.getId());
							listenerInvokedFuture.complete(ctx);
						});
					});
				});
			});
		}
	}


