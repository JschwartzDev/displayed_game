let player = null;


function intro(){
  let outputValue = document.getElementById("outputTextArea");
  outputValue.innerHTML = "\n\n\n\n\n-------------------------------------------------" +
  "\n---------Welcome to Text Based Game World--------" +
  "\n-------------------------------------------------" +
  "\n------------Type start & enter to play!---------" +
  "\n-------------------------------------------------";

  let inputSubmit = document.getElementById("inputSubmit");

  inputSubmit.onclick = function start() {

    let input = document.getElementById("inputTextArea");

    if(input.value == "start" || input.value == "Start"){
      input.value = "";
      characterSelection();
    }
    
  }
}
