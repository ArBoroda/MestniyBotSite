// Вставьте username вашего бота вместо YOUR_BOT_USERNAME.
const BOT_USERNAME = "OfficeMestniyBot";
const botUrl = `https://t.me/${BOT_USERNAME}`;

["mainCta", "headerCta", "bottomCta"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.href = botUrl;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  }
});
