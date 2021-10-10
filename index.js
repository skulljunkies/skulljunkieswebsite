let images = [{imgsrc:"media/slide1.jpeg"},{imgsrc:"media/slide2.jpeg"},{imgsrc:"media/slide3.jpeg"}]
let x = 0;
let slide0 = images[0];
let slide1 = images[1];
let slide2 = images[2];

function rightArrow() {
    if(x == 2) {
        x = 0;
        document.getElementById("slide").src = images[0].imgsrc;
    }
    else {
        x += 1;
        document.getElementById("slide").src = images[x].imgsrc;
    }
}

function leftArrow() {
    if(x == 0) {
        x = 2;
        document.getElementById("slide").src = images[x].imgsrc;
    }
    else {
        x -= 1;
        document.getElementById("slide").src = images[x].imgsrc;
    }
}