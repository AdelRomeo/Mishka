function LeftSlyder() {
    let btnLeft = document.querySelector(".review--btn-left");

}

let marLeft = 0;

document.querySelector(".review--btn-left").onclick = function () {
    marLeft = marLeft - 942;
    let container = document.querySelector(".review--container");
    container.style.marginLeft = marLeft + "px";

    if (marLeft == -1884){
        let a = document.querySelector(".review--btn-left");
        a.style.display = "none";
    }
    console.log(marLeft);
}

document.querySelector(".review--btn-right").onclick = function () {
    marLeft = marLeft + 942;
    let container = document.querySelector(".review--container");
    container.style.marginLeft = marLeft + "px";
    if (marLeft !== -1884){
        let a = document.querySelector(".review--btn-left");
        a.style.display = "block";
    }
    console.log(marLeft);
}