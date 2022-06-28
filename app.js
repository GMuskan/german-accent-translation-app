var txtInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");
var btnReset = document.querySelector("#clear");

btnTranslate.addEventListener("click", clickEventHandler);
btnReset.addEventListener("click", clickResetHandler);

var serverUrl = 'https://api.funtranslations.com/translate/german-accent.json';
function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server try again after sometime");
}
function clickEventHandler(){
    var input  = txtInput.value;
    fetch(getTranslationUrl(input))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler);
}

function clickResetHandler(){
    txtInput.value = '';
    txtOutput.innerText='';
}
