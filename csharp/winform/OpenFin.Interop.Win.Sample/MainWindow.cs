using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Openfin.WinForm;

namespace OpenFin.Interop.Win.Sample
{
    public partial class MainWindow : Form
    {
        OpenFinIntegration _openFin;
        DataSource _dataSource;

        public MainWindow()
        {
            InitializeComponent();

            _dataSource = new DataSource();
            ContextItemComboBox.SelectedIndex = 0;
            contextGroupComboBox.SelectedIndex = 0;
            contextTypeDropDown.SelectedIndex = 0;

            // OpenFin Integration
            _openFin = new OpenFinIntegration();
            _openFin.RuntimeConnected += openFin_RuntimeConnected;
            _openFin.RuntimeDisconnected += openFin_RuntimeDisconnected;
            _openFin.InteropConnected += openFin_InteropConnected;
            _openFin.InteropContextReceived += openFin_InteropContextReceived;
            _openFin.InteropContextGroupsReceived += openFin_InteropContextGroupsReceived;
        }

        private void submitContextButton_Click(object sender, EventArgs e)
        {
            _openFin.SendBroadcast(ContextItemComboBox.SelectedItem.ToString(), contextTypeDropDown.SelectedItem.ToString());
        }


        private void connectToBrokerButton_Click(object sender, EventArgs e)
        {
            var broker = interopBrokerInput.Text;
            if(broker == "")
            {
                broker = "openfin-browser";
                interopBrokerInput.Text = broker;
            }
            _openFin.ConnectToInteropBroker(broker);
            setWebView(broker);
        }

        private void setWebView(string broker)
        {
            var appOptions = new Openfin.Desktop.ApplicationOptions("interop-sample", "interop-sample-uuid", "https://fdc3.finos.org/toolbox/fdc3-workbench/");
            appOptions.SetProperty("fdc3InteropApi", "1.2");
            appOptions.MainWindowOptions.PreloadScripts = new List<Openfin.Desktop.PreloadScript>() {
                new Openfin.Desktop.PreloadScript($"{Environment.CurrentDirectory}\\preload.js", false)
            };
            var customData = new Dictionary<string, object>();
            customData.Add("brokerId", broker);
            appOptions.MainWindowOptions.CustomData = customData;
            this.embeddedView.Initialize(_openFin.DotNetOptions, appOptions);
        }
        private void createBrokerButton_Click(object sender, EventArgs e)
        {
            var broker = interopBrokerInput.Text;
            if (broker != "" && broker != "openfin-browser")
            {
                _openFin.CreateInteropBroker(broker);
                setWebView(broker);
            }
        }

        private bool EnableCreateBroker(string brokerName)
        {
            return !string.IsNullOrWhiteSpace(brokerName) && brokerName != "openfin-browser";
        }

        #region OpenFin Events

        private void openFin_RuntimeConnected(object sender, EventArgs e)
        {
            Invoke(new Action(() => openFinStatusLabel.Text = "OpenFin Connected"));
            connectToBrokerButton.Enabled = true;
        }

        private void openFin_RuntimeDisconnected(object sender, EventArgs e)
        {
            Invoke(new Action(() =>
            {
                openFinStatusLabel.Text = "OpenFin Disconnected";
                connectToBrokerButton.Enabled = false;
            }));
        }

        private void openFin_InteropConnected(object sender, EventArgs e)
        {
            Invoke(new Action(() => {
                openFinStatusLabel.Text = "Interop Connected";
                connectToBrokerButton.Enabled = false;
                createBrokerButton.Enabled = false;
                interopBrokerInput.Enabled = false;
            }));
        }

        private void openFin_InteropContextReceived(object sender, ContextReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                var contextReceived = "Unknown Context Received";
                if(e.InstrumentContext != null)
                {
                    contextReceived = e.InstrumentContext.Id["ticker"];
                    receivedContext.Text = contextReceived;
                }
                if (e.Fdc3InstrumentContext != null)
                {
                    contextReceived = e.Fdc3InstrumentContext.Id["ticker"];
                    receivedContext.Text = contextReceived;
                }
                if (e.Fdc3ContactContext != null)
                {
                    contextReceived = e.Fdc3ContactContext.Name;
                    receivedContext.Text = contextReceived;
                }
                if (e.Fdc3OrganizationContext != null)
                {
                    contextReceived = e.Fdc3OrganizationContext.Name;
                    receivedContext.Text = contextReceived;
                }
            }));
        }

        private void openFin_InteropContextGroupsReceived(object sender, InteropContextGroupsReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                contextGroupComboBox.Items.Clear();
                contextGroupComboBox.Items.Add("none");
                contextGroupComboBox.Items.AddRange(e.ContextGroupIds);
                contextGroupComboBox.SelectedIndex = 0;
                contextGroupComboBox.Enabled = true;
            }));
        }

        #endregion

        private void contextGroupComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            var contextGroupId = contextGroupComboBox.SelectedItem.ToString();
            if(contextGroupId != "none" && contextGroupId.IndexOf("N/A") > -1 == false && _openFin != null)
            {
                _openFin.ConnectToContextGroup(contextGroupId);
                submitContextButton.Enabled = true;
            }
            else if(contextGroupId == "none" && _openFin != null)
            {
                _openFin.LeaveContextGroup();
                submitContextButton.Enabled = false;
            }
        }

        private void interopBrokerInput_Leave(object sender, EventArgs e)
        {
            createBrokerButton.Enabled = EnableCreateBroker(interopBrokerInput.Text);
        }

        private void interopBrokerInput_TextChanged(object sender, EventArgs e)
        {
            createBrokerButton.Enabled = EnableCreateBroker(interopBrokerInput.Text);
        }

        private void contextTypeDropDown_SelectedIndexChanged(object sender, EventArgs e)
        {
            ContextInputLabel.Text = contextTypeDropDown.SelectedItem as string;

            switch (contextTypeDropDown.SelectedItem)
            {
                case "Instrument":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Instruments.DataSource;
                        break;
                    }
                case "Contact":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Contacts.DataSource;
                        break;
                    }
                case "Organization":
                    {
                        ContextItemComboBox.DataSource = _dataSource.Organizations.DataSource;
                        break;
                    }
            }
        }
    }
}
