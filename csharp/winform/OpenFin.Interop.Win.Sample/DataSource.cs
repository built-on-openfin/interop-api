using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace OpenFin.Interop.Win.Sample
{
    internal class DataSource
    {
        internal DataSource()
        {
            List<string> instrumentsList = new List<string> { "AAPL",
                                                            "CSCO",
                                                            "IBM",
                                                            "MSFT",
                                                            "TSLA" };

            instruments = new BindingSource();
            instruments.DataSource = instrumentsList;

            List<string> contactList = new List<string> {     
                                     "Avi Green",
                                     "Ashley James",
                                     "James Bond",
                                     "John Mandia",
                                     "John McHugh",
                                     "Lauren Boyle",
                                     "Sean Forbes",
                                     "Stella Pavlova",
                                     "Tim Barr",
                                     "Tom Ripley"};

            contacts = new BindingSource();
            contacts.DataSource = contactList;

            List<string> organizationList = new List<string> { "OpenFin", "OpenFin Demo Corp", "United Oil & Gas Corp" };

            organizations = new BindingSource();
            organizations.DataSource = organizationList;
        }

        private BindingSource instruments;

        private BindingSource contacts;

        private BindingSource organizations;

        internal BindingSource Instruments { get => instruments; }
        internal BindingSource Contacts { get => contacts;  }
        internal BindingSource Organizations { get => organizations; }

        internal string GetEmail(string name)
        {
            string email = "";

            switch (name)
            {
                case "Avi Green":
                    {
                        email = "avi.green@3rnfnf.onmicrosoft.com";
                        break;
                    }
                case "Ashley James":
                    {
                        email = "ashley.james@3rnfnf.onmicrosoft.com";
                        break;
                    }
                case "James Bond":
                    {
                        email = "bond_james@grandhotels.com";
                        break;
                    }
                case "John Mandia":
                    {
                        email = "john.mandia@openfin.co";
                        break;
                    }
                case "John McHugh":
                    {
                        email = "john.mchugh@gmail.com";
                        break;
                    }
                case "Lauren Boyle":
                    {
                        email = "lauren.boyle@3rnfnf.onmicrosoft.com";
                        break;
                    }
                case "Sean Forbes":
                    {
                        email = "sean.forbes@3rnfnf.onmicrosoft.com";
                        break;
                    }
                case "Tim Barr":
                    {
                        email = "tim.barr@3rnfnf.onmicrosoft.com";
                        break;
                    }
                case "Tom Ripley":
                    {
                        email = "tom.ripley@3rnfnf.onmicrosoft.com";
                        break;
                    }
            }

            return email;
        }

        internal string GetCompanyId(string name)
        {
            string companyId = "";

            switch (name)
            {
                case "OpenFin":
                    {
                        companyId = "3";
                        break;
                    }
                case "OpenFin Demo Corp":
                    {
                        companyId = "2";
                        break;
                    }
                case "United Oil & Gas Corp":
                    {
                        companyId = "1";
                        break;
                    }
            }

            return companyId;
        }
    }
}
