import Expositions from "@/components/Expositions";
export const metadata = {
    title: 'Expositions | Site web présentant un musée de React et Next',
    description: 'Page Expositions',
    openGraph: {
        title: 'Connexion | Site web présentant un musée de React et Next',
        description: 'Page expostions',
        images: ['./react.webp']
    }
}
export default function Page() {
    return <>
        <Expositions/>
    </>;
    }
    