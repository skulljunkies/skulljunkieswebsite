let images = [
    {imgsrc:"media/slide1.jpeg"},
    {imgsrc:"media/slide2.jpeg"},
    {imgsrc:"media/slide3.jpeg"},
    {imgsrc:"media/1.jpg"},
    {imgsrc:"media/2.jpg"},
    {imgsrc:"media/3.jpg"},
    {imgsrc:"media/4.jpg"},
    {imgsrc:"media/5.jpg"},
    {imgsrc:"media/6.jpg"}
]
let x = 0;
let slide0 = images[0];
let slide1 = images[1];
let slide2 = images[2];

function rightArrow() {
    if(x == 7) {
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
        x = 7;
        document.getElementById("slide").src = images[x].imgsrc;
    }
    else {
        x -= 1;
        document.getElementById("slide").src = images[x].imgsrc;
    }
}