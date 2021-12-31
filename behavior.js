let tColor = ['#ff0000', '#2D1616'];

// To implement tougle saying Happy New Year 2022 
const taker1 = document.querySelector(".HNY");

let currentColor = 0;

function changingColor() {

    --currentColor;

    if (currentColor < 0) {
        currentColor = tColor.length - 1;
    }

    for (let i = 0; i < tColor.length; i++) {
        taker1.style.color = tColor[(currentColor + i) % tColor.length];
        taker2.style.color = tColor[(currentColor + i) % tColor.length];
    }
}

setInterval(changingColor, 1000);

