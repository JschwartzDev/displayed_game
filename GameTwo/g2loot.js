function loot(){
  let rand = Math.floor(Math.random() * 10)+ 1;
  let lootTable = ["potion","gold coins","potion",
                  "gold coins","iron ore","gold coins",
                  "iron ore","gold coins", "potion","iron ore"];

  if(lootTable[rand] === "potion"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.potionCount++;
    let output = document.getElementById("rightOutput");
    output.value = "\n\n\n\nThe enemy dropped a potion! You now have " +
    player.potionCount + " health potions!";

  } else if(lootTable[rand] === "gold coins"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.gold += 25;
    let output = document.getElementById("rightOutput");
    output.value = "\n\n\n\nThe enemy dropped 25 gold coins! You now have " +
    player.gold + " coins!";
  } else if(lootTable[rand] === "iron ore"){
    player.ironOreCount++;
    let output = document.getElementById("rightOutput");
    let input = document.getElementById("inputTextArea");
    input.value = "";

    output.value = "\n\n\n\nThe enemy dropped 'iron ore'" +
    "\nYou now have " + player.ironOreCount + " iron ore!";
  }
}
