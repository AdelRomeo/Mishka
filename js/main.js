let marchange = 0;
const reviewMessage = document.querySelector(".review--message");

//левая кнопка
document.querySelector(".review--btn-left").onclick = function () {
    marchange = marchange - 942;
    let container = document.querySelector(".review--container");
    container.style.marginLeft = marchange + "px";

    //проверка максимального марджина, скрытие левой кнопки
   // if (marchange == -1884){
    //    let bigMar = document.querySelector(".review--btn-left");
    //    bigMar.style.display = "none";
   // }
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


//всплывающее окно отправки отзыва
document.querySelector(".review--write").onclick = function () {
    //const list = document.querySelectorAll(".review--list");
    //console.log(list);
    reviewMessage.style.display = "block";
    console.log(reviewMessage);
}

//добавление комментариев в массив
document.querySelector(".review--mess-btn").onclick = function commAdd() {
    const reviewContainer = document.querySelector(".review--container");

    let messArea = document.querySelector(".review--mess-area").value;
    let messName = document.querySelector(".review--mess-name").value;
    let messMail = document.querySelector(".review--mess-mail").value;
    console.log(messArea);
    //скрытие окна отправки отзыва
    reviewMessage.style.display = "none";

    let tempLate = document.querySelector(".tempLate").content.querySelector(".review--list");

    //добавление элемента
    let element = tempLate.cloneNode(true);
    element.children[0].textContent = messArea;
    element.children[1].children[0].textContent = messName;
    element.children[1].children[1].textContent = messMail;
    reviewContainer.appendChild(element);
}
