document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('languageToggle');

  const translations = {
    en: {
      headerText: "Join us as we tie the knot",
      ourStory: "On a day that seemed like any other, one beautiful moment changed everything. Surrounded by love, laughter, and a few happy tears, we said \"yes\" to forever. It was perfect — not because of where or when, but because it was us.",
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
      registryPrompt: "Your presence at our wedding is the greatest gift of all.   If you'd like to contribute to our future together, we've set up a fund for our honeymoon and a few other goals we’re excited about.",
      registryButtonText: "Click here to view our registry",
    },
    es: {
      headerText: "Únase a nosotros para casarnos",
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
      registryPrompt: "Tu presencia en nuestra boda es el mejor regalo de todos. Si quieres contribuir a nuestro futuro juntos, hemos creado un fondo para nuestra luna de miel y otros objetivos que nos entusiasman.",
      registryButtonText: "Haga clic aquí para ver nuestro registro",
      // Add more translations here...
    }
  };

  function updateLanguage(lang) {
    // Header
    document.getElementById("headerText").innerHTML = `
      <h1>${lang === 'es' ? 'Samantha Y Ignacio' : 'Samantha & Ignacio'}</h1>
      <p>${translations[lang].headerText}</p>
    `;

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
      <img src="Images/SammyNachoLookAtWater.jpg" style="float:left;width:500px;height:300px;padding: 3rem 2rem;"></img>
      <h2>${lang === 'es' ? 'Nuestra Historia' : 'Our Story'}</h2>
      <p>${translations[lang].ourStory}</p>
    `;

    // Wedding Details
    document.getElementById("details").innerHTML = `
    
      <img src="Images/SammyNachoHands.jpg" style="float:right;width:500px;height:300px;padding: 3rem 2rem;"></img>
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
      <h2><button class="rsvp-button" onclick="showRSVPForm()">${translations[lang].rsvpButton}</button></h2>
      <div id="rsvp-form" style="display: none; margin-top: 1rem;">
        <input type="text" id="name" placeholder="${lang === 'es' ? 'Tu Nombre' : 'Your Name'}" style="padding: 0.5rem; width: 100%; margin-bottom: 1rem;">
        <select id="attendance" style="padding: 0.5rem; width: 100%; margin-bottom: 1rem;">
          <option value="yes">${lang === 'es' ? 'Sí, asistiré' : 'Yes, I’ll be there'}</option>
          <option value="no">${lang === 'es' ? 'Lo siento, no podré asistir' : 'Sorry, I can’t make it'}</option>
        </select>
        <h2><button class="rsvp-button" onclick="submitRSVP()">${lang === 'es' ? 'Enviar' : 'Submit'}</button></h2>
      </div>
    `;

     // Registry
    document.getElementById("registry").innerHTML = `
      <h2>${lang === 'es' ? 'Registro' : 'Registry'}</h2>
      <p>${translations[lang].registryPrompt}</p>
      <h2><button class="map-button" href="https://cash.app/$samantherss" target="_blank" rel="noopener noreferrer">${translations[lang].registryButtonText}</button></h2>
    `;

  }

  // Toggle switch listener
  toggle.addEventListener('change', function () {
    updateLanguage(this.checked ? 'es' : 'en');
  });

  // Set default language
  updateLanguage('en');
});