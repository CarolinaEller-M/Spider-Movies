let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');

let active = 0; 
let firstPosition = 0;
let lastPosition = items.length - 1;


function updateIndicator() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === active) {
            dot.classList.add('active');
        }
    });
    indicator.querySelector('.number').textContent = String(active + 1).padStart(2, '0'); // Atualiza o número do indicador
}


function changeSlide() {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = (active + 1) > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');
    updateIndicator();
}


setInterval(changeSlide, 5000);

nextButton.onclick = () => {
    changeSlide();
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');
    updateIndicator();
}


updateIndicator();