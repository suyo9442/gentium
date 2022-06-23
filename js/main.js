// workSlider
let workSlider = document.querySelector('#works .slider_container');
let worSliderItem = document.querySelectorAll('#works .slider_item');
let workIdx = document.querySelectorAll('#works .page-idx');
let workPrev = document.querySelector('#works .prev');
let workNext = document.querySelector('#works .next');
let index = 0;

// workSlider.style = `width: calc(33.4% * ${workIdx.length});`


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
workIdx.forEach(function (i, a, b) {
    workIdx[a].addEventListener('click', function (e) {
        e.preventDefault();

        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / worSliderItem.length * a + "px)";

        // 모든 요소에 active 제거
        workIdx.forEach(function (i) {
            i.classList.remove('active')
        })

        // 클릭 요소에 active 추가
        this.classList.add('active')
    })
});





