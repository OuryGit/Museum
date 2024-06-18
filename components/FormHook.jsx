'use client';
import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function FormHook() {
    const [infosResults, setInfosResults] = useState('');
    const formRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: '',
            message: ''
        }
    });

    const onSubmit = (data) => {
        const formData = new FormData(formRef.current);

        const templateParams = {
            name: formData.get('nom'),
            email: formData.get('courriel'),
            message: formData.get('message'),
        };

        emailjs.send(
            'service_13ynu28',
            'template_ktqkbq9',
            templateParams,
            'rIqVAJf8O17e75r0O'
        ).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                setInfosResults('Votre message a été envoyé avec succès.');
            },
            (error) => {
                console.error('FAILED...', error);
                setInfosResults('Une erreur est survenue lors de l\'envoi de votre message.');
            }
        );
    };

    return (
        <>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.label}>
                    Nom:
                    <input
                        type="text"
                        className={styles.input}
                        {...register("nom", {
                            required: 'Ce champ doit être rempli',
                            minLength: { value: 4, message: "Min 4 caractères" }
                        })}
                        placeholder='Votre nom'
                    />
                    <div className={styles.erreur}>{errors.nom?.message}</div>
                </label>
                <label className={styles.label}>
                    Courriel:
                    <input
                        type="email"
                        className={styles.input}
                        {...register("courriel", {
                            required: 'Ce champ doit être rempli',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })}
                        placeholder='Votre courriel'
                    />
                    <div className={styles.erreur}>{errors.courriel?.message}</div>
                </label>
                <label className={styles.label}>
                    Message:
                    <textarea
                        className={styles.textarea}
                        {...register("message", {
                            required: 'Ce champ doit être rempli'
                        })}
                        placeholder='Votre message'
                    ></textarea>
                    <div className={styles.erreur}>{errors.message?.message}</div>
                </label>
                <button type="submit" className={styles.button}>Envoyer</button>
            </form>
            {infosResults && <p className={styles.result}>{infosResults}</p>}
        </>
    );
}
