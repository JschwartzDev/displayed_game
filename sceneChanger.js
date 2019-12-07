function combatScene(){
  let body = document.getElementById("body");
  body.style.backgroundImage = "url('https://i.postimg.cc/rpNS5xkh/forestpic.jpg')";
  let buttonPanelLeft = document.getElementById("buttonPanelLeft");
  let buttonPanelRight = document.getElementById("buttonPanelRight");
  let centerPanel = document.getElementById("textAreas");
  let root = document.documentElement;
  root.style.setProperty("--pink-color", "Green");
  centerPanel.style.background = "transparent";
  buttonPanelLeft.style.background = "transparent";
  buttonPanelRight.style.background = "transparent";

}


function townScene(){
  let body = document.getElementById("body");
  body.style.backgroundImage = "url('https://i.postimg.cc/7h6MH6jK/villagepic.jpg')";
  body.style.backgroundSize = "100vw 60vw";
  let buttonPanelLeft = document.getElementById("buttonPanelLeft");
  let buttonPanelRight = document.getElementById("buttonPanelRight");
  let centerPanel = document.getElementById("textAreas");
  let root = document.documentElement;
  root.style.setProperty("--pink-color", "#C8986C");
  centerPanel.style.background = "transparent";
  buttonPanelLeft.style.background = "transparent";
  buttonPanelRight.style.background = "transparent";


}

function shopScene(){
  let body = document.getElementById("body");
  body.style.backgroundImage = "url('https://i.postimg.cc/cCggk8pG/shop.jpg')";
  body.style.backgroundSize = "100vw 60vw";
  let buttonPanelLeft = document.getElementById("buttonPanelLeft");
  let buttonPanelRight = document.getElementById("buttonPanelRight");
  let centerPanel = document.getElementById("textAreas");
  let root = document.documentElement;
  root.style.setProperty("--pink-color", "#C8986C");
  centerPanel.style.background = "transparent";
  buttonPanelLeft.style.background = "transparent";
  buttonPanelRight.style.background = "transparent";


}

function smithScene(){
  let body = document.getElementById("body");
  body.style.backgroundImage = "url('https://i.postimg.cc/QCxSFSKk/blacksmith.jpg')";
  body.style.backgroundSize = "100vw 60vw";
  let buttonPanelLeft = document.getElementById("buttonPanelLeft");
  let buttonPanelRight = document.getElementById("buttonPanelRight");
  let centerPanel = document.getElementById("textAreas");
  let root = document.documentElement;
  root.style.setProperty("--pink-color", "#C8986C");
  centerPanel.style.background = "transparent";
  buttonPanelLeft.style.background = "transparent";
  buttonPanelRight.style.background = "transparent";


}




function levelUpScene(){
  let leftOutPut = document.getElementById("leftOutPut");
  let rightOutput = document.getElementById("rightOutput");
  let outputTextArea = document.getElementById("outputTextArea");

  rightOutput.style.animationName = "levelUp";
  leftOutPut.style.animationName = "levelUp";
}
