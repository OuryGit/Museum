import Connexion from "@/components/Connexion";

// tu le  mettra ici
export const metadata = {
    title: 'Connexion | Site web présentant un musée de React et Next',
    description: 'Page de Connexion',
    openGraph: {
        title: 'Connexion | Site web présentant un musée de React et Next',
        description: 'Page de Connexion',
        images: ['./react.webp']
    }
}

export default function Page() {
    return <>
        <Connexion/>
    </>;
  
  }
  