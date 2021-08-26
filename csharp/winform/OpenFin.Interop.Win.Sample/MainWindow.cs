using System;
using System.Collections.Generic;
using System.Windows.Forms;
using Openfin.WinForm;

namespace OpenFin.Interop.Win.Sample
{
    public partial class MainWindow : Form
    {
        OpenFinIntegration _openFin;

        public MainWindow()
        {
            InitializeComponent();

            instrumentComboBox.SelectedIndex = 0;
            contextGroupComboBox.SelectedIndex = 0;

            // OpenFin Integration
            _openFin = new OpenFinIntegration();
            _openFin.RuntimeConnected += openFin_RuntimeConnected;
            _openFin.RuntimeDisconnected += openFin_RuntimeDisconnected;
            _openFin.InteropConnected += openFin_InteropConnected;
            _openFin.InteropContextReceived += openFin_InteropContextReceived;
            _openFin.InteropContextGroupsReceived += openFin_InteropContextGroupsReceived;
            var appOptions = new Openfin.Desktop.ApplicationOptions("fs-chart", "fs-chart-uuid", "https://openfin-iex.experolabs.com/#/stock-quote");
            appOptions.SetProperty("fdc3InteropApi", "1.2");
            appOptions.MainWindowOptions.PreloadScripts = new List<Openfin.Desktop.PreloadScript>() { 
                new Openfin.Desktop.PreloadScript($"{Environment.CurrentDirectory}\\preload.js", false)
            };
            this.embeddedView.Initialize(_openFin.DotNetOptions, appOptions);
        }

        private void submitContextButton_Click(object sender, EventArgs e)
        {
            _openFin.SendBroadcast(instrumentComboBox.SelectedItem.ToString());
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
        }


        private void createBrokerButton_Click(object sender, EventArgs e)
        {
            var broker = interopBrokerInput.Text;
            if (broker != "" && broker != "openfin-browser")
            {
                _openFin.CreateInteropBroker(broker);
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

        private void openFin_InteropContextReceived(object sender, InstrumentContextReceivedEventArgs e)
        {
            Invoke(new Action(() =>
            {
                var contextInstrument = "Unknown Context Received";
                if(e.InstrumentContext != null)
                {
                    contextInstrument = e.InstrumentContext.Id["ticker"];
                }
                receivedContext.Text = contextInstrument;
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
    }
}
