import styles from "./page.module.css";
import Accueil from "@/components/Accueil";


export const metadata = {
  title: 'Musée art et histoire| Accueil',
  description: 'Cette page offre une introduction au musée de React et Next.js. on peut trouver un descriptif détaillé du musée, parcourir des images captivantes, et lire les avis des visiteurs pour avoir un aperçu des expositions et des expériences proposées.',
  openGraph: {
    title: 'Musée art et histoire | Accueil',
    description: 'Cette page offre une introduction au musée de React et Next.js. on peut trouver un descriptif détaillé du musée, parcourir des images captivantes, et lire les avis des visiteurs pour avoir un aperçu des expositions et des expériences proposées.',
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
