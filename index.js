const countDownDate = new Date("June 18, 2020 07:00:00 GMT+03:00");
const mainElement = document.getElementById("main")

const count = setInterval(function () {

    const now = new Date();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


    mainElement.innerHTML = `
        <div>
            <h1 id="count" class="fs-4rem">
                ${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye
           </h1>
           <h1 class="pt-3">Sonra seçim var!</h1>
        </div>
    `;

    if (distance <= 0) {
        clearInterval(count);
        mainElement.innerHTML = `
        
            <div class="ratio ratio-16x9">
                <iframe class="border-0" type="text/html"
                src="https://www.youtube.com/embed/zZMrkJQRq-4?autoplay=1">
                </iframe>
            </div>
            <div class="p-sm-5">
                <h1>LÜTFEN OY VER</h1>
            </div>
        
        `;

    }
}, 1000);
