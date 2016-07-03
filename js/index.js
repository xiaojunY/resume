
//解决click的300延迟
FastClick.attach(document.body);

//->动态计算REM的值
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 750 * 100 + "px";
}();

new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlidePrevEnd: changeEnd,
    onSlideNextEnd: changeEnd
});
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->获取当前所有的活动块(获取的结果是一个数组)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            if (n == 0) {
                slide.id = "page5"
            } else if (n == 6) {
                slide.id = "page1"
            } else {
                slide.id = "page" + n;
            }
            return;
        }
        slide.id = null;
    });
}

//->音频的自动播放
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);








