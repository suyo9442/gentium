// work_Slider
let workSlider = document.querySelector('#works .slider_container');
let workSliderItem = document.querySelectorAll('#works .slider_item');
let workIdx = document.querySelectorAll('#works .page-idx');
let workPrev = document.querySelector('#works .prev');
let workNext = document.querySelector('#works .next');
let index = 0;

// news_Slider



/// workSlider pagination prev & next
workNext.addEventListener('click', function (e) {
    e.preventDefault();
    index += 1;


    if (index >= workSliderItem.length) {
        workSlider.style.transform = "translateX(0)";
        index = 0;
    } else if (index >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * index + "px)";
    }


    // index = 0 이면 버튼0에 active
    for (let i = 0; i < workIdx.length; i++) {
        if (index == i) {
            workIdx[i].classList.add('active');
        }
    }
    for (let i = 0; i < workIdx.length; i++) {
        if (index !== i) {
            workIdx[i].classList.remove('active');
        }
    }

    // console.log(index)
});


workPrev.addEventListener('click', function (e) {
    e.preventDefault();
    index -= 1;

    if (index <= 0) {
        workSlider.style.transform = "translateX(0)";
        index = 0;
    } else if (index >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * index + "px)";
    }

    // index = 0 이면 버튼0에 active
    for (let i = 0; i < workIdx.length; i++) {
        if (index == i) {
            workIdx[i].classList.add('active');
        }
    }
    for (let i = 0; i < workIdx.length; i++) {
        if (index !== i) {
            workIdx[i].classList.remove('active');
        }
    }

    // console.log(index)
});


/// workSlider pagination
workIdx.forEach(function (i, a, b) {
    workIdx[a].addEventListener('click', function (e) {
        e.preventDefault();

        // index와 workIdx 연동
        index = a;

        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * a + "px)";

        // 모든 요소에 active 제거
        workIdx.forEach(function (i) {
            i.classList.remove('active')
        })

        // 클릭 요소에 active 추가
        this.classList.add('active')
    })
});




