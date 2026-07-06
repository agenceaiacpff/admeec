"use client";

import { useState } from "react";

export function ContactForm({ type = "contact" }: { type?: "contact" | "priere" | "couple" }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const endpoint = type === "priere" ? "/api/priere" : type === "couple" ? "/api/couple" : "/api/contact";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="two-cols">
        <input className="input" name="name" placeholder="Nom et prénom" required />
        <input className="input" name="phone" placeholder="Téléphone / WhatsApp" />
      </div>
      <div className="two-cols">
        <input className="input" name="email" type="email" placeholder="Email" />
        <input className="input" name="country" placeholder="Pays" />
      </div>
      <select className="input" name="subject" defaultValue={type === "couple" ? "Accompagnement couple" : type === "priere" ? "Demande de prière" : "Contact ADMEEC"}>
        <option>Contact ADMEEC</option>
        <option>Demande de prière</option>
        <option>Question biblique</option>
        <option>Accompagnement spirituel</option>
        <option>Accompagnement couple</option>
        <option>Inscription séminaire</option>
        <option>Rejoindre un groupe</option>
        <option>Devenir intervenant</option>
      </select>
      <textarea name="message" placeholder="Écrivez votre message" required />
      <button className="btn" type="submit" disabled={status === "sending"}>{status === "sending" ? "Envoi..." : "Envoyer la demande"}</button>
      {status === "sent" && <div className="notice">Votre message a été enregistré. L’équipe ADMEEC pourra vous répondre.</div>}
      {status === "error" && <div className="error">Impossible d’enregistrer le message. Vérifiez la configuration Supabase ou contactez directement par WhatsApp.</div>}
    </form>
  );
}
