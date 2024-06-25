import styles from "./page.module.css";
import Accueil from "@/components/Accueil";


export const metadata = {
  title: 'Musée art et histoire| Accueil',
  description: 'Site web présentant un musée de React et Next.js.',
  openGraph: {
    title: 'Musée art et histoire | Accueil',
    description: 'Site web présentant un musée de React et Next.js.',
    images: ['./react.webp']
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Accueil/>
    </main>
  );
}
