'use client'
import Header from '@/components/Header'
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import { LocaleProvider } from '@/components/LocaleProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import styles from './layout.module.css';
const inter = Inter({ subsets: ["latin"] });

/*export const metadata = {
  title: "Art et Histoire",
  
};*/

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className +' '+styles.body}>
      <LocaleProvider>
        <ThemeProvider>
        <Header/>
        <main className = {styles.main}>
          {children}
        </main>
        <Footer/>
        </ThemeProvider>
        </LocaleProvider>
      </body>
      
    </html>
  );
}
