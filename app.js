// Element Selection 
let textArea=document.querySelector("#form-txt-input");
let button=document.querySelector("#form-btn-translate");
let outputDiv=document.querySelector("#output-div");


let serverURL="https://api.funtranslations.com/translate/minion.json";

// Take input from textarea and make url to make request
function getTranslationgURL(text){
    return serverURL+"?text="+text;
}

// If somehting went wrong then tell the user
function errorHandler(error){
    alert("There must be somthing wrong!"+error);
}

// Make API request and hendle the respose
function clickHandler(){
    let inputText=textArea.value;
    fetch(getTranslationgURL(inputText))
        .then(respone => respone.json())
        .then(json => outputDiv.textContent=json.contents.translated)
        .catch(errorHandler);
}

// Add event listner to the button
button.addEventListener("click", clickHandler);

// Add prevent default and make form element 
// When translate button is pressed then maye be clear the text area