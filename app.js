var txtarea = document.querySelector("#txt-area");
var btnprimary = document.querySelector("#btn-primary");
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input){
    return serverURL + "?" +"text=" + input
}

function errorHandler(error){
    console.log("some error occured" + error);
    alert("somthing went wrong with server please check again after some time");
}




function clickhander(){
    var inputText = txtarea.value;
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;
     
        outputdiv.innerHTML = translateText;
        
    })
    .catch(errorHandler)
};
btnprimary.addEventListener("click", clickhander);
