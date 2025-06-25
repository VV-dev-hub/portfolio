// src/pages/Contact.jsx

import "./Contact.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Veuillez remplir tous les champs s'il vous plaît.");
      return;
    }

    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

    emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID,
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  )
  .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Erreur EmailJS :", error);
          setStatus("Erreur lors de l'envoi. Réessaie plus tard.");
        }
      );
  };

  return (
    <section id="contact" className="contact page">

      <h3 className="contact__title">
        <>
        Un projet en tête ? Une mission à pourvoir ? <br />
        Discutons-en !
        </>
      </h3>
    
    <form onSubmit={handleSubmit} className="contact__form">
  <div className="contact__group">
    <input
      type="text"
      name="name"
      placeholder="Votre nom"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="contact__group">
    <input
      type="email"
      name="email"
      placeholder="Votre email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="contact__group">
    <textarea
      name="message"
      placeholder="Votre message"
      value={formData.message}
      onChange={handleChange}
      rows="5"
      required
    />
  </div>

  <button type="submit" className="contact__button">
    Envoyer
  </button>

  {status && (
    <p
      className={`contact__status ${
        status.includes("succès") ? "success" : "error"
      }`}
    >
      {status}
    </p>
  )}
</form>
    </section>
  );
}
