import Contact from "@/components/Contact";

//les metadata de page 


export const metadata = {
    title: 'Contact',
    description: 'Cette page permet aux utilisateurs de contacter le personnel du musée pour toute question ou demande .',
    openGraph: {
        title: 'Contact',
        description: 'Cette page permet aux utilisateurs de contacter le personnel du musée pour toute question ou demande .',
        images: ['./react.webp']
    }
}
export default function Page() {
    return <>
        <Contact/>
    </>;
    }