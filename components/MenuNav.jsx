import styles from './MenuNav.module.css';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl'
import { useTheme } from './ThemeProvider';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from './LocaleProvider';
import styles1 from '@/components/Header.module.css'


export default function MenuNav() {
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }
    const [locale, setLocale] = useLocale();
    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        }
        else {
            setLocale('fr');
        }
    }
    const router= useRouter();
    const [theme, setTheme] = useTheme();
    const currentPath = usePathname();

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={`${styles.navItem} ${currentPath === '/' ? styles.active : ''}`} onClick={() => router.push('/')}>
                    <a className={styles.navLink}>
                        <FormattedMessage id='app.header.menu.lien1'/>
                    </a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/expositions' ? styles.active : ''}`} onClick={() => router.push('/expositions')}>
                    <a className={styles.navLink}><FormattedMessage id='app.header.menu.lien2'/></a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/contact' ? styles.active : ''}`} onClick={() => router.push('/contact')}>
                    <a className={styles.navLink}><FormattedMessage id='app.header.menu.lien3'/></a>
                </li>
                <li className={`${styles.navItem} ${currentPath === '/connexion' ? styles.active : ''}`} onClick={() => router.push('/connexion')}>
                    <a className={styles.navLink}><FormattedMessage id='app.header.menu.lien4'/></a>
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
        <label>
        <FormattedMessage id='app.header.theme'/>
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleTheme}
            />
        </label>
        <div>
            <label>
                EN :
                <input
                    type="checkbox"
                    checked={locale === 'en'}
                    onChange={handleLocale} />
            </label>
        </div>
    </nav>
    );
}