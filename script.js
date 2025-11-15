var imgSlider = document.querySelector('.img-slider');
var items = document.querySelectorAll('.item');
var imgItems = document.querySelectorAll('.img-item');
var infoItems = document.querySelectorAll('.info-item');

var nextbtn = document.querySelector('.next-btn');
var prevbtn = document.querySelector('.prev-btn');

let colors = ['#3674be', '#d26181', '#ceb13d', '#c6414c', '#171f2b', '#50aa61']

let indexSlider = 0;
let index = 0;

// Check if we're on mobile
function isMobile() {
    return window.innerWidth <= 768;
}

var Slider = () => {
    if (!isMobile()) {
        // Desktop behavior
        imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

        items.forEach(item => {
            item.style.transform = `rotate(${indexSlider * -60}deg)`;
        });

        document.querySelector('.img-item.active').classList.remove('active');
        imgItems[index].classList.add('active');
    } else {
        // Mobile behavior - only show active image
        document.querySelector('.img-item.active').classList.remove('active');
        imgItems[index].classList.add('active');
    }

    document.querySelector('.info-item.active').classList.remove('active');
    infoItems[index].classList.add('active');

    document.body.style.background = colors[index];
};

nextbtn.addEventListener(`click`, () => {
    indexSlider++;

    index++;
    if (index > imgItems.length - 1) {
        index = 0
    };

    Slider();
});

prevbtn.addEventListener(`click`, () => {
    indexSlider--;

    index--;
    if (index < 0) {
        index = imgItems.length - 1;
    };

    Slider();
});

// Handle window resize
window.addEventListener('resize', function () {
    // Reset transforms on resize to prevent layout issues
    if (!isMobile()) {
        imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;
        items.forEach(item => {
            item.style.transform = `rotate(${indexSlider * -60}deg)`;
        });
    } else {
        imgSlider.style.transform = 'none';
        items.forEach(item => {
            item.style.transform = 'none';
        });
        // Reset all img items position for mobile
        imgItems.forEach(item => {
            item.style.transform = 'none';
        });
    }
});

// Initial check
if (isMobile()) {
    imgSlider.style.transform = 'none';
    items.forEach(item => {
        item.style.transform = 'none';
    });
}