using Newtonsoft.Json;

namespace OpenFin.Interop.Win.Sample
{
    public class Fdc3ContactContext : ContextBase
    {
        [JsonProperty("type")]
        public override string Type => "fdc3.contact";

    }
}
