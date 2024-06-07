'use client'
import Header from '@/components/Header'
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';
import { useState } from 'react';
//import Citation from '@/components/Citation';
import Expositions from '@/components/Expositions';
import Accueil from '@/components/Accueil';
import Connexion from '@/components/conexion';
import Apropos from '@/components/Apropos';
const inter = Inter({ subsets: ["latin"] });

/*export const metadata = {
  title: "Art et Histoire",
  
};*/

export default function RootLayout({ children }) {
  const [page, setPage] =useState('acceuil');
  return (
    <html lang="en">
      <body className={inter.className +' '+styles.body}>
        <Header setPage={setPage}/>
        {/*children*/}
        <main className = {styles.main}>
          {
           page ==='connexion' ? <Connexion/> 
            : page ==='apropos' ? <Apropos/>
            : page ==='expositions' ? <Expositions/>
            : <Accueil/>
          }
        </main>
        <Footer/>
      </body>
    </html>
  );
}
