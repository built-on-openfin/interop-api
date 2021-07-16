using Newtonsoft.Json;

namespace OpenFin.Interop.Win.Sample
{
    public class InstrumentContext : ContextBase
    {
        [JsonProperty("type")]
        public override string Type => "instrument";
    }
}
