function smithIron(){
  let rightOutput = document.getElementById("rightOutput");
  let mainOutPut = document.getElementById("outputTextArea");
  let input = document.getElementById("inputTextArea");
  input.value = "";

  if(player.craftingLevel <= 0){
    mainOutPut.value = "\n\n\n\n\n\n\n\nType helmet,gloves or dagger" +
    "\nBar count: " + player.ironBarCount +
    "\nYou can make:" +
    "\n1: Iron helmet - 5 bars" +
    "\n2: Iron gloves - 3 bars" +
    "\n3: Iron dagger - 3 bars" +
    "\n4: leave";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function choose(){

      let input = document.getElementById("inputTextArea");

      let valid = {
        "helmet": "yes",
        "Helmet": "yes",
        "gloves": "yes",
        "Gloves": "yes",
        "dagger": "yes",
        "Dagger": "yes",
        "leave": "yes",
        "Leave": "yes"
      }

      if(input.value in valid){
        switch(input.value){
          case "helmet":
          case "Helmet":
            ironHelmet();
          break;
          case "gloves":
          case "Gloves":
            ironGloves();
          break;
          case "dagger":
          case "Dagger":
            ironDagger();
          break;
          case "leave":
          case "Leave":
            smith();
          break;
        }
      }

    }
  } else if(player.craftinLevel <= 5 && player.craftingLevel >= 1){
    mainOutPut.value = "You can make:" +
    "\n1: Iron helmet - 5 bars" +
    "\n2: Iron gloves - 3 bars" +
    "\n3: Iron dagger - 3 bars" +
    "\n4: Iron chestplate - 10 bars" +
    "\n4: leave";
  }

}






function smithMithril(){
  let rightOutput = document.getElementById("rightOutput");
  let mainOutPut = document.getElementById("outputTextArea");
  let input = document.getElementById("inputTextArea");
  input.value = "";

  if(player.craftingLevel <= 0){
    mainOutPut.value = "\n\n\n\n\n\n\n\nType helmet,gloves or dagger" +
    "\nBar count: " + player.mithrilBarCount +
    "\nYou can make:" +
    "\n1: Mithril helmet - 5 bars" +
    "\n2: Mithril gloves - 3 bars" +
    "\n3: Mithril dagger - 3 bars" +
    "\n4: leave";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){

      let input = document.getElementById("inputTextArea");

      let valid = {
        "helmet": "yes",
        "Helmet": "yes",
        "gloves": "yes",
        "Gloves": "yes",
        "dagger": "yes",
        "Dagger": "yes",
        "leave": "yes",
        "Leave": "yes"
      }

      if(input.value in valid){
        switch(input.value){
          case "helmet":
          case "Helmet":
            mithrilHelmet();
          break;
          case "gloves":
          case "Gloves":
            mithrilGloves();
          break;
          case "dagger":
          case "Dagger":
            mithrilDagger();
          break;
          case "leave":
          case "Leave":
            smith();
          break;
        }
      }
    }
  } else if(player.craftinLevel <= 5 && player.craftingLevel >= 1){
    mainOutPut.value = "You can make:" +
    "\n1: Mithril helmet - 5 bars" +
    "\n2: Mithril gloves - 3 bars" +
    "\n3: Mithril dagger - 3 bars" +
    "\n4: Mithril chestplate - 10 bars" +
    "\n4: leave";
  }


}





function smithThorium(){
  let rightOutput = document.getElementById("rightOutput");
  let mainOutPut = document.getElementById("outputTextArea");
  let input = document.getElementById("inputTextArea");
  input.value = "";

  if(player.craftingLevel <= 0){
    mainOutPut.value = "\n\n\n\n\n\n\n\nType helmet,gloves or dagger" +
    "\nBar count: " + player.thoriumBarCount +
    "\nYou can make:" +
    "\n1: Thorium helmet - 5 bars" +
    "\n2: Thorium gloves - 3 bars" +
    "\n3: Thorium dagger - 3 bars" +
    "\n4: leave";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){

      let input = document.getElementById("inputTextArea");

      let valid = {
        "helmet": "yes",
        "Helmet": "yes",
        "gloves": "yes",
        "Gloves": "yes",
        "dagger": "yes",
        "Dagger": "yes",
        "leave": "yes",
        "Leave": "yes"
      }

      if(input.value in valid){
        switch(input.value){
          case "helmet":
          case "Helmet":
            thoriumHelmet();
          break;
          case "gloves":
          case "Gloves":
            thoriumGloves();
          break;
          case "dagger":
          case "Dagger":
            thoriumDagger();
          break;
          case "leave":
          case "Leave":
            smith();
          break;
        }
      }
    }
  } else if(player.craftinLevel <= 5 && player.craftingLevel >= 1){
    mainOutPut.value = "You can make:" +
    "\n1: Thorium helmet - 5 bars" +
    "\n2: Thorium gloves - 3 bars" +
    "\n3: Thorium dagger - 3 bars" +
    "\n4: Thorium chestplate - 10 bars" +
    "\n4: leave";
  }


}





