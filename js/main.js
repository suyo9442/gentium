//// main_menu
let mainMenu = document.querySelectorAll('#main .main_menu article');
let order = 0;

setInterval(function () {
    // menu의 개수만큼 order + 1
    if (order < mainMenu.length - 1) {
        order += 1;
    } else {
        order = 0;
    }

    // 순서대로 active
    mainMenu.forEach(function (i, a) {
        if (order == a) {
            i.classList.add('active');
        } else {
            i.classList.remove('active');
        }
    })
}, 2000)


//// work_Slider
let workSlider = document.querySelector('#works .slider_container');
let workSliderItem = document.querySelectorAll('#works .slider_item');
let workIdx = document.querySelectorAll('#works .page-idx');
let workPrev = document.querySelector('#works .prev');
let workNext = document.querySelector('#works .next');
let index1 = 0;

// 다음 & 이전 버튼
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


// 인덱스 버튼
workIdx.forEach(function (i, a) {
    workIdx[a].addEventListener('click', function (e) {
        e.preventDefault();
        index1 = a;

        workSlider.style.transform = "translateX(-" + workSlider.clientWidth / workSliderItem.length * a + "px)";

        // 모든 요소에 active 제거
        workIdx.forEach(function (i) {
            i.classList.remove('active')
        })

        // 클릭 요소에 active 추가
        this.classList.add('active')
    })
});



//// news_Slider
let newsSlider = document.querySelector('#news .slider_container');
let newsSliderItem = document.querySelectorAll('#news .slider_item');
let newsIdx = document.querySelectorAll('#news .page-idx');
let index2 = 0;

// 자동 슬라이드
setInterval(function () {
    if (index2 < newsSliderItem.length - 3) {
        index2 += 1;
        newsSlider.style.transform = "translateX(-" + newsSlider.clientWidth / newsSliderItem.length * index2 + "px)";
    } else {
        index2 = 0;
        newsSlider.style.transform = "translateX(-" + newsSlider.clientWidth / newsSliderItem.length * index2 + "px)";
    }

    // active
    newsIdx.forEach(function (i, a) {
        if (index2 == a) {
            newsIdx[a].classList.add('active')
        } else {
            newsIdx[a].classList.remove('active')
        }
    })
}, 2000)

// 인덱스 버튼
newsIdx.forEach(function (i, a, b) {
    newsIdx[a].addEventListener('click', function (e) {
        e.preventDefault();
        index2 = a;

        newsSlider.style.transform = "translateX(-" + newsSlider.clientWidth / newsSliderItem.length * a + "px)";

        // 모든 요소에 active 제거
        newsIdx.forEach(function (i) {
            i.classList.remove('active')
        })

        // 클릭 요소에 active 추가
        this.classList.add('active')
    })
});


//// 스크롤이벤트
var winH = window.innerHeight;
let aniCon = document.querySelectorAll('.scrollAni');

var _scrollAni = function () {

    for (let i = 0; i < aniCon.length; i++) {
        var aniPos = aniCon[i].getBoundingClientRect().top;

        if (aniPos - winH < -500) {
            aniCon[i].classList.remove('opacity');
        } else {
            aniCon[i].classList.add('opacity');
        }
    }
}

window.addEventListener('scroll', _scrollAni);