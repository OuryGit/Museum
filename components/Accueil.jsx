'use client'

import styles from './Accueil.module.css';
import image1 from '@/public/Assests/image1.webp'
import image2 from '@/public/Assests/image2.webp'
import image3 from '@/public/Assests/image3.webp'
import image4 from '@/public/Assests/image4.webp'
import { useTheme } from './ThemeProvider';

export default function Accueil() {
    const [theme,setTheme]= useTheme();
    return (
        <div className={`${styles.welcome} ${styles.flex} ${styles.header +' '+
            (theme === 'light'? styles.light : styles.dark)
            }`}>
            <div className={styles.textContainer}>
                
                Mobilier, art de la table, designe, papiers peints, objets art, verre... Les collections du musée Art et Histoire, parmi les plus importantes au monde, réunissent plus d’1 million et demi d’œuvres et artefacts du Moyen Âge à nos jours. Elles s’enrichissent chaque année de très nombreux dons, achats, et legs.
                Lieu d’inspiration et de transmission depuis sa création au XIXe siècle, le musée témoigne une recherche permanente harmonie entre le beau et utile.
            </div>
            <div className={styles.imagesTextContainer}>
                <div className={styles.imageTextBlock}>
                    <img src={image1.src} alt="Image 1" className={styles.imageLeft} />
                    <div className={styles.textRight}>
                        <h2>Art Médiéval</h2>
                        <p>Découvrez une collection fascinante artefacts médiévaux, comprenant des armures, des armes et des objets 
                            art religieux qui témoignent de la richesse culturelle du Moyen Âge.</p>
                    </div>
                </div>
                <div className={styles.imageTextBlock}>
                    <div className={styles.textLeft}>
                        <h2>Peintures Classiques</h2>
                        <p>Admirez des œuvres de grands maîtres de la peinture classique, 
                            dont les toiles captivent par leur détail et leur maîtrise technique, reflétant des siècles de tradition artistique.</p>
                    </div>
                    <img src={image2.src} alt="Image 2" className={styles.imageRight} />
                </div>
                <div className={styles.imageTextBlock}>
                    <img src={image3.src} alt="Image 3" className={styles.imageLeft} />
                    <div className={styles.textRight}>
                        <h2>Art Moderne</h2>
                        <p>Explorez évolution de art moderne avec des œuvres audacieuses et innovantes,
                            représentant les mouvements artistiques du XXe siècle et les nouvelles formes expression créative.</p>
                    </div>
                </div>
                <div className={styles.imageTextBlock}>
                    <div className={styles.textLeft}>
                        <h2>Trésors Asiatiques</h2>
                        <p>Découvrez une collection exceptionnelle art asiatique, 
                            comprenant des céramiques, des sculptures et des textiles, révélant la diversité et la richesse des cultures asiatiques.</p>
                    </div>
                    <img src={image4.src} alt="Image 4" className={styles.imageRight} />
                </div>
            </div>
            <div className={styles.testimonials}>
                <h2>Nos visiteurs</h2>
                <div className={styles.testimonialsContainer}>
                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            {'★'.repeat(5)}{'☆'.repeat(0)}
                        </div>
                        <p>Une expérience incroyable! Le musée offre une riche collection artefacts historiques. - Jean Claude</p>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            {'★'.repeat(5)}{'☆'.repeat(0)}
                        </div>
                        <p>jai adoré les expositions art moderne. Un endroit à visiter absolument! - Marie Lapierre</p>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            {'★'.repeat(4)}{'☆'.repeat(1)}
                        </div>
                        <p>Le musée est magnifiquement aménagé et très instructif. - Charles François</p>
                    </div>
                    <div className={styles.testimonial}>
                        <div className={styles.stars}>
                            {'★'.repeat(4)}{'☆'.repeat(1)}
                        </div>
                        <p>Une visite mémorable pour toute la famille. Les enfants ont adoré. - Emilie Zoé</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
