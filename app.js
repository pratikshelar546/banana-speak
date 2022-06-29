var btnprimary = document.querySelector("#btn-primary");
var txtarea = document.querySelector("#txt-area");
function clickhander(){

    console.log("clicked");
  console.log("input", txtarea.value);
};
btnprimary.addEventListener("click", clickhander);
