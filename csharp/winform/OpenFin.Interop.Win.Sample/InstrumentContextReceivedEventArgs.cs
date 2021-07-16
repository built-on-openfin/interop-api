using Newtonsoft.Json.Linq;
using Openfin.Desktop.InteropAPI;
using System;
using System.Collections.Generic;

namespace OpenFin.Interop.Win.Sample
{
    public class InstrumentContextReceivedEventArgs : EventArgs
    {
        public InstrumentContextReceivedEventArgs(Context context)
        {
            if(context.Type.IndexOf("instrument") > -1)
            {
                var instrumentContext = new InstrumentContext
                {
                    Type = context.Type,
                    Name = context.Name,
                    Id = (context.Id as JObject).ToObject<Dictionary<string, string>>()
                };
                InstrumentContext = instrumentContext;
            }
        }

        public InstrumentContext InstrumentContext { get; protected set; }
    }
}
