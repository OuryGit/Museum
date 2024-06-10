import Image from 'next/image'
import styles from './Gallerie.module.css'
export default function Gallerie({ images }) {
    return (
        
        <div className={styles.gallerie}>
        {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
                <Image src={image.src}  alt={image.title}  
                        layout="fill" 
                        className={styles.image}
                        objectFit="cover" 
                    />
                <div className={styles.imageInfo}>
                    <h3 className={styles.imageTitle}>{image.title}</h3>
                    <p className={styles.imageDescription}>{image.description}</p>
                </div>
            </div>
        ))}
    </div>
    )
}