function shop(){
  shopScene();
  let output = document.getElementById("outputTextArea");
  let inputSubmit = document.getElementById("inputSubmit");
  let input = document.getElementById("inputTextArea");

  function choices(){
    output.value = "\n\n\n\n\n\nYour gold: " + player.gold +
    "\nThe selection - (type 'health' or 'mana' for either potion) " +
    "\n1: health potion - 10g - restores max/2" +
    "\n2: mana potion - 10g - restores max/2" +
    "\n3: sword - 200g - increase str/agi by 10" +
    "\n4: wand - 200g increase int by 10" +
    "\n5: chainmail - 500g - increase def by 15" +
    "\n6: leave";



      inputSubmit.onclick = function choose(){
        let regex = /health|mana|sword|wand|chainmail|leave/i;
        let result = regex.test(input.value);

        if(result){
          switch(input.value){
            case "health":
            case "Health":
              buyHealthPot();
            break;
            case "mana":
            case "Mana":
              buyManaPot();
            break;
            case "sword":
            case "sword":
              buySword();
            break;
            case "wand":
            case "Wand":
              buyWand();
            break;
            case "chainmail":
            case "Chainmail":
              buyChainMail();
            break;
            case "leave":
            case "Leave":
            input.value = "";
              town();
            break;
          }
        }
      }
    }


  choices();
}



function buyHealthPot(){
  let input = document.getElementById("inputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");

  input.value = "";
  if(player.gold >= 10){
    player.gold -= 10;
    player.potionCount += 1;
    rightOutput.value = "You have succesfully purchased a Health Potion" +
    "\nYou now have " + player.potionCount + " Health Potion(s)";
    inputSubmit.onclick = shop;
  } else {
    rightOutput.value = "You do not have enough gold";
    inputSubmit.onclick = shop;
  }
}

function buyManaPot(){
  let input = document.getElementById("inputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");

  input.value = "";
  if(player.gold >= 10){
    player.gold -= 10;
    player.manaPotionCount += 1;
    rightOutput.value = "You have succesfully purchased a Mana Potion" +
    "\nYou now have " + player.manaPotionCount + " Mana Potion(s)";
    inputSubmit.onclick = shop;
  } else {
    rightOutput.value = "You do not have enough gold";
    inputSubmit.onclick = shop;
  }
}


function buySword(){
  let input = document.getElementById("inputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");

  input.value = "";
  if(player.gold >= 200){
    player.gold -= 200;
    player.inventory.push("Bronze Sword");
    player.strength += 10;
    rightOutput.value = "You have succesfully purchased the Bronze Sword" +
    "\nThe Bronze Sword increases your strength by 10!";

    inputSubmit.onclick = shop;
  } else {
    rightOutput.value = "You do not have enough gold";
    inputSubmit.onclick = shop;
  }
}

function buyWand(){
  let input = document.getElementById("inputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");

  input.value = "";
  if(player.gold >= 200){
    player.gold -= 200;
    player.inventory.push("Magic Wand");
    player.intellect += 10;
    rightOutput.value = "You have succesfully purchased the Magic Wand" +
    "\nThe Magic Wand increases your intellect by 10!";

    inputSubmit.onclick = shop;
  } else {
    rightOutput.value = "You do not have enough gold";
    inputSubmit.onclick = shop;
  }
}


function buyChainMail(){
  let input = document.getElementById("inputTextArea");
  let rightOutput = document.getElementById("rightOutput");
  let inputSubmit = document.getElementById("inputSubmit");

  input.value = "";
  if(player.gold >= 500){
    player.gold -= 500;
    player.inventory.push("Chainmail");
    player.defense += 20;
    rightOutput.value = "You have succesfully purchased the Chainmail" +
    "\nThe Chainmail increases your defense by 20!";

    inputSubmit.onclick = shop;
  } else {
    rightOutput.value = "You do not have enough gold";
    inputSubmit.onclick = shop;
  }
}
