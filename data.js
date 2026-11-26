async function hashPassword(pw){
  const buf = await crypto.subtle.digest('SHA-256',
    new TextEncoder().encode("smyk4salt::" + pw));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,'0')).join('');
}

await diskWrite("data", {
  accounts: [
    { login: "boss",  passwordHash: await hashPassword("boss2026"),  name: "С-ГД",        role: "boss",   email: "" },
    { login: "Artur", passwordHash: await hashPassword("Artur7652"), name: "С-ГХ 1",  role: "worker", email: "ivan@yandex.ru" },
    { login: "maria", passwordHash: await hashPassword("parol22"),   name: "С-ГХ 1",     role: "worker", email: "maria@yandex.ru" }
  ],
  tasks: [
    { id: 1, worker: "Artur", title: "Отчёт за неделю",
      desc: "Свести данные по продажам и отправить в общий чат.",
      from: "2026-11-16", to: "2026-11-20", priority: "Очень важно", rating: 5 }
  ],
  holidays: [
    { name: "День компании", date: "2026-12-15" },
    { name: "Новый год",     date: "2027-01-01" }
  ],
  links: [
    { name: "Почта компании", url: "https://mail.example.ru" },
    { name: "База знаний",    url: "https://wiki.example.ru" }
  ],
  urls: {
    lenta: "https://site.ru/lenta",
    reviews_email: "pochta@yandex.ru",
    second_site: "https://site.ru"
  }
});

console.log("Готово: данные записаны с хэшами паролей");
