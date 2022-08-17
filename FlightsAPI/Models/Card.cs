using System;
using System.Collections.Generic;

namespace FlightsAPI.Models
{
    public partial class Card
    {
        public Card()
        {
            Purchases = new HashSet<Purchase>();
        }

        public string Pan { get; set; } = null!;
        public string? UserName { get; set; }
        public string? Franchise { get; set; }

        public virtual User? UserNameNavigation { get; set; }
        public virtual ICollection<Purchase> Purchases { get; set; }

        public void cifrar()
        {
            this.Pan = Cifrado.Cifrar(this.Pan);
            this.UserName = Cifrado.Cifrar(this.UserName);
            this.Franchise = Cifrado.Cifrar(this.Franchise);


        }
        public void decifrar()
        {
            this.Pan = Cifrado.Decifrar(this.Pan);
            this.UserName = Cifrado.Decifrar(this.UserName);
            this.Franchise = Cifrado.Decifrar(this.Franchise);

        }
    }
}
