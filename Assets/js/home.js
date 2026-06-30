const greeting = document.getElementById("greeting");
const heroDate = document.querySelector(".hero-date");

function getOrdinal(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function formatHeroDate(date) {
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${weekday} ${day}${getOrdinal(day)} ${month} ${year} • ${hour12}:${minute} ${period}`;
}

function getGreeting(date) {
    const hour = date.getHours();
    if (hour < 12) return 'Good Morning, Ace ☀️';
    if (hour < 18) return 'Good Afternoon, Ace 🌤';
    return 'Good Evening, Ace 🌙';
}

function updateHero() {
    const now = new Date();
    if (heroDate) {
        heroDate.textContent = formatHeroDate(now);
    }
    if (greeting) {
        greeting.textContent = getGreeting(now);
    }
}

updateHero();
setInterval(updateHero, 60000);