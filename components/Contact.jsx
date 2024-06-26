import styles from './Contact.module.css'
import FormHook from './FormHook';

export default function Contact() {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <h1>Contactez-nous</h1>
                <p>Adresse: Stewart 690, rue Sherbrooke Ouest Montréal, QC</p>
                <p>Téléphone: +123 456 7890</p>
                <p>Email: arthistoire@exemple.com</p>

                <FormHook />

                {/* <form className={styles.contactForm}>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Envoyer</button>
                </form> */}

                <div className={styles.socialMedia}>
                    <a href="https://www.facebook.com" target="_blank" >Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" >Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" >Instagram</a>
                </div>
                <p>Heures ouverture : Lundi - Vendredi, 9h - 18h</p>
            </div>
        </div>
    );
}