window.onload = function () {
    var imgs = document.getElementsByTagName("li"),
        wrap = document.querySelector(".wrap"),
        l = imgs.length,
        index = 0;
    var start = setInterval(function () {
        // imgs[i].style.backgroundColor = `rgb(${index*40+40},0,0)`;
        var deg = (index * 60 < 180) ? (index * 60) : (index * 60 - 360)
        console.log(deg)
        imgs[index].style.transform = `rotateY(${deg}deg) translateZ(400px)`;
        index++;
        if (index > 5) {
            clearInterval(start)
        }
    }, 1000)


}