using Openfin.Desktop;
using Openfin.Desktop.InteropAPI;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace OpenFin.Interop.Win.Sample
{
    class OpenFinIntegration
    {
        private string DotNetUuid;

        private readonly Runtime _runtime;
        private InteropClient _interopClient;
        private InteropBroker _interopBroker;

        public RuntimeOptions DotNetOptions { get; }

        public OpenFinIntegration(string uuid = null)
        {
            if(uuid != null)
            {
                DotNetUuid = uuid;
            }
            else
            {
                int count = Process.GetProcessesByName(Process.GetCurrentProcess().ProcessName).Length;
                DotNetUuid = "interop-winfom-sample-" + count;
            }

            DotNetOptions = new RuntimeOptions()
            {
                UUID = DotNetUuid,
                Version = "stable"
            };

            _runtime = Runtime.GetRuntimeInstance(DotNetOptions);
       
            _runtime.Disconnected += Runtime_Disconnected;
        }

        public event EventHandler RuntimeConnected;
        public event EventHandler RuntimeDisconnected;
        public event EventHandler InteropConnected;
        public event EventHandler<InstrumentContextReceivedEventArgs> InteropContextReceived;
        public event EventHandler<InteropContextGroupsReceivedEventArgs> InteropContextGroupsReceived;

        private async Task<InteropClient> ConnectAsync(string brokerName)
        {
            return await _runtime.Interop.ConnectAsync(brokerName).ConfigureAwait(true);
        }

        private async Task<InteropBroker> CreateAsync(string brokerName)
        {
            return await _runtime.Interop.CreateAsync(brokerName).ConfigureAwait(true);
        }

        private async Task ConnectInteropClient(string brokerName)
        {
            _interopClient = await ConnectAsync(brokerName);

            await _interopClient.AddContextHandlerAsync(ctx => {
                Console.WriteLine("Interop Context Received!");
                InteropContextReceived?.Invoke(this, new InstrumentContextReceivedEventArgs(ctx));
            });
            var c = _runtime.WrapApplication("openfin-browser");
            
            var contextGroups = await _interopClient.GetContextGroupsAsync();
            var contextGroupIds = contextGroups.Select(group => group.Id).ToArray();
            InteropContextGroupsReceived?.Invoke(this, new InteropContextGroupsReceivedEventArgs(contextGroupIds));
            InteropConnected?.Invoke(this, EventArgs.Empty);
        }

        public void SendBroadcast(string instrument)
        {
            var instrumentContext = new InstrumentContext();
            instrumentContext.Id.Add("ticker", instrument);
            _interopClient.SetContextAsync(instrumentContext);
        }

        public async void LeaveContextGroup()
        {
            await _interopClient.RemoveFromContextGroupAsync();
        }

        public async void ConnectToContextGroup(string contextGroupId)
        {
            await _interopClient.JoinContextGroupAsync(contextGroupId);
        }

        public void ConnectToInteropBroker(string broker)
        {
            // Launch and Connect to the OpenFin Runtime
            // If already connected, callback executes immediately
            _runtime.Connect(async () =>
            {
                Console.WriteLine("Runtime object connected!");
                RuntimeConnected?.Invoke(this, EventArgs.Empty);

                await ConnectInteropClient(broker);
            });
        }

        public void CreateInteropBroker(string broker)
        {
            // Launch and Connect to the OpenFin Runtime
            // If already connected, callback executes immediately
            _runtime.Connect(async () =>
            {
                Console.WriteLine("Runtime object connected!");
                RuntimeConnected?.Invoke(this, EventArgs.Empty);

                _interopBroker = await CreateAsync(broker);

                await ConnectInteropClient(broker);
            });
        }

        private void Runtime_Disconnected(object sender, EventArgs e)
        {
            RuntimeDisconnected?.Invoke(this, EventArgs.Empty);
        }
    }
}
