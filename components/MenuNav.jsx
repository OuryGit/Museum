import styles from './MenuNav.module.css';
import styles1 from '@/components/Header.module.css'
export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
        <ul className={styles.navList} >
            <li className={styles.navItem}>
                <a className={styles.navLink} href="#" onClick={() => setPage('accueil')}>Accueil</a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navLink} href="#" onClick={() => setPage('expositions')}>Expositions</a>
            </li>
            <li  className={styles.navItem}>
                <a className={styles.navLink} href="#" onClick={() => setPage('connexion')}>Contact</a>
            </li>
            <li  className={styles.navItem}>
                <a className={styles.navLink} href="#"onClick={() => setPage('apropos')}>À propos</a>
            </li>
            <button className={`${styles.btn} ${styles.btn} `}>
             <a className={styles.visiter} href="#"onClick={() => setPage('connexion')}>VISITER</a>
            </button>
           
        </ul>
    </nav>
}