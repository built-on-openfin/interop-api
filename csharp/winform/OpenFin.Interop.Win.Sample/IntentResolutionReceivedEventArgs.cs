using Openfin.Desktop.InteropAPI;
using System;

namespace OpenFin.Interop.Win.Sample
{
    public class IntentResolutionReceivedEventArgs : EventArgs
    {
        private readonly IntentResolution resolution;

        public IntentResolutionReceivedEventArgs(IntentResolution resolution)
        {
            this.resolution = resolution;
        }

        public IntentResolutionReceivedEventArgs()
        {
            IsDismissed = true;
        }

        public bool IsDismissed { get; private set; }
        public string Version => resolution.Version;
        public string Source => resolution.Source;
    }
}
