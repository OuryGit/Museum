import styles from './MenuNav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import styles1 from '@/components/Header.module.css'

export default function MenuNav() {
    const router= useRouter();
    const currentPath = usePathname();

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
            <li className={`${styles.navItem} ${currentPath === '/' ? styles.active : ''}`} onClick={() => router.push('/')}>
                    <a className={styles.navLink}>Accueil</a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/expositions' ? styles.active : ''}`} onClick={() => router.push('/expositions')}>
                    <a className={styles.navLink}>Expositions</a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/contact' ? styles.active : ''}`} onClick={() => router.push('/contact')}>
                    <a className={styles.navLink}>Contact</a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/apropos' ? styles.active : ''}`} onClick={() => router.push('/apropos')}>
                    <a className={styles.navLink}>À propos</a>
                </li>
           
        {/* <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/">Accueil</Link>
            </li>
            <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/expositions">Expositions</Link>
             </li>
            <li className={styles.navItem}>
                    <Link className={styles.navLink} href="/contact">Contact</Link>
            </li>*/}

        </ul>
    </nav>
    );
}