import styles from './Expositions.module.css'
import Gallerie from '@/components/Gallerie.jsx'
import Image from 'next/image';
import gallerieMusee from '@/public/gallerie-musee.json'
export default function Expositions() {
    return (
        <section className={styles.exposition}>
            {/*----------------------------ici se le haut d ma page -------------------- */}            
            <section className={styles.expositionTop}>
                <div className="overlay"></div>
                <div className={styles.videoContent}>
                    <video controls className={styles.video} autoPlay muted loop >
                        <source src="/Assests/video1.mp4"  type="video/mp4" />
                        Votre navigateur ne supporte pas la balise vidéo.
                    </video>
                </div>
                <div className={styles.expoContentTop}>
                    <div className={styles.textDiv}>
                        <span className={styles.Bienvenue}>
                            BIENVENUE SUR NOS EXPOSITIONS ÉVÉNEMENTIELLES
                        </span>
                        <h2 className=  {styles.expoTitle}>LA COLLECTION SPECIALE DE CE MOIS</h2>
                    </div>
                    <div className={styles.icons}>
                        <h3 className='titleIcons'>ici se trouve les catégories</h3>
                        <ul className='listeIcons'>
                            <li> Art</li>
                            <li> Design</li>
                            <li>Status</li>
                        </ul>
                    </div>
                </div >
                
            </section>
            {/* ------------------------------- ci se le milieu d ma page------------------------------ */}
            <section className={styles.expositionMidle}>
                <div className={styles.galleriesContent}>
                    { 
                    <Gallerie images={gallerieMusee} />
                    }
                </div>
                
                <div className={styles.text}>
                    <p className={styles.mesParagraphes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis recusandae explicabo officiis omnis distinctio? Fugiat vitae debitis officiis, placeat, delectus et saepe cum, molestiae dignissimos ipsum quibusdam provident esse!</p>
                  <div className={styles.expoContent}>
                    <div className={styles.textDiv}>
                        <span className='smallText'>
                            EXPOSITION ÉVÉNEMENTIELLE
                        </span>
                        <h2 className={styles.expoTitle}>LA COLLECTION</h2>
                    </div>
                </div >
                <p className={styles.mesParagraphes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis recusandae explicabo officiis omnis distinctio? Fugiat vitae debitis officiis, placeat, delectus et saepe cum, molestiae dignissimos ipsum quibusdam provident esse!</p>
                </div>
              
            </section>
            
            
        </section>
        
    );
}
