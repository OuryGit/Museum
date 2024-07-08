import Connexion from "@/components/Connexion";


export const metadata = {
    title: 'Connexion',
    description: 'Cette page permet aux utilisateurs de se connecter pour accéder aux contenus exclusifs et aux fonctionnalités du musée de React et Next.js.',
    openGraph: {
        title: 'Connexion',
        description: 'Cette page permet aux utilisateurs de se connecter pour accéder aux contenus exclusifs et aux fonctionnalités du musée de React et Next.js.',
        images: ['./react.webp']
    }
}

export default function Page() {
    return <>
        <Connexion/>
    </>;
  
  }
  