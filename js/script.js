window.addEventListener('load', function () {
    console.log('All assets are loaded')


    let images = new Array('Babylon Destruct copy.png', 'guitar-756326.jpg', 'diapo1.jpg', 'diapo2.jpg', 'diapo3.jpg', 'diapo4.jpg');
    let i = 0;
    let diapo = document.getElementById('img');
    let timer = setInterval(function () {
        diapo.src = '../img/diapo/' + images[i];
        i++;
        if (i == images.length) i = 0;
    }, 5000);

    let text = new Array('guitar-756326.jpg', 'diapo1.jpg', 'diapo2.jpg', 'diapo3.jpg', 'diapo4.jpg');
    let textDiapo = document.getElementById('places');
    let timerText = setInterval(function () {
        textDiapo.innerHTML = text[i];
        i++;
        if (i == text.length) i = 0;
    }, 5000);



    Array.prototype.forEach.call(
        document.querySelectorAll(".file-upload__button"),
        function (button) {
            const hiddenInput = button.parentElement.querySelector(
                ".file-upload__input"
            );
            const label = button.parentElement.querySelector(".file-upload__label");
            const defaultLabelText = "No file(s) selected";


            label.textContent = defaultLabelText;
            label.title = defaultLabelText;

            button.addEventListener("click", function () {
                hiddenInput.click();
            });

            hiddenInput.addEventListener("change", function () {
                const filenameList = Array.prototype.map.call(hiddenInput.files, function (
                    file
                ) {
                    return file.name;
                });

                label.textContent = filenameList.join(", ") || defaultLabelText;
                label.title = label.textContent;
            });
        }











    );





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









