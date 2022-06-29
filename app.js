var btnprimary = document.querySelector("#btn-primary");
var txtarea = document.querySelector("#txt-area");
var outputdiv = document.querySelector("#output");

function clickhander(){

    outputdiv.innerHTML = "sskss " + txtarea.value;
};
btnprimary.addEventListener("click", clickhander);
