const BOT_USERNAME = "YOUR_BOT_USERNAME";

const botUrl = `https://t.me/${OfficeMestniyBot}`;

document.querySelectorAll(".bot-link").forEach((link) => {
  link.href = botUrl;
});

document.getElementById("year").textContent = new Date().getFullYear();
