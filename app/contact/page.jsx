import Contact from "@/components/Contact";

//les metadata de page 


export const metadata = {
    title: 'contact | Site web présentant un musée de React et Next',
    description: 'Page de contact',
    openGraph: {
        title: 'contact | Site web présentant un musée de React et Next',
        description: 'Page de contact',
        images: ['./react.webp']
    }
}
export default function Page() {
    return <>
        <Contact/>
    </>;
    }