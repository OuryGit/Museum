import styles from './Header.module.css';
import MenuNav from './MenuNav';
import React, {useState} from 'react';
import { MdOutlineMuseum } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';
import { IoCloseSharp } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Header({setPage}) {

    return <section className={styles.navBarSection}> 
    <header className={`${styles.header} ${styles.flex}`}>

        <div className={styles.logoDiv}>
            <a href="#" className={`${styles.logo} ${styles.flex}`}>
                <h1> <MdOutlineMuseum className={styles.icon} /> Art et Histoire. </h1>
            </a>
            
        </div>
        
        <div className={styles.navBar}>
                <MenuNav setPage={setPage} />
        </div>
        
        <div id={styles.mobile}>
            <div  className={styles.menuBar}>
                <CiMenuBurger className={styles.icon} />
            </div>
            <div className={styles.closeBar} >
                <AiFillCloseCircle className={styles.icon} />
            </div>
        </div>
       

            {/* <div className={styles.title}>  
                <Image
                    src={logo}
                    alt="Logo React"
                    width={40}
                />
                <h1>Art et Histoire</h1>
            </div>
            <MenuNav setPage={setPage} /> */}
      
        
    </header>
</section>
}