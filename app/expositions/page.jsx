import Expositions from "@/components/Expositions";
export const metadata = {
    title: 'Expositions' ,
    description: 'Cette page présente les différentes expositions du musée, mettant en valeur des projets et des œuvres réalisés avec React et Next.js.',
    openGraph: {
        title: 'Expositions' ,
        description: 'Cette page présente les différentes expositions du musée, mettant en valeur des projets et des œuvres réalisés avec React et Next.js.',
        images: ['./react.webp']
    }
}
export default function Page() {
    return <>
        <Expositions/>
    </>;
    }
    