let healingPotions = document.getElementById("healingPotions");
let gold = document.getElementById("gold");
let gear = document.getElementById("gear");
let strength = document.getElementById("strength");
let defense = document.getElementById("defense");
let health = document.getElementById("health");





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
