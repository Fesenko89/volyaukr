const translations = {
  uk: {
    page_title: "ВОЛЯ — Гра про душу нації",
    hero_title: "ВОЛЯ",
    hero_subtitle: "Одна душа. Один народ. Історія України крізь очі її воїнів. Епічна Action-Adventure гра.",
    about_title: "Про проєкт: Відродження Історії через Інновації",
    about_1: "ВОЛЯ — це амбітний 3D Action-Adventure проєкт, що має на меті створити безпрецедентний рівень занурення в тисячолітню історію боротьби українського народу за свою свободу.",
    about_2: "Ми прагнемо не просто розважити, а й запропонувати глибокий, освітній та емоційно насичений досвід, де кожен вибір має значення.",
    features_title: "Ключові Особливості та Технологічні Виклики",
    feat_1_title: "Революційні ШІ-Діалоги:",
    feat_1_desc: "Інтеграція AI-діалогів, які відкривають глибокий взаємозв'язок з персонажами.",
    feat_2_title: "Механіка \"Волі\":",
    feat_2_desc: "Воля накопичується через рішення і впливає на фінал гри.",
    feat_3_title: "Епічний Масштаб Історії:",
    feat_3_desc: "Проєкт охоплює багато годин захопливого геймплею.",
    feat_4_title: "Еволюція Геймплею:",
    feat_4_desc: "Кожна епоха додає новий геймплейний досвід.",
    feat_5_title: "Моральні Вибори та Наслідки:",
    feat_5_desc: "Складні рішення мають реальний вплив на сюжет.",
    heroes_title: "Наші Герої: Від Предків до Нащадків",
    heroes_desc: "Кожен герой — це пращур Олеся, втілення унікального аспекту \"Волі\".",
    eras_title: "Епохи \"ВОЛІ\": Подорож Крізь Тисячоліття",
    eras_desc: "Зануртесь у сім докорінно різних, але взаємопов'язаних епох.",
    mechanics_title: "Механіка \"Волі\" та Дипломатія",
    mech_1: "Вплив на діалоги через накопичену Волю.",
    mech_2: "Дипломатична перевага в переговорах.",
    mech_3: "Кульмінація сюжету залежить від рівня Волі.",
    team_title: "Наша Команда: Створюючи Майбутнє Ігор",
    team_1: "Ми — команда інноваторів та ентузіастів.",
    team_2: "Зараз шукаємо талановитих фахівців для спільної роботи.",
    cta_title: "Стань частиною \"ВОЛІ\"!",
    cta_desc: "Приєднуйся до команди розробників, ШІ‑спеціалістів чи інвесторів.",
    cta_button: "Переглянути Вакансії",
    cta_mail_text: "або зв'яжіться з нами напряму:",
    cta_mail_link: "ukrvolley@gmail.com",
    footer: "© 2025 Проєкт \"ВОЛЯ\". Всі права захищені."
  },
  en: {
    page_title: "VOLYA — Game of the Nation's Soul",
    hero_title: "VOLYA",
    hero_subtitle: "One soul. One people. Ukrainian history through the eyes of its warriors. An epic Action-Adventure game.",
    about_title: "Project: Rebirth of History through Innovation",
    about_1: "VOLYA is an ambitious 3D Action-Adventure project aiming to immerse players in millennia of Ukrainian struggle for freedom.",
    about_2: "We strive not only to entertain, but to offer a deep, educational, and emotionally rich experience where every choice matters.",
    features_title: "Key Features & Technological Challenges",
    feat_1_title: "Revolutionary AI-Dialogues:",
    feat_1_desc: "Integration of AI-powered dialogues enabling deep, dynamic interaction with characters.",
    feat_2_title: "The 'Volya' Mechanic:",
    feat_2_desc: "Volya accumulates through choices and influences the game's outcome.",
    feat_3_title: "Epic Historical Scope:",
    feat_3_desc: "The project offers many hours of immersive gameplay.",
    feat_4_title: "Gameplay Evolution:",
    feat_4_desc: "Each era introduces new gameplay mechanics.",
    feat_5_title: "Moral Choices & Consequences:",
    feat_5_desc: "Tough decisions have real impact on the narrative.",
    heroes_title: "Our Heroes: From Ancestors to Descendants",
    heroes_desc: "Each hero is an ancestor of Oles, embodying a unique aspect of 'Volya'.",
    eras_title: "Eras of 'VOLYA': Journey Through Millennia",
    eras_desc: "Immerse yourself in seven deeply connected historical eras.",
    mechanics_title: "Volya Mechanic & Diplomacy",
    mech_1: "Influence dialogues through accumulated Volya.",
    mech_2: "Diplomatic advantage during negotiations.",
    mech_3: "Culmination depends on Volya level.",
    team_title: "Our Team: Crafting the Future of Games",
    team_1: "We are a team of innovators and enthusiasts.",
    team_2: "Currently seeking talented professionals to join us.",
    cta_title: "Become Part of 'VOLYA'!",
    cta_desc: "Join developers, AI experts or investors in our team.",
    cta_button: "View Vacancies",
    cta_mail_text: "or contact us directly:",
    cta_mail_link: "ukrvolley@gmail.com",
    footer: "© 2025 Project 'VOLYA'. All rights reserved."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "uk";
  setLanguage(savedLang);
});