//START OF IRON FORGING
function ironHelmet(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.ironBarCount >= 5){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.ironBarCount -= 5;
    player.inventory.push("Iron Helmet");
    player.defense += 5;
    rightOutput.value = "You have succesfully crafted an 'Iron Helmet'!" +
    "\nThe Iron Helmet boosts your defense by 5" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    rightOutput.value = "Not enough Iron bars";
  }
}


function ironGloves(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.ironBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.ironBarCount -= 3;
    player.inventory.push("Iron Gloves");
    player.defense += 5;
    rightOutput.value = "You have succesfully crafted an 'Iron Gloves'!" +
    "\nThe Iron Gloves boosts your defense by 5" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Iron bars";
  }
}




function ironDagger(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.ironBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.ironBarCount -= 3;
    player.inventory.push("Iron Dagger");
    player.strength += 10;
    rightOutput.value = "You have succesfully crafted an 'Iron Dagger'!" +
    "\nThe Iron Dagger boosts your strength by 10" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Iron bars";
  }
}

//END OF IRON FORGING




//START OF MITHRIL FORGING

function mithrilHelmet(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.mithrilBarCount >= 5){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.mithrilBarCount -= 5;
    player.inventory.push("Mithril Helmet");
    player.defense += 10;
    rightOutput.value = "You have succesfully crafted an 'Mithril Helmet'!" +
    "\nThe Mithril Helmet boosts your defense by 10" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Mithril bars";
  }
}


function mithrilGloves(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.mithrilBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.mithrilBarCount -= 3;
    player.inventory.push("Mithril Gloves");
    player.defense += 10;
    rightOutput.value = "You have succesfully crafted an 'Mithril Gloves'!" +
    "\nThe Mithril Gloves boosts your defense by 10" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Mithril bars";
  }
}




function mithrilDagger(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.mithrilBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.mithrilBarCount -= 3;
    player.inventory.push("Mithril Dagger");
    player.strength += 20;
    rightOutput.value = "You have succesfully crafted an 'Mithril Dagger'!" +
    "\nThe Mithril Dagger boosts your strength by 20!" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Mithril bars";
  }
}


//END OF MITHRIL FORGING


//START OF MITHRIL FORGING

function thoriumHelmet(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.thoriumBarCount >= 5){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.thoriumBarCount -= 5;
    player.inventory.push("Thorium Helmet");
    player.defense += 15;
    rightOutput.value = "You have succesfully crafted an 'Thorium Helmet'!" +
    "\nThe Thorium Helmet boosts your defense by 15" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Thorium bars";
  }
}


function thoriumGloves(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.thoriumBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.thoriumBarCount -= 3;
    player.inventory.push("Thorium Gloves");
    player.defense += 15;
    rightOutput.value = "You have succesfully crafted an 'Thorium Gloves'!" +
    "\nThe Thorium Gloves boosts your defense by 15" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough thorium bars";
  }
}




function thoriumDagger(){
  let rightOutput = document.getElementById("rightOutput");

  if(player.thoriumBarCount >= 3){
    let input = document.getElementById("inputTextArea");
    input.value ="";
    player.thoriumBarCount -= 3;
    player.inventory.push("Thorium Dagger");
    player.strength += 30;
    rightOutput.value = "You have succesfully crafted an 'Thorium Dagger'!" +
    "\nThe Thorium Dagger boosts your strength by 30!" +
    "\nPress enter to return to smithing";

    let inputSubmit = document.getElementById("inputSubmit");
    inputSubmit.onclick = function(){
      smith();
    }

  } else {
    let input = document.getElementById("inputTextArea");
    input.value ="";
    rightOutput.value = "Not enough Thorium bars";
  }
}
