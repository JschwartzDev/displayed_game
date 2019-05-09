function smith(){
  let mainOutPut = document.getElementById("outputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");
  let input = document.getElementById("inputTextArea");
  input.value = "";


  mainOutPut.value = "\n\n\n\n\n\n\n\n\n\nSmithable Metals - " +
  "\n1: Iron bar + "+ player.ironBarCount +
  "\n2: Mithril bar +" + player.mithrilBarCount +
  "\n3: Thorium bar + " + player.thoriumBarCount +
  "\n4: leave";

  inputSubmit.onclick = function chooseBar(){
    let input = document.getElementById("inputTextArea");
    switch(input.value){
      case "iron":
      case "Iron":
        smithIron();
      break;
      case "mithril":
      case "Mithril":
        smithMithril();
      break;
      case "thorium":
      case "Thorium":
        smithThorium();
      break;
      case "leave":
      case "Leave":
        craft();
      break;
    }
  }
}
