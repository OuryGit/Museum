using System;
namespace Projet_assurance_qualité_logiciel
{
	public class Contact
	{
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string NumeroTelephone { get; set; }
        public string TypeContact { get; set; }

        public Contact(string nom, string prenom, string numeroTelephone, string typeContact)
        {
            Nom = nom;
            Prenom = prenom;
            NumeroTelephone = numeroTelephone;
            TypeContact = typeContact;
        }
     }
}

