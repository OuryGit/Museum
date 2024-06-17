'use client';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';

export default function FormHook() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: '',
            message: ''
        }
    });

    const onSubmit = data => { console.log(data);
       
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>
                    Nom:
                    <input
                        type="text"
                        className={styles.input}
                        {...register("nom", {
                            required: 'ce champ doit être rempli ',
                            minLength: { value: 4, message: "min 4 caractères" }
                        })}
                        placeholder='votre nom'
                    />
                    <div className={styles.erreur}>{errors.nom?.message}</div>
                </label>
                <label className={styles.label}>
                    Courriel:
                    <input
                        type="email"
                        className={styles.input}
                        {...register("courriel", {
                            required: 'ce champ doit être rempli',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })}
                        placeholder='votre courriel'
                    />
                    <div className={styles.erreur}>{errors.courriel?.message}</div>
                </label>
                <label className={styles.label}>
                    Message:
                    <textarea
                        className={styles.textarea}
                        {...register("message", {
                            required: 'ce champ doit être rempli'
                        })}
                        placeholder='votre message'
                    ></textarea>
                    <div className={styles.erreur}>{errors.message?.message}</div>
                </label>
                <button type="submit" className={styles.button}>Envoyer</button>
            </form>
        </>
    );
}
