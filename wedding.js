document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('languageToggle');

  const translations = {
    en: {
      ourStory: "Me and ango.",
      weddingDetails: {
        title: "Wedding Details",
        date: "Date: November 08, 2025",
        time: "Time: Ceremony at 4:00 PM, Reception to follow"
      },
      rsvpTitle: "RSVP",
      rsvpPrompt: "Let us know if you'll be joining the celebration!",
      rsvpButton: "RSVP Now",
      faq: {
        title: "Frequently Asked Questions",
        attireQuestion: "What should I wear?",
        attireAnswer: "We kindly request that all guests wear formal attire for our wedding."
      },
    },
    es: {
      ourStory: "Yo y Ango.",
      weddingDetails: {
        title: "Detalles de la Boda",
        date: "Fecha: 08 de noviembre de 2025",
        time: "Hora: Ceremonia a las 4:00 PM, recepción después"
      },
      rsvpTitle: "Confirmar Asistencia",
      rsvpPrompt: "¡Haznos saber si vendrás a la celebración!",
      rsvpButton: "Confirmar ahora",
      faq: {
        title: "Preguntas Frecuentes",
        attireQuestion: "¿Qué me pongo?",
        attireAnswer: "Solicitamos amablemente que todos los invitados usen vestimenta formal para nuestra boda."
      },
      // Add more translations here...
    }
  };

  function updateLanguage(lang) {
    // Navbar
    document.getElementById("nav-our-story").innerHTML = `
      <a>${lang === 'es' ? 'Nuestra Historia' : 'Our Story'}</a>
    `;
    document.getElementById("nav-details").innerHTML = `
      <a>${lang === 'es' ? 'Detalles de la Boda' : 'Wedding Details'}</a>
    `;
    document.getElementById("nav-faq").innerHTML = `
      <a>${lang === 'es' ? 'FAQ' : 'FAQ'}</a>
    `;
    document.getElementById("nav-RSVP").innerHTML = `
      <a>${lang === 'es' ? 'RSVP' : 'RSVP'}</a>
    `;
    document.getElementById("nav-registry").innerHTML = `
      <a>${lang === 'es' ? 'Registro' : 'Registry'}</a>
    `;

    // Our Story
    document.getElementById("our-story").innerHTML = `
      <h2>${lang === 'es' ? 'Nuestra Historia' : 'Our Story'}</h2>
      <p>${translations[lang].ourStory}</p>
    `;

    // Wedding Details
    document.getElementById("details").innerHTML = `
      <h2>${translations[lang].weddingDetails.title}</h2>
      <p><strong>${translations[lang].weddingDetails.date}</strong></p>
      <p><strong>${translations[lang].weddingDetails.time}</strong></p>
    `;

    // Frequently Asked Questions
    document.getElementById("faq").innerHTML = `
      <h2>${translations[lang].faq.title}</h2>
      <h3>${translations[lang].faq.attireQuestion}</h3>
      <p><strong>${translations[lang].faq.attireAnswer}</strong></p>
    `;

    // RSVP
    document.getElementById("rsvp").innerHTML = `
      <h2>${translations[lang].rsvpTitle}</h2>
      <p>${translations[lang].rsvpPrompt}</p>
      <button class="rsvp-button" onclick="showRSVPForm()">${translations[lang].rsvpButton}</button>
      <div id="rsvp-form" style="display: none; margin-top: 1rem;">
        <input type="text" id="name" placeholder="${lang === 'es' ? 'Tu Nombre' : 'Your Name'}" style="padding: 0.5rem; width: 100%; margin-bottom: 1rem;">
        <select id="attendance" style="padding: 0.5rem; width: 100%; margin-bottom: 1rem;">
          <option value="yes">${lang === 'es' ? 'Sí, asistiré' : 'Yes, I’ll be there'}</option>
          <option value="no">${lang === 'es' ? 'Lo siento, no podré asistir' : 'Sorry, I can’t make it'}</option>
        </select>
        <button class="rsvp-button" onclick="submitRSVP()">${lang === 'es' ? 'Enviar' : 'Submit'}</button>
      </div>
    `;
  }

  // Toggle switch listener
  toggle.addEventListener('change', function () {
    updateLanguage(this.checked ? 'es' : 'en');
  });

  // Set default language
  updateLanguage('en');
});