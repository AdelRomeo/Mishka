let marchange = 0;

//левая кнопка
document.querySelector(".review--btn-left").onclick = function () {
    marchange = marchange - 942;
    let container = document.querySelector(".review--container");
    container.style.marginLeft = marchange + "px";

    //проверка максимального марджина, скрытие левой кнопки
    if (marchange == -1884){
        let bigMar = document.querySelector(".review--btn-left");
        bigMar.style.display = "none";
    }
    //показ правой кнопки
    if (marchange !== 0){
        let bigMar = document.querySelector(".review--btn-right");
        bigMar.style.display = "block";
    }
}

//правая кнопка
document.querySelector(".review--btn-right").onclick = function () {
    marchange = marchange + 942;
    let container = document.querySelector(".review--container");
    container.style.marginLeft = marchange + "px";

    //проверка максимального марджина, показ левой кнопки
    if (marchange !== -1884){
        let bigMar = document.querySelector(".review--btn-left");
        bigMar.style.display = "block";
    }
    //скрытие правой кнопки
    if (marchange == 0){
        let bigMar = document.querySelector(".review--btn-right");
        bigMar.style.display = "none";
    }
}


//всплывающее окно оправки отзыва
document.querySelector()

