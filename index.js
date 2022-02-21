const electionDate = new Date("June 18, 2023 07:00:00 GMT+03:00");
const mainElement = document.getElementById("main")

const links = [
    'https://www.youtube.com/embed/zZMrkJQRq-4?autoplay=1',
    'https://www.youtube.com/embed/iqqdFglJ_zA?autoplay=1'
]

const count = setInterval(() => {
    const now = new Date();
    const distance = electionDate - now;

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    mainElement.innerHTML = `
        <div>
            <h1 class="fs-5rem fw-bolder main-text">
                ${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye
           </h1>
           <h1 class="pt-sm-3 fs-1">Sonra seçim var!</h1>
        </div>
    `;
    if (distance <= 0) {
        const link = Math.floor(Math.random() * links.length)

        mainElement.innerHTML = `
        <div>
            <div class="p-5">
                <h1 class="p-3 fw-bold main-text display-1">Bugün seçim günü!</h1>
                <h2 class="display-5">LÜTFEN OY VER.</h2>
            </div>
            <div class="position-relative player">
                <div class="ratio ratio-16x9">
                        <iframe class="border-0" type="text/html"
                            src="${links[link]}">
                        </iframe>
                </div>
            </div>
        </div>`;
        clearInterval(count);
    }
}, 1000);
console.group('%cBir hata ile karşılaşırsan bana bildirir misin? :=)', 'font-size: 1.25rem; color: white')
console.error('%chttps://github.com/MuratAAydin', 'font-size: 1.25rem;')
console.groupEnd()