import styles from './Header.module.css';
import MenuNav from './MenuNav';
import Image from 'next/image';
import logo from '@/public/museum.webp';

export default function Header() {
    return <header className={styles.header}>
       
        <div className={styles.title}>  
            <Image
                src={logo}
                alt="Logo React"
                width={40}
            />
            <h1>Art et Histoire</h1>
        </div>
        <MenuNav/>
    </header>
}