// ===== ЗАДАНИЯ (босс задаёт title, desc, from, to, priority, rating) =====
// done — галочка работника, canceled — нажал "Не могу" (эти статусы живут в state.json на Диске)
const TASKS = [
  {
    id: 1,
    title: "Отчёт за неделю",
    desc: "Свести данные по продажам и отправить в общий чат.",
    from: "2026-11-16",
    to: "2026-11-20",
    priority: "Очень важно",
    rating: 5,
    done: false,
    canceled: false
  },
  {
    id: 2,
    title: "Позвонить клиенту",
    desc: "Уточнить детали договора, перезвонить до конца дня.",
    from: "2026-11-17",
    to: "2026-11-17",
    priority: "Чуть важнее",
    rating: 3,
    done: false,
    canceled: false
  }
];

// ===== ПРАЗДНИКИ (задаёт босс) =====
const HOLIDAYS = [
  { name: "День компании", date: "2026-12-15" },
  { name: "Новый год", date: "2027-01-01" }
];

// ===== ССЫЛКИ (четвёртый документ) =====
const LINKS = [
  { name: "Почта компании", url: "https://mail.example.ru" },
  { name: "База знаний", url: "https://wiki.example.ru" },
  { name: "Таблица графиков", url: "https://docs.example.ru/grafik" }
];

// ===== ВСТАВЬТЕ СВОИ АДРЕСА СЮДА =====
const LENTA_URL = "https://site.ru/lenta";   // ← ссылка на сайт "Лента"
const REVIEWS_EMAIL = "pochta@yandex.ru";    // ← яндекс-почта для отзывов
const SECOND_SITE_URL = "https://site.ru";   // ← вторая ссылка на сайт
