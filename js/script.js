window.addEventListener("load", function () {
    console.log("All assets are loaded");

    let images = [
        "Babylon Destruct copy.png",
        "guitar-756326.jpg",
        "diapo1.jpg",
        "diapo2.jpg",
        "diapo3.jpg",
        "diapo4.jpg",
    ];
    let texts = [
        "logo",
        "guitar-756326.jpg",
        "diapo1.jpg",
        "diapo2.jpg",
        "diapo3.jpg",
        "diapo4.jpg",
    ];
    let i = 0;
    let diapo = document.getElementById("img");
    let textDiapo = document.getElementById("places");

    let timer = setInterval(function () {
        diapo.src = "../img/diapo/" + images[i];
        textDiapo.innerHTML = texts[i];
        i++;
        if (i == images.length) i = 0;
    }, 5000);


    var inputField = document.getElementById("input-restricted");
    var button = document.getElementById("go-to-restrcted");

    inputField.addEventListener("input", function () {
        var userInput = inputField.value;

        if (userInput === "ABCDEF") {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});
