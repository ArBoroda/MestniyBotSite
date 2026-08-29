const BOT_USERNAME = "YOUR_BOT_USERNAME";

const botUrl = `https://t.me/${BOT_USERNAME}`;

document.querySelectorAll(".bot-link").forEach((link) => {
  link.href = botUrl;
});

document.getElementById("year").textContent = new Date().getFullYear();
