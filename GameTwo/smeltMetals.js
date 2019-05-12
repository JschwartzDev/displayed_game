
function smeltIron(){

  let input = document.getElementById("inputTextArea");
  input.value = "";
  if(player.ironOreCount > 0){
    let barCount  = parseInt(Math.floor(player.ironOreCount)/2);
    player.ironBarCount += barCount;
    player.ironOreCount = player.ironOreCount%2;
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You smelt your Iron ore into Iron bars" +
    "\nYou now have " + barCount + " Iron bars" +
    "\nPress enter to return to crafting";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      craft();
    }

  } else {
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You don't have enough Iron ore";

  }
}







function smeltMithril(){
  let input = document.getElementById("inputTextArea");
  input.value = "";

  if(player.mithrilOreCount > 0){
    let barCount  = parseInt(Math.floor(player.mithrilOreCount/2));
    player.mithrilBarCount += barCount;
    player.mithrilOreCount = player.mithrilOreCount%2;
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You smelt your Mithril ore into Mithril bars" +
    "\nYou now have " + barCount + " Mithril bars" +
    "\nPress enter to return to crafting";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      craft();
    }

  } else {
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You don't have enough ore";

  }
}




function smeltThorium(){
  let input = document.getElementById("inputTextArea");
  input.value = "";
  let output = document.getElementById("outputTextArea");
  let thoriumCheck = player.thoriumOreCount;
  if(thoriumCheck > 0){
    let barCount  = parseInt(Math.floor(player.thoriumOreCount/2));
    player.thoriumBarCount += barCount;
    player.thoriumOreCount = player.thoriumOreCount%2;
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You smelt your thorium ore into Thorium bars" +
    "\nYou now have " + barCount + " Thorium bars" +
    "\nPress enter to return to crafting";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      craft();
    }

  } else {
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You don't have enough ore";

  }
}
