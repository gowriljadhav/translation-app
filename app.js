var translateButton=document.querySelector("#translate-button");
var textInput=document.querySelector("#text-input");

console.log(textInput);




translateButton.addEventListener("click",function clickEventHandler(){
    console.log("clicked");
    console.log("input",textInput.value);   
})