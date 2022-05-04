import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.openfin.desktop.Ack;
import com.openfin.desktop.AckListener;
import com.openfin.desktop.ActionEvent;
import com.openfin.desktop.Application;
import com.openfin.desktop.ApplicationOptions;
import com.openfin.desktop.DesktopConnection;
import com.openfin.desktop.DesktopStateListener;
import com.openfin.desktop.OpenFinRuntime;
import com.openfin.desktop.RuntimeConfiguration;
import com.openfin.desktop.WindowOptions;

/**
 * Utitlites for Junit test code
 *
 * Test cases in this class need to have access to an OpenFin HTML5 app to verify sub/pub workflow.  Sources for the app can be found in release
 * directory: SimpleOpenFinApp.html.  It is hosted by OpenFin at https://cdn.openfin.co/examples/junit/SimpleOpenFinApp.html
 *
 * Created by wche on 1/23/16.
 *
 */
public class TestUtils {
    private static Logger logger = LoggerFactory.getLogger(TestUtils.class.getName());
    private static boolean connectionClosing;
    private static String runtimeVersion;
    private static CountDownLatch disconnectedLatch;
    public static final String openfin_app_url = "https://cdn.openfin.co/examples/junit/SimpleOpenFinApp.html";  // source is in release/SimpleOpenFinApp.html
    public static final String icon_url = "https://cdn.openfin.co/demos/hello/img/openfin.ico";
    public static final String hello_app_manifest_url = "https://cdn.openfin.co/demos/hello/app.json";

    static  {
        runtimeVersion = java.lang.System.getProperty("com.openfin.test.runtime.version");
        if (runtimeVersion == null) {
            runtimeVersion = "alpha";
        }
        logger.debug(String.format("Runtime version %s", runtimeVersion));
    }

    public static DesktopConnection setupConnection(String connectionUuid) throws Exception {
        return setupConnection(connectionUuid, null, null);
    }
    public static DesktopConnection setupConnection(String connectionUuid, RuntimeConfiguration configuration) throws Exception {
        logger.debug("starting from Runtime configuration");
        CountDownLatch connectedLatch = new CountDownLatch(1);
        disconnectedLatch = new CountDownLatch(1);
        // if RVM needs to download the version of Runtime specified, waitTime may need to be increased for slow download
        int waitTime = 60;
        String swaiTime = java.lang.System.getProperty("com.openfin.test.runtime.connect.wait.time");
        if (swaiTime != null) {
            waitTime = Integer.parseInt(swaiTime);
        }
        DesktopConnection desktopConnection = new DesktopConnection(connectionUuid);
        String args = java.lang.System.getProperty("com.openfin.test.runtime.additionalRuntimeArguments");
        if (args != null) {
            configuration.setAdditionalRuntimeArguments(args);
        }
        desktopConnection.connect(configuration, (DesktopStateListener) new DesktopStateListener() {
            @Override
            public void onReady() {
                logger.info("Connected to OpenFin runtime");
                connectionClosing = false;
                connectedLatch.countDown();
            }
            @Override
            public void onClose(String error) {
                logger.debug("Connection closed");
                disconnectedLatch.countDown();
            }

            @Override
            public void onError(String reason) {
                if (!connectionClosing) {
                    logger.error(String.format("Connection failed: %s", reason));
                } else {
                    logger.debug("Connection closed");
                }
            }

            @Override
            public void onMessage(String message) {
                logger.debug(String.format("Runtime incoming message: %s", message));
            }

            @Override
            public void onOutgoingMessage(String message) {
                logger.debug(String.format("Runtime outgoing message: %s", message));
            }
        }, waitTime);//this timeout (in 4.40.2.9) is ignored

        logger.debug("waiting for desktop to connect");
        connectedLatch.await(waitTime, TimeUnit.SECONDS);
        if (desktopConnection.isConnected()) {
            logger.debug("desktop connected");
        } else {
            throw new RuntimeException("failed to initialise desktop connection");
        }
        return desktopConnection;
    }

    public static DesktopConnection setupConnection(String connectionUuid, String rdmUrl, String assetsUrl) throws Exception {
        logger.debug("starting");
        CountDownLatch connectedLatch = new CountDownLatch(1);
        disconnectedLatch = new CountDownLatch(1);
        // if RVM needs to download the version of Runtime specified, waitTime may need to be increased for slow download
        int waitTime = 60;
        String swaiTime = java.lang.System.getProperty("com.openfin.test.runtime.connect.wait.time");
        if (swaiTime != null) {
            waitTime = Integer.parseInt(swaiTime);
        }

        DesktopConnection desktopConnection = new DesktopConnection(connectionUuid);
        RuntimeConfiguration configuration = new RuntimeConfiguration();
        configuration.setRuntimeVersion(runtimeVersion);
        String args = java.lang.System.getProperty("com.openfin.test.runtime.additionalRuntimeArguments");
        if (args != null) {
            configuration.setAdditionalRuntimeArguments(args);
        }
        configuration.setDevToolsPort(9090);
        configuration.setRdmURL(rdmUrl);
        configuration.setRuntimeAssetURL(assetsUrl);
        configuration.setLicenseKey("JavaAdapterJUnitTests");
        desktopConnection.connect(configuration, new DesktopStateListener() {
            @Override
            public void onReady() {
                logger.info("Connected to OpenFin runtime");
                connectionClosing = false;
                connectedLatch.countDown();
            }
            @Override
            public void onClose(String error) {
                logger.debug("Connection closed");
                disconnectedLatch.countDown();
                connectedLatch.countDown();  // interrupt connectedLatch.await
            }

            @Override
            public void onError(String reason) {
                if (!connectionClosing) {
                    logger.error(String.format("Connection failed: %s", reason));
                } else {
                    logger.debug("Connection closed");
                }
            }

            @Override
            public void onMessage(String message) {
                logger.debug(String.format("Runtime incoming message: %s", message));
            }

            @Override
            public void onOutgoingMessage(String message) {
                logger.debug(String.format("Runtime outgoing message: %s", message));
            }
        }, waitTime);//this timeout (in 4.40.2.9) is ignored

        logger.debug("waiting for desktop to connect");
        connectedLatch.await(waitTime, TimeUnit.SECONDS);
        if (desktopConnection.isConnected()) {
            logger.debug("desktop connected");
        } else {
            throw new RuntimeException("failed to initialise desktop connection");
        }
        return desktopConnection;
    }


    public static void teardownDesktopConnection(DesktopConnection desktopConnection) throws Exception {
        if (desktopConnection != null && desktopConnection.isConnected()) {
            connectionClosing = true;
            disconnectedLatch = new CountDownLatch(1);
            new OpenFinRuntime(desktopConnection).exit();
            logger.debug("waiting for desktop connection teardown");
            disconnectedLatch.await(20, TimeUnit.SECONDS);
            Thread.sleep(5000); //"Workaround for a RVM issue with creating Window class");
            logger.debug("desktop connection closed");
        } else {
            logger.debug("Not connected, no need to teardown");
        }
    }

    public static String getRuntimeVersion() {
        return runtimeVersion;
    }

    public static ApplicationOptions getAppOptions(String url) {
        return getAppOptions(UUID.randomUUID().toString(), url);
    }
    public static ApplicationOptions getAppOptions(String uuid, String url) {
        ApplicationOptions options = new ApplicationOptions(uuid, uuid, url == null?openfin_app_url:url);
        WindowOptions windowOptions = new WindowOptions();
        windowOptions.setAutoShow(true);
        windowOptions.setSaveWindowState(false);
        windowOptions.setDefaultTop(100);
        windowOptions.setDefaultLeft(100);
        windowOptions.setDefaultHeight(200);
        windowOptions.setDefaultWidth(200);
        options.setMainWindowOptions(windowOptions);
        return options;
    }

    public static WindowOptions getWindowOptions(String name, String url) throws Exception {
        WindowOptions options = new WindowOptions(name, url);
        options.setDefaultWidth(200);
        options.setDefaultHeight(200);
        options.setDefaultTop(200);
        options.setDefaultLeft(200);
        options.setSaveWindowState(false);  // so the window opens with the same default bounds every time
        options.setAutoShow(true);
        options.setFrame(true);
        options.setResizable(true);
        return options;
    }

    public static void pause(int milliSeconds) {
        try {
            Thread.sleep(milliSeconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
