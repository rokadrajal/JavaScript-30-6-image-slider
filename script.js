const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var index = 0;

document.querySelector('.btn-1').onclick = function () {
    if (index > 0) {
        index--;
    }else{
        index = images.length-1;
    }
    document.querySelector('img').attributes.src.value = `images/${images[index]}`;
}

document.querySelector('.btn-2').onclick = function () {


    if (index < images.length - 1) {
        index++;
    }
    else{
        index = 0;
    }
    document.querySelector('img').attributes.src.value = `images/${images[index]}`;

}


