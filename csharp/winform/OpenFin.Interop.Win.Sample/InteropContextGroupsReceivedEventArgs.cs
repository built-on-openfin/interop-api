using System;

namespace OpenFin.Interop.Win.Sample
{
    public class InteropContextGroupsReceivedEventArgs : EventArgs
    {
        public InteropContextGroupsReceivedEventArgs(object[] contextGroupIds)
        {
            ContextGroupIds = contextGroupIds;
        }

        public object[] ContextGroupIds { get; protected set; }
    }
}
