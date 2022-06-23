// workSlider
var workSlider = document.querySelector('#works .slider_container');
var worSliderItem = document.querySelectorAll('#works .slider_item');
var workPrev = document.querySelector('#works .prev');
var workNext = document.querySelector('#works .next');
var index = 0;


/// workSlider pagination prev & next
workNext.addEventListener('click', function (e) {
    e.preventDefault();
    index += 1;

    if (index >= worSliderItem.length - 2) {
        workSlider.style.transform = "translateX(0)";
        index = 0;
    } else if (index >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / worSliderItem.length * index + "px)";
    }
});

workPrev.addEventListener('click', function (e) {
    e.preventDefault();
    index -= 1;

    if (index <= 0) {
        workSlider.style.transform = "translateX(0)";
        index = 0;
    } else if (index >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / worSliderItem.length * index + "px)";
    }
});


/// workSlider pagination

