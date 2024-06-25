'use client';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Great_Vibes } from 'next/font/google';
import { useState } from 'react';

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

    
    const [result, setResult] = useState('');
    const [success, setSuccess] = useState(false);

    const sendmail = () =>{
       const values = watch();
      
       const templateParams = {
         name: values.nom,
         courriel: values.courriel,
         message: values.message,
       };

       emailjs.send(
           'service_y8k22il',// Service_ID
           'template_kfdvfrj',//template_ID
           templateParams,
           'tjrjk-lt_uwWdPeAM'//USER PUBLIC KEY
       ).then(
            (response) =>{
                setResult("message envoye avec succes");
                setSuccess(true);       
            },
            (error) =>{
                setResult("message non envoye ");
                setSuccess(false);
            }
       );
       
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(sendmail)}>
                <label className={styles.label}>
                    Nom:
                    <input
                        type="text"
                        className={styles.input}
                        {...register("nom", {
                            required: 'ce champ doit être rempli ',
                            minLength: { value: 2, message: "min 4 caractères" }
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
