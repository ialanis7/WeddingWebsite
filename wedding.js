document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('languageToggle');

  const translations = {
    // ENGLISH TRANSLATIONS
    en: {
      headerText: "Join us as we tie the knot",
      ourStory: "<p>Nacho and Sammy share a modern love story, one that began during the COVID era—with a simple Instagram follow, a thoughtful message, and an adventurous first date: biking outdoors.<br><br>Nacho was a mountain biker, while Sammy was, well, inexperienced and unprepared. But she needn’t have worried—Nacho arrived with everything she’d need: a second bike, safety gear, and above all, patience. Though Sammy wobbled, struggled to keep up, and was too short to reach the pedals comfortably, Nacho never left her behind. He offered his helmet as a stepping stool, cheered her on, and gently encouraged her the whole way. From that very first ride, Sammy knew she’d found someone truly special.<br><br>Their love blossomed through shared adventures—hiking in Colorado, camping in Big Bend and South Padre, and dancing at concerts by Rex Orange County, Foster the People, and Taylor Swift. They bonded over their sense of humor, favorite comedians like Tony Hinchcliffe, and cozy nights watching Breaking Bad and The Sopranos. But more than their shared tastes, it was their shared values, faith, and deep understanding of one another that built a foundation for something lasting.<br><br>On a magical December evening in 2022, Sammy thought she and Nacho were simply meeting her parents for dinner at Bodega. As they stepped outside to leave, Nacho led her to the backyard—aglow with twinkling lights and scattered rose petals. There, he got down on one knee and asked her to marry him. With tears in her eyes, she said yes.<br><br>After several years of love and laughter, Nacho and Sammy now live together with their two beloved cats, Cleo and Claus. They’ve long seen themselves as a family—but now, they’re ready to make it official. They’ve chosen an intimate celebration, surrounded by those they cherish most, to mark the beginning of this next chapter.<br><br>Thank you for being part of this special moment. Nacho and Sammy are filled with gratitude and joy as they begin their forever—rooted in love, guided by faith, and dreaming of a home, a third cat, and a future filled with family.</p>",
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
        attireAnswer: "<p>We kindly request that all guests wear formal attire for our wedding.</p><ul><li><strong>For women:</strong> Floor-length evening gowns or elegant, dressy cocktail dresses in rich fabrics. Please avoid casual sundresses or anything too casual.</li><li><strong>For men:</strong> A tuxedo or a dark suit and tie is appropriate. Dress shoes are expected (no sneakers or casual footwear).</li></ul><p>Think elegant, timeless, and classy — this will be a special evening, and we’d love for everyone to dress to match the occasion!</p>",
        plusoneQuestion: "Can I bring a plus one?",
        plusoneAnswer: "Only if your invitation specifies a guest. We have limited space and want to keep it intimate.",
        foodanddrinksQuestion: "Will there be food and drinks?",
        foodanddrinksAnswer: "Absolutely! We'll have a full dinner and drinks of your choice at the reception.",
        parkingQuestion: "Is parking available?",
        parkingAnswer: "Yes, there is free parking available at the venue. Parking for all event guests is in the public parking lot next to the Museum. Valet-Parking is allowed.",
        purseQuestion: "Can I bring a purse?",
        purseAnswer: "No bags over the size of 7” x 5” x 2” are allowed inside the museum. If for some reason an oversize bag is needed, all bags must be checked in at the front desk.",
        firearmQuestion: "May I bring my firearm?",
        firearmAnswer: "Firearms are not permitted on Museum premises. This policy applies to everyone, including individuals licensed by the State of Texas to carry a concealed handgun.",
        kidsQuestion: "A Note on Our Younger Guests",
        kidsAnswer: "<p>  To ensure the safety and enjoyment of everyone, especially our littlest  guests, we kindly request that <b>all children attending the wedding remain  supervised by an adult at all times.</b></p><br><p>  Our venue, the Museum, has specific safety guidelines. Should any child be  left unattended, a member of the Museum staff will issue a polite reminder.  If a child is found unattended a second time, the child and their family  will, regrettably, be asked to leave the premises for the safety and  security of all our guests and the Museum's collections.</p><br><p>  We appreciate your understanding and cooperation in making our wedding a safe  and joyful occasion for everyone!</p>",
      },
      registryPrompt: "Your presence at our wedding is the greatest gift of all.   If you'd like to contribute to our future together, we've set up a fund for our honeymoon and a few other goals we’re excited about.",
      registryButtonText: "Click here to view our registry",
    },
    // SPANISH TRANSLATIONS
    es: {
      headerText: "Únase a nosotros para casarnos",
      ourStory: "<p>Nacho y Sammy comparten una historia de amor moderna, que comenzó durante la era del COVID—con un follow en Instagram, un mensajito, y una primera cita muy aventurera: un paseo en bici al aire libre.<br><br>Nacho ya le sabía a eso de andar en bicicleta, mientras que Sammy… no tanto. Pero no tenía de qué preocuparse—Nacho llegó con todo lo que ella iba a necesitar: una bici extra, equipo de seguridad, y sobre todo, mucha paciencia. Aunque Sammy se tambaleaba, batallaba para seguirle el paso, y ni siquiera alcanzaba bien los pedales, Nacho nunca la dejó atrás. Le ofreció su casco como banquito, la animó, y le echó porras todo el camino. Desde ese primer paseo, Sammy supo que había encontrado a alguien muy especial.<br><br>Su amor creció a través de aventuras compartidas—caminatas por Colorado, campamentos en Big Bend y South Padre, y bailes en conciertos de Rex Orange County, Foster the People y Taylor Swift. Se conectaron por su sentido del humor, sus comediantes favoritos como Tony Hinchcliffe, y noches acurrucados viendo Breaking Bad y The Sopranos. Pero más allá de sus gustos, lo que realmente los unió fueron sus valores compartidos, su fe, y esa forma profunda de entenderse sin decir mucho.<br><br>En una noche mágica de diciembre del 2022, Sammy pensaba que simplemente iban a cenar con sus papás en Bodega. Pero al salir rumbo al carro, Nacho la llevó al patio trasero—lleno de luces, pétalos de rosa, y una sorpresa. Ahí, Nacho se arrodilló y le pidió que se casara con él. Con lágrimas en los ojos, Sammy le dijo que sí.<br><br>Después de varios años de amor y carcajadas, Nacho y Sammy ahora viven juntos con sus dos gatitos consentidos, Cleo y Claus. Ya desde hace tiempo se sienten como una familia, pero ahora están listos para hacerlo oficial. Eligieron una celebración íntima, rodeados de las personas que más quieren, para marcar el inicio de este nuevo capítulo.<br><br>Gracias por ser parte de este momento tan especial. Nacho y Sammy están llenos de gratitud y felicidad al comenzar su “para siempre”—arraigado en el amor, guiado por la fe, y soñando con su hogar, un tercer gato, y una vida llena de familia.</p>",
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
        attireQuestion: "¿Qué debo usar?",
        attireAnswer: "<ul><li><strong>Para mujeres:</strong> Vestidos de noche largos o vestidos elegantes de cóctel en telas sofisticadas. Por favor, evite vestidos informales o ropa demasiado casual.</li><li><strong>Para hombres:</strong> Es apropiado un esmoquin o un traje oscuro con corbata. Se espera calzado formal (sin tenis ni calzado informal).</li></ul><p>Piense en algo elegante, atemporal y con clase — será una noche especial, y nos encantaría que todos se vistan acorde a la ocasión.</p>",
        plusoneQuestion: "¿Puedo llevar un acompañante?",
        plusoneAnswer: "Solo si tu invitación especifica que puedes traer un invitado. Tenemos espacio limitado y queremos mantenerlo íntimo.",
        foodanddrinksQuestion: "¿Habrá comida y bebida?",
        foodanddrinksAnswer: "¡Por supuesto! Tendremos una cena completa y bebidas a tu elección en la recepción.",
        parkingQuestion: "¿Habrá estacionamiento disponible?",
        parkingAnswer: "Sí, hay estacionamiento gratuito disponible en el lugar. El estacionamiento para todos los invitados del evento está en el lote público al lado del museo. Se permite servicio de valet.",
        purseQuestion: "¿Puedo llevar una bolsa o cartera?",
        purseAnswer: "No se permiten bolsos de más de 7” x 5” x 2” dentro del museo. Si por alguna razón necesitas una bolsa más grande, deberá dejarse en el mostrador de entrada.",
        firearmQuestion: "¿Puedo llevar mi arma de fuego?",
        firearmAnswer: "No se permiten armas de fuego en las instalaciones del museo. Esta política aplica a todos, incluyendo a personas con licencia del Estado de Texas para portar armas ocultas.",
        kidsQuestion: "Una Nota sobre Nuestros Invitados Más Pequeños",
        kidsAnswer: "<p> Para garantizar la seguridad y el disfrute de todos, especialmente de nuestros invitados más pequeños, pedimos amablemente que <b>todos los niños que asistan a la boda estén supervisados por un adulto en todo momento.</b></p><br><p> Nuestro lugar, el museo, tiene directrices de seguridad específicas. Si algún niño se encuentra sin supervisión, un miembro del personal del museo emitirá un recordatorio amable. Si se encuentra sin supervisión una segunda vez, lamentablemente se pedirá al niño y a su familia que abandonen el lugar por la seguridad de todos los invitados y las colecciones del museo.</p><br><p> Agradecemos su comprensión y cooperación para que nuestra boda sea una ocasión segura y alegre para todos.</p>",
      },
      registryPrompt: "Tu presencia en nuestra boda es el mejor regalo de todos. Si deseas contribuir a nuestro futuro juntos, hemos creado un fondo para nuestra luna de miel y algunas otras metas que nos entusiasman.",
      registryButtonText: "Haz clic aquí para ver nuestra mesa de regalos",

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
      <a>${lang === 'es' ? 'De la Primera Cita al Para Siempre' : 'From First Date to Forever'}</a>
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
      <img src="Images/SammyNachoLookAtWater.jpg" style="float:right;width:500px;height:325px;padding: 3rem 2rem;"></img>
      <h2>${lang === 'es' ? 'Nuestra Historia' : 'Our Story'}</h2>
      <p>${translations[lang].ourStory}</p>
    `;

    // Wedding Details
    document.getElementById("details").innerHTML = `
    
      <img src="Images/SammyNachoHands.jpg" style="float:left;width:500px;height:300px;padding: 3rem 2rem;"></img>
      <h2>${translations[lang].weddingDetails.title}</h2>
      <p><strong>${translations[lang].weddingDetails.date}</strong></p>
      <p><strong>${translations[lang].weddingDetails.time}</strong></p>
    `;

    // Frequently Asked Questions
    document.getElementById("faq").innerHTML = `
      <img src="Images/SammyNachoHands.jpg" style="float:right;width:500px;height:1100px;padding: 3rem 2rem;"></img>
      <h2>${translations[lang].faq.title}</h2>
      <div class="faq-item">
        <h3>${translations[lang].faq.attireQuestion}</h3>
        <p><strong>${translations[lang].faq.attireAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.plusoneQuestion}</h3>
        <p><strong>${translations[lang].faq.plusoneAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.foodanddrinksQuestion}</h3>
        <p><strong>${translations[lang].faq.foodanddrinksAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.parkingQuestion}</h3>
        <p><strong>${translations[lang].faq.parkingAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.purseQuestion}</h3>
        <p><strong>${translations[lang].faq.purseAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.firearmQuestion}</h3>
        <p><strong>${translations[lang].faq.firearmAnswer}</strong></p>
      </div>
      <div class="faq-item">
        <h3>${translations[lang].faq.kidsQuestion}</h3>
        <p><strong>${translations[lang].faq.kidsAnswer}</strong></p>
      </div>
    `;

    // RSVP
    document.getElementById("rsvp").innerHTML = `
      <h2>${translations[lang].rsvpTitle}</h2>
      <p>${translations[lang].rsvpPrompt}</p>
      <h2><button class="rsvp-button" onclick="window.open('https://bodaalanis2025.rsvpify.com','_blank')" target="_blank">${translations[lang].rsvpButton}</button></h2>
    `;

     // Registry
    document.getElementById("registry").innerHTML = `
      <h2>${lang === 'es' ? 'Registro' : 'Registry'}</h2>
      <p>${translations[lang].registryPrompt}</p>
      <h2><button class="map-button" onclick="window.open('https://cash.app/$samantherss','_blank')" rel="noopener noreferrer">${translations[lang].registryButtonText}</button></h2>
    `;

  }

  // Toggle switch listener
  toggle.addEventListener('change', function () {
    updateLanguage(this.checked ? 'es' : 'en');
  });

  // Set default language
  updateLanguage('en');
});