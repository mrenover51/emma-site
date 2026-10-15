"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Le formulaire est prêt pour une future connexion à Resend. Aucun message n'a été envoyé : contactez Emma directement par téléphone ou par e-mail.");
  }
  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row"><label>Votre nom<input name="name" autoComplete="name" required placeholder="Nom et prénom"/></label><label>Votre téléphone<input name="phone" type="tel" autoComplete="tel" placeholder="06 00 00 00 00"/></label></div>
    <label>Votre adresse e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.fr"/></label>
    <label>Le sujet de votre message<select name="subject" defaultValue=""><option value="" disabled>Choisir une prestation</option><option>Réflexologie</option><option>Naturopathie & gemmothérapie</option><option>Coaching en nutrition</option><option>Autre demande</option></select></label>
    <label>Votre message<textarea name="message" required rows={5} placeholder="Dites-moi en quelques mots ce qui vous amène…"/></label>
    <label className="consent"><input name="consent" type="checkbox" required/><span>J&apos;accepte que mes informations soient utilisées uniquement pour répondre à ma demande. <small>Champ obligatoire.</small></span></label>
    <div className="form-submit"><button className="button button-primary" type="submit">Préparer ma demande</button><p>Sans service d&apos;envoi configuré, ce bouton affiche uniquement les prochaines étapes.</p></div>
    {notice && <p className="form-notice" role="status">{notice}</p>}
  </form>;
}
