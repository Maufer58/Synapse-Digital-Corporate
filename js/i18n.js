(() => {
  const dict = {
    it: {
      navAbout: "Chi siamo",
      navActivity: "Attività",
      navContact: "Contatti",
      navPrivacy: "Privacy",
      navProduct: "Prodotto KINEVA FIT",
      heroKicker: "Sviluppo software · App mobili",
      heroTitle: "SYNAPSE",
      heroTitle2: "DIGITAL",
      heroLead:
        "Advanced App Development: progettiamo e pubblichiamo applicazioni mobili per iOS, Android e wearable.",
      ctaContact: "Contatti e dati legali",
      ctaPrivacy: "Privacy Policy",
      aboutTitle: "Chi siamo",
      aboutBody:
        "SYNAPSE DIGITAL Advanced App Development è l’entità legale che sviluppa, pubblica e supporta software applicativo. Operiamo dall’Italia con focus su prodotti digitali per lo sport, il benessere e gli strumenti professionali per trainer e strutture.",
      activityTitle: "Cosa facciamo",
      activityLead: "Una sola missione: software affidabile, pubblico sugli store e supportato nel tempo.",
      act1Title: "Sviluppo app",
      act1Body: "Progettazione, sviluppo e manutenzione di applicazioni native e multi-piattaforma.",
      act2Title: "Pubblicazione store",
      act2Body: "Gestione degli account developer, distribuzione App Store / Google Play e aggiornamenti.",
      act3Title: "Supporto",
      act3Body: "Assistenza utenti e privacy tramite caselle email sul dominio aziendale.",
      productTitle: "Il nostro prodotto di punta",
      productLead: "KINEVA FIT è un’applicazione distinta, presentata sul suo sito dedicato.",
      productName: "KINEVA FIT",
      productDesc: "App di allenamento per iPhone, Android, iPad e Apple Watch — schede, GPS e strumenti trainer.",
      productCta: "Apri il sito prodotto",
      contactTitle: "Contatti e trasparenza legale",
      contactLead:
        "Questi dati identificano l’entità legale collegata al dominio synapse-digital-adv-app.com e all’account sviluppatore.",
      labelLegalName: "Ragione / nome",
      labelAddress: "Sede",
      labelVat: "Partita IVA",
      labelCf: "Codice fiscale",
      labelDuns: "D-U-N-S",
      labelEmailInfo: "Email aziendale",
      labelEmailSupport: "Supporto / privacy",
      labelDomain: "Dominio",
      mailInfo: "Scrivi a info@",
      mailSupport: "Scrivi a support@",
      footerTag: "Advanced App Development",
      footerNote:
        "SYNAPSE DIGITAL Advanced App Development — Largo Molinetto n. 1, 20900 Monza (MB), Italia — P.IVA 14895130962 — C.F. CGLLDN63L57F704R — D-U-N-S 302873219",
      privacyTitle: "Informativa privacy (sito aziendale)",
      privacyMeta: "Versione 1.0 · Aggiornata ottobre 2026 · Lingua italiana",
    },
    en: {
      navAbout: "About",
      navActivity: "What we do",
      navContact: "Contact",
      navPrivacy: "Privacy",
      navProduct: "KINEVA FIT product",
      heroKicker: "Software development · Mobile apps",
      heroTitle: "SYNAPSE",
      heroTitle2: "DIGITAL",
      heroLead:
        "Advanced App Development: we design and publish mobile applications for iOS, Android and wearables.",
      ctaContact: "Contact & legal details",
      ctaPrivacy: "Privacy Policy",
      aboutTitle: "About us",
      aboutBody:
        "SYNAPSE DIGITAL Advanced App Development is the legal entity that builds, publishes and supports application software. We operate from Italy, focused on digital products for sport, wellness and professional tools for trainers and facilities.",
      activityTitle: "What we do",
      activityLead: "One mission: reliable software, shipped on the stores and supported over time.",
      act1Title: "App development",
      act1Body: "Design, development and maintenance of native and multi-platform applications.",
      act2Title: "Store publishing",
      act2Body: "Developer account management, App Store / Google Play distribution and updates.",
      act3Title: "Support",
      act3Body: "User and privacy support via mailboxes on our company domain.",
      productTitle: "Our flagship product",
      productLead: "KINEVA FIT is a separate product, presented on its dedicated website.",
      productName: "KINEVA FIT",
      productDesc: "Training app for iPhone, Android, iPad and Apple Watch — routines, GPS and trainer tools.",
      productCta: "Open product site",
      contactTitle: "Contact & legal transparency",
      contactLead:
        "These details identify the legal entity tied to synapse-digital-adv-app.com and the developer account.",
      labelLegalName: "Legal / trade name",
      labelAddress: "Registered address",
      labelVat: "VAT (P.IVA)",
      labelCf: "Tax ID (C.F.)",
      labelDuns: "D-U-N-S",
      labelEmailInfo: "Company email",
      labelEmailSupport: "Support / privacy",
      labelDomain: "Domain",
      mailInfo: "Email info@",
      mailSupport: "Email support@",
      footerTag: "Advanced App Development",
      footerNote:
        "SYNAPSE DIGITAL Advanced App Development — Largo Molinetto n. 1, 20900 Monza (MB), Italy — VAT 14895130962 — Tax ID CGLLDN63L57F704R — D-U-N-S 302873219",
      privacyTitle: "Privacy notice (company website)",
      privacyMeta: "Version 1.0 · Updated October 2026 · English",
    },
  };

  const apply = (lang) => {
    const pack = dict[lang] || dict.it;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    try {
      localStorage.setItem("synapse_lang", lang);
    } catch (_) {}
  };

  document.addEventListener("DOMContentLoaded", () => {
    let lang = "it";
    try {
      lang = localStorage.getItem("synapse_lang") || (navigator.language || "it").slice(0, 2);
    } catch (_) {}
    if (lang !== "en" && lang !== "it") lang = "it";
    apply(lang);
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => apply(btn.dataset.lang));
    });
  });
})();
