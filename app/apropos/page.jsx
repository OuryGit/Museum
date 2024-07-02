import Apropos from "@/components/Apropos";



export const metadata = {
    title: 'apropos | Site web présentant un musée de React et Next',
    description: 'Page de apropos',
    openGraph: {
        title: 'Apropos | Site web présentant un musée de React et Next',
        description: 'Page A propos',
        images: ['./react.webp']
    }
}

export default function Page() {
    return <>
        <Apropos/>
    </>;
  
  }
  