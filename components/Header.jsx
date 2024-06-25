import React, { useState } from 'react';
import styles from './Header.module.css';
import MenuNav from './MenuNav';
import { MdOutlineMuseum } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import { useTheme } from './ThemeProvider';
export default function Header({ setPage }) {
    const [theme,setTheme]= useTheme();
    // État pour contrôler quel icône est actuellement visible
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    // Fonction pour basculer l'état de la visibilité des icônes
    const toggleIcons = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <section className={styles.navBarSection}> 
            <header className={`${styles.header} ${styles.flex} ${styles.header +' '+
        (theme === 'light'? styles.light : styles.dark)
        }`} >
                <div className={styles.logoDiv}>
                    <a href="#" className={`${styles.logo} ${styles.flex}`}>
                        <h1> <MdOutlineMuseum className={styles.icon} /> Art et Histoire. </h1>
                    </a>
                </div>
                 <div className={styles.navBar} style={{ display: isMenuVisible ? 'block' : 'none' }}>
                    <MenuNav setPage={setPage} />
                </div> 
                <div id={styles.mobile}>
                    {/* Icône du menu */}
                    <div className={styles.menuBar} onClick={toggleIcons} style={{ display: isMenuVisible ? 'none' : 'block' }}>
                        <CiMenuBurger className={styles.icon} />
                    </div>
                    {/* Icône de fermeture */}
                    <div className={styles.closeBar} onClick={toggleIcons} style={{ display: !isMenuVisible ? 'none' : 'block' }}>
                        <AiFillCloseCircle className={styles.icon} />
                     
                    </div>
                </div>
            </header>
        </section>
    );
}

