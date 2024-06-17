import FormNonControlle from "./FormNonControlle"
import styles from '@/components/Connexion.module.css'
export default function Connexion() {
    return <>
        <div  className={`${styles.connexion} `} >
            Formulaire non contrôlé
            <FormNonControlle/>
        </div>
    </>;
}
