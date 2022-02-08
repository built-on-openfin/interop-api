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
                                     "John Bond",
                                     "John Mandia",
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
                case "John Bond":
                    {
                        email = "bond_john@grandhotels.com";
                        break;
                    }
                case "John Mandia":
                    {
                        email = "john.mandia@openfin.co";
                        break;
                    }
                case "Lauren Boyle":
                    {
                        email = "lboyle@uog.com";
                        break;
                    }
                case "Sean Forbes":
                    {
                        email = "sean@edge.com";
                        break;
                    }
                case "Stella Pavlova":
                    {
                        email = "spavlova@uog.com";
                        break;
                    }
                case "Tim Barr":
                    {
                        email = "barr_tim@grandhotels.com";
                        break;
                    }
                case "Tom Ripley":
                    {
                        email = "tripley@uog.com";
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
