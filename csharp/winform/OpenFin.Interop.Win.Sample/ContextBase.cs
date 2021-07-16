using Newtonsoft.Json;
using Openfin.Desktop.InteropAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace OpenFin.Interop.Win.Sample
{
    public class ContextBase: Context
    {
        private static Dictionary<string, object> customProps;
        private static Dictionary<string, List<PropertyInfo>> properties;

        [JsonProperty("type")]
        public new virtual string Type { get; set; }

        [JsonProperty("name")]
        public new string Name { get; set; }

        [JsonProperty("id")]
        public new Dictionary<string, string> Id { get; set; }

        public object this[string propertyName]
        {
            get
            {
                var prop = getPropertyInfoByPropertyName(propertyName);

                if (prop == null)
                    return customProps[propertyName];
                else
                    return prop.GetValue(this);
            }
            set
            {
                var prop = getPropertyInfoByPropertyName(propertyName);

                if (prop != null)
                {
                    try
                    {
                        prop.SetValue(this, value);
                    }
                    catch (Exception ex)
                    {
                        if (ex.Message == "Property set method not found.")
                        {
                            throw new ArgumentException("Assignment to read-only properties is not allowed. Check the object definition and/or its base class for a property with this key name and ensure it is not a read-only property.");
                        }
                    }
                }
                else
                {
                    customProps[propertyName] = value;
                }
            }
        }

        public ContextBase()
        {
            if (customProps == null)
                customProps = new Dictionary<string, object>();

            if (properties == null)
                properties = new Dictionary<string, List<PropertyInfo>>();

            Id = new Dictionary<string, string>();
        }

        private PropertyInfo getPropertyInfoByPropertyName(string propertyName)
        {
            if (!properties.ContainsKey(this.GetType().Name))
            {
                properties[this.GetType().Name] = this.GetType().GetProperties().ToList();
            }

            return properties[this.GetType().Name].FirstOrDefault(x => x.Name == propertyName);
        }
    }
}
