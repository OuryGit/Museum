import styles from './Accueil.module.css';
import Citation from './Citation';

export default function Accueil() {
    return (
        
        <div className={styles.welcome}>
            <h1 className={styles.bienvenue}>
                Bienvenue à votre musée Art et Histoire
            </h1>
        </div>
    );
}