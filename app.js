let textArea=document.querySelector("#txt-input");
let button=document.querySelector("button");
let outputDiv=document.querySelector("#outputDiv");


let serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationgURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(){
    console.log("There must be somthing wrong!");
}

function clickHandler(){
    let inputText=textArea.value;
    fetch(getTranslationgURL(inputText))
        .then(respone => respone.json())
        .then(json => outputDiv.textContent=json.contents.text)
        .catch(errorHandler);
}
button.addEventListener("click", clickHandler);