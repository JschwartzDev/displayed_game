function loot(){
  let rand = Math.floor(Math.random() * 10)+ 1;
  let lootTable = ["potion","gold coins","iron ore",
                  "potion","gold coins","iron ore",
                  "potion"," gold coins", "mithril ore","gold coins",
                  "potion","iron ore","gold coins",
                  "potion","nothing","potion",
                  "iron ore","nothing", "gold coins","potion",
                  "potion","gold coins","nothing",
                  "gold coins","iron ore","gold coins",
                  "nothing","gold coins", "potion","iron ore",
                  "potion","gold coins","nothing",
                  "gold coins","iron ore","gold coins",
                  "iron ore","gold coins", "thorium ore","iron ore"];

  if(lootTable[rand] === "potion"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.potionCount++;
    let output = document.getElementById("rightOutput");
    output.value = "The enemy dropped a potion! You now have " +
    player.potionCount + " health potions!";

  } else if(lootTable[rand] === "gold coins"){
    let input = document.getElementById("inputTextArea");
    input.value = "";
    player.gold += 25;
    let output = document.getElementById("rightOutput");
    output.value = "The enemy dropped 25 gold coins! You now have " +
    player.gold + " coins!";
  } else if(lootTable[rand] === "iron ore"){
    player.ironOreCount++;
    let output = document.getElementById("rightOutput");
    let input = document.getElementById("inputTextArea");
    input.value = "";

    output.value = "The enemy dropped 'iron ore'" +
    "\nYou now have " + player.ironOreCount + " iron ore!";
  } else if(lootTable[rand] === "mithril ore"){
    player.mithrilOreCount++;
    let output = document.getElementById("rightOutput");
    let input = document.getElementById("inputTextArea");
    input.value = "";

    output.value = "The enemy dropped 'mithril ore'" +
    "\nYou now have " + player.mithrilOreCount + " mithril ore!";
  } else if(lootTable[rand] === "thorium ore"){
    player.thoriumOreCount++;
    let output = document.getElementById("rightOutput");
    let input = document.getElementById("inputTextArea");
    input.value = "";

    output.value = "The enemy dropped 'thorium ore'" +
    "\nYou now have " + player.thoriumOreCount + " thorium ore!";
  }

  combat();
}
