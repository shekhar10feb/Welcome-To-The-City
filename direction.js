const texting = ['<i>ARA CITY 20KM</i>', '<i>MARS <br>MANUFACTURERS 24KM</i>'];


let currentText = 0;

// const space1 = document.querySelector(".space").style.wordSpacing = "20px";


function changingText() {

    --currentText;

    const takingOut1 = document.querySelector(".place");
    // const space1 = document.querySelector(".space").style.wordSpacing = "20px";


    if (currentText < 0) {
        currentText = texting.length - 1;
        // currentText = visibilityi.length - 1;
    }

    for (let i = 0; i < texting.length; i++) {
        takingOut1.innerHTML = texting[(currentText + i) % texting.length];
    }


}

setInterval(changingText, 2000);



