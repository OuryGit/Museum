import styles from './MenuNav.module.css';

export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
        <ul>
            <li><a href="#" onClick={() => setPage('accueil')}>Accueil</a></li>
            <li><a href="#" onClick={() => setPage('expositions')}>Expositions</a></li>
            <li><a href="#" onClick={() => setPage('contact')}>Contact</a></li>
            <li><a href="#"onClick={() => setPage('apropos')}>À propos</a></li>
        </ul>
    </nav>
}