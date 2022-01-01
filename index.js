const countDownDate = new Date("June 18, 2023 07:00:00 GMT+03:00");
const mainElement = document.getElementById("main")

const links = [
    'https://www.youtube.com/embed/zZMrkJQRq-4?autoplay=1',
    'https://www.youtube.com/embed/iqqdFglJ_zA?autoplay=1'
]
const pickRandomLink = Math.floor(Math.random() * links.length);

const count = setInterval(function () {
    const now = new Date();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    mainElement.innerHTML = `
        <div>
            <h1 id="count" class="fs-4rem fw-bolder main-text">
                ${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye
           </h1>
           <h1 class="pt-3">Sonra seçim var!</h1>
        </div>
    `;
    if (distance <= 0) {
        mainElement.innerHTML = `
        <div>
            <div class="p-5">
                <h1 class="p-3 fw-bold main-text display-1">Bugün seçim günü!</h1>
                <h2 class="display-5">LÜTFEN OY VER.</h2>
            </div>
            <div class="position-relative player">
                <div class="ratio ratio-16x9">
                        <iframe class="border-0" type="text/html"
                            src="${links[pickRandomLink]}">
                        </iframe>
                </div>
            </div>
        </div>`;
        clearInterval(count);
    }
}, 1000);
console.error('%cBir hata ile karşılaşırsan bana bildirir misin? :=)', 'font-size: 1.25rem; color: white')
console.error('%chttps://github.com/MuratAAydin', 'font-size: 1.25rem; color: white')