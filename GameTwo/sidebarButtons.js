let healingPotions = document.getElementById("healingPotions");
let gold = document.getElementById("gold");
let gear = document.getElementById("gear");
let strength = document.getElementById("strength");
let defense = document.getElementById("defense");
let health = document.getElementById("health");
let drinkPot = document.getElementById("drinkPot");
let crafting = document.getElementById("crafting");
let intellect = document.getElementById("intellect");
let agility = document.getElementById("agility");
let xp = document.getElementById("xp");




healingPotions.onclick = function(){
  healingPotions.style.animationName = "buttonPress";
  if(player != null){
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "You have " + player.potionCount + " potions";

  } else {
    let rightOutput = document.getElementById("rightOutput");

    rightOutput.value = "No player created";
  }
}


gold.onclick = function(){
  if(player != null){
    let rightOutput = document.getElementById("rightOutput");

    rightOutput.value = "You have " + player.gold + " gold coins";
  } else {
    let rightOutput = document.getElementById("rightOutput");

    rightOutput.value = "No player created";
  }
}


gear.onclick = function(){
  if(player != null){
      let rightOutput = document.getElementById("rightOutput");
      rightOutput.value = (player.inventory.length <= 0) ? "You have no equipment" : player.inventory.toString();
  } else {
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "No player created";
  }

}

drinkPot.onclick = function(){
  if(player != null && player.potionCount >= 1){
    let rightOutput = document.getElementById("rightOutput");
    player.potionCount--;
    player.health = (player.health + player.potHealAmount >= player.maxHealth) ? player.maxHealth : player.health + player.potHealAmount;
    rightOutput.value = "You drink a health potion, you now have " +
    player.potionCount + " health potions" +
    "\nYou have " + player.health + " health";
  } else {
    let rightOutput = document.getElementById("rightOutput");
    rightOutput.value = "No player Created";
  }
}




health.onclick = function(){
  if(player!= null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.health + " health currently.";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}

strength.onclick = function(){
  if(player!= null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.strength + " strength currently.";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}

defense.onclick = function(){
  if(player!= null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.defense + " defense currently.";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}

crafting.onclick = function(){
  if(player != null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.craftingLevel + " crafting currently";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}


intellect.onclick = function(){
  if(player != null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.intellect + " intellect currently";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}


agility.onclick = function(){
  if(player != null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.agility + " agility currently";
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}



xp.onclick = function(){
  if(player != null){
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "You have " + player.exp + " xp currently" +
    "\nXp till level: " + (player.level*1000 - player.exp);
  } else {
    let leftOutPut = document.getElementById("leftOutPut");
    leftOutPut.value = "No player created";
  }
}
