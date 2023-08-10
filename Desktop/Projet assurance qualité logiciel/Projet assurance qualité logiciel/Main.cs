using System;
namespace Projet_assurance_qualité_logiciel
{
	public class Main
	{
        private static List<Contact> contacts = new List<Contact>();

        public static void AfficherMenu()
        {
            Console.WriteLine("--------------- Menu ---------------");
            Console.WriteLine("1. Ajouter un contact");
            Console.WriteLine("2. Afficher le contenu du répertoire");
            Console.WriteLine("3. Chercher le numéro de téléphone d'une personne");
            Console.WriteLine("4. Quitter le programme");
        }

        public static void AjouterContact()
        {
            Console.Write("Nom : ");
            string nom = Console.ReadLine();

            Console.Write("Prénom : ");
            string prenom = Console.ReadLine();

            Console.Write("Numéro de téléphone : ");
            string numeroTelephone = Console.ReadLine();

            Console.Write("Type (Domicile) : ");
            string typeContact = Console.ReadLine();

            Contact contact = new Contact(nom, prenom, numeroTelephone, typeContact);
            contacts.Add(contact);
            Console.WriteLine("Contact ajouté!");
        }

        public static void AfficherRepertoire()
        {
            Console.WriteLine("-------- Répertoire Téléphonique -------");
            foreach (var contact in contacts)
            {
                Console.WriteLine($"{contact.Nom} {contact.Prenom} - {contact.NumeroTelephone} ({contact.TypeContact})");
            }
            Console.WriteLine("----------------------------------------");
        }

        public static void ChercherNumeroTelephone()
        {
            Console.Write("Nom de la personne : ");
            string nom = Console.ReadLine();
            Console.Write("Prénom de la personne : ");
            string prenom = Console.ReadLine();

            Contact contactTrouve = contacts.Find(c => c.Nom == nom && c.Prenom == prenom);
            if (contactTrouve != null)
            {
                Console.WriteLine($"Numéro de téléphone de {nom} {prenom} : {contactTrouve.NumeroTelephone} ({contactTrouve.TypeContact})");
            }
            else
            {
                Console.WriteLine($"{nom} {prenom} n'a pas été trouvé dans le répertoire.");
            }
        }

        
    }
}