function loot(){
  let rand = Math.floor(Math.random() * 10)+ 1;
  let lootTable = ["potion","gold coins","potion",
                  "gold coins","potion","gold coins",
                  "potion","gold coins", "potion","gold coins"];

  if(lootTable[rand] === "potion"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.potionCount++;
    let output = document.getElementById("rightOutput");
    output.value = "\n\nThe enemy dropped a potion! You now have " +
    player.potionCount + " health potions!";

  } else if(lootTable[rand] === "gold coins"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.gold += 25;
    let output = document.getElementById("rightOutput");
    output.value = "\n\nThe enemy dropped 25 gold coins! You now have " +
    player.gold + " coins!";
  }
}
