// экран загрузки всех обьектов
window.addEventListener('load', function() { // триггер когда все загрузится
const loader = document.getElementById('loader-wrapper');
loader.style.opacity = '0';
setTimeout(() => {
    loader.style.display = 'none';
    }, 500); // ms
});

// кнопки
const firstTgaccbutton = document.getElementById('1stTgacc');
firstTgaccbutton.addEventListener('click', function() {
    window.location.href = 'https://t.me/bascwelaobzejrcx';
});
const secondTgaccbutton = document.getElementById('2ndTgacc');
secondTgaccbutton.addEventListener('click', function() {
    window.location.href = 'https://t.me/acyofjnjmqpducer';
});

// баннеры (карточки)
const containers = document.querySelectorAll('.card-container');
containers.forEach(container => {
const card = container.querySelector('.card');
const glare = container.querySelector('.card-glare'); // блик
const sensitivity = 20;
container.addEventListener('mousemove', (e) => {
const rect = container.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const rotateX = ((y - centerY) / centerY) * -sensitivity; // поворот карточки X
const rotateY = ((x - centerX) / centerX) * sensitivity; // поворот карточки Y
card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90; // вычисление угла наклона блика
const distancePercent = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) / (Math.max(centerX, centerY) * 1.5); // расстояние от центра для прозрачности
// показ блика и изменение градиента
glare.style.opacity = distancePercent; // прозрачность зависит от расстояния
glare.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${0.4 * distancePercent}) 0%, rgba(255, 255, 255, 0) 80%)`;
});
container.addEventListener('mouseleave', () => { // сброс поворота при удалении мыши от карточки
card.style.transform = `rotateX(0deg) rotateY(0deg)`;
glare.style.opacity = '0'; // скрытие блика
});
});

// тг попап
const openBtn = document.getElementById('tgadbanner');
const closeBtn = document.getElementById('close-tgadbanner');
const overlay = document.getElementById('tgadbanner-overlay');
const tgadbanner = document.getElementById('tgadbanner-content');
openBtn.addEventListener('click', () => { // открытие
overlay.classList.remove('opacity-0', 'pointer-events-none'); // изменение прозрачности
overlay.classList.add('opacity-100');
tgadbanner.classList.remove('-rotate-x-90'); // поворот (вверх)
tgadbanner.classList.add('rotate-x-0');
});
const closetgadbanner = () => { // закрытие
overlay.classList.add('opacity-0', 'pointer-events-none');
overlay.classList.remove('opacity-100');
tgadbanner.classList.remove('rotate-x-0'); // поворот (вниз)
tgadbanner.classList.add('-rotate-x-90');
};
closeBtn.addEventListener('click', closetgadbanner);
overlay.addEventListener('click', (e) => { // закрытие при клике на фон
if (e.target === overlay) closetgadbanner();
});