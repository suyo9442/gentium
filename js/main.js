// work_Slider
let workSlider = document.querySelector('#works .slider_container');
let workSliderItem = document.querySelectorAll('#works .slider_item');
let workIdx = document.querySelectorAll('#works .page-idx');
let workPrev = document.querySelector('#works .prev');
let workNext = document.querySelector('#works .next');
let index1 = 0;

// news_Slider
let newsSlider = document.querySelector('#news .slider_container');
let newsSliderItem = document.querySelectorAll('#news .slider_item');
let newsIdx = document.querySelectorAll('#news .page-idx');
let index2 = 0;



// workSlider pagination prev & next
workNext.addEventListener('click', function (e) {
    e.preventDefault();
    index1 += 1;

    if (index1 >= workSliderItem.length - 2) {
        workSlider.style.transform = "translateX(0)";
        index1 = 0;
    } else if (index1 >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * index1 + "px)";
    }

    // index1 = 0 이면 버튼0에 active
    for (let i = 0; i < workIdx.length; i++) {
        if (index1 == i) {
            workIdx[i].classList.add('active');
        }
    }
    for (let i = 0; i < workIdx.length; i++) {
        if (index1 !== i) {
            workIdx[i].classList.remove('active');
        }
    }
});

workPrev.addEventListener('click', function (e) {
    e.preventDefault();
    index1 -= 1;

    if (index1 <= 0) {
        workSlider.style.transform = "translateX(0)";
        index1 = 0;
    } else if (index1 >= 0) {
        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * index1 + "px)";
    }

    // index1 = 0 이면 버튼0에 active
    for (let i = 0; i < workIdx.length; i++) {
        if (index1 == i) {
            workIdx[i].classList.add('active');
        }
    }
    for (let i = 0; i < workIdx.length; i++) {
        if (index1 !== i) {
            workIdx[i].classList.remove('active');
        }
    }
});


/// page-idx 공통 함수
function idxBtn(btns, slider, item) {
    btns.forEach(function (i, a, b) {
        btns[a].addEventListener('click', function (e) {
            e.preventDefault();
            index1 = a;

            slider.style.transform = "translateX(-" + slider.clientWidth / item.length * a + "px)";

            // 모든 요소에 active 제거
            btns.forEach(function (i) {
                i.classList.remove('active')
            })

            // 클릭 요소에 active 추가
            this.classList.add('active')
        })
    });
}

// work page-idx
idxBtn(workIdx, workSlider, workSliderItem);

// news page-idx
idxBtn(newsIdx, newsSlider, newsSliderItem);