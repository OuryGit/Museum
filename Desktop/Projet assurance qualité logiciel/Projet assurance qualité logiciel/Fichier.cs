using System;
namespace Projet_assurance_qualité_logiciel
{
	public class Fichier
	{
        public static void SauvegarderContacts(List<Contact> contacts)
        {
            using (StreamWriter fichier = new StreamWriter("repertoire.txt"))
            {
                foreach (var contact in contacts)
                {
                    string ligne = $"{contact.Nom},{contact.Prenom},{contact.NumeroTelephone},{contact.TypeContact}";
                    fichier.WriteLine(ligne);
                }
            }
        }


        public static List<Contact> ChargerContacts()
        {
            List<Contact> contacts = new List<Contact>();

            try
            {
                using (StreamReader fichier = new StreamReader("repertoire.txt"))
                {
                    string ligne;

                      while ((ligne = fichier.ReadLine()) != null)
                        {
                          string[] elements = ligne.Split(',');
                        if (elements.Length == 4)
                        {
                            string nom = elements[0];
                            string prenom = elements[1];
                            string numeroTelephone = elements[2];
                            string typeContact = elements[3];
                            Contact contact = new Contact(nom, prenom, numeroTelephone, typeContact);
                            contacts.Add(contact);
                        }
                    }
                }
            }
            catch (FileNotFoundException)
            {
                // lorsque le fichier est non trouvé, on a une liste vide
            }
            return contacts;
        }
    }
}
