





function smelt(){
  let mainOutPut = document.getElementById("outputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");
  let input = document.getElementById("inputTextArea");
  input.value = "";


  mainOutPut.value = "\n\n\n\n\n\n\n\n\n\nSmeltable Metals - " +
  "\n1: iron ore + "+ player.ironOreCount +
  "\n2: mithril ore +" + player.mithrilOreCount +
  "\n3: thorium ore + " + player.thoriumOreCount +
  "\n4: leave";



  inputSubmit.onclick = function chooseOre(){
    let input = document.getElementById("inputTextArea");
    switch(input.value){
      case "iron":
      case "Iron":
        smeltIron();
      break;
      case "mithril":
      case "Mithril":
        smeltMithril();
      break;
      case "thorium":
      case "Thorium":
        smeltThorium();
      break;
      case "leave":
      case "Leave":
        craft();
      break;
    }
  }
}
