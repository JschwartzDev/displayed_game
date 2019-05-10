function shop(){
  shopScene();
  let output = document.getElementById("outputTextArea");


  function choices(){
    output.value = "\n\n\n\n\n\n\n\n\nYour gold: " + player.gold +
    "\nThe selection - " +
    "\n1: potion - 10g" +
    "\n2: sword - 200g" +
    "\n3: chainmail - 500g" +
    "\n4: leave";

    let inputSubmit = document.getElementById("inputSubmit");

      inputSubmit.onclick = function choose(){

        let input = document.getElementById("inputTextArea");

        let valid = {
          "potion":"yes",
          "Potion":"yes",
          "sword":"yes",
          "Sword":"yes",
          "chainmail":"yes",
          "Chainmail":"yes",
          "leave": "yes",
          "Leave": "yes"
        }

        if(input.value in valid){
          switch(input.value){
            case "potion":
            case "potion":
              if(player.gold >= 40){
                input.value ="";
                player.potionCount++;
                player.gold -= 40;
                output.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nYou now have " + player.potionCount + " potions" +
                "\nPress enter to return to the selection";

                let inputSubmit = document.getElementById("inputSubmit");
                inputSubmit.onclick = choices;
              } else {
                input.value = "";
                output.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nNot enough gold" +
                "\nPress enter to return to the selection";

                let inputSubmit = document.getElementById("inputSubmit");
                inputSubmit.onclick = choices;
              }
            break;
            case "sword":
            case "sword":
            if(player.gold >= 200){
              input.value ="";
              player.inventory.push("sword");
              player.strength += 20;
              player.gold -= 200;
              output.value = "\n\n\n\n\n\n\n\n\n\n\n\nYou have purchased the 'sword'" +
              "\nThe 'sword' increases your strength by 20" +
              "\nPress enter to return to the selection";

              let inputSubmit = document.getElementById("inputSubmit");
              inputSubmit.onclick = choices;
            } else {
              input.value = "";
              output.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nNot enough gold" +
              "\nPress enter to return to the selection";

              let inputSubmit = document.getElementById("inputSubmit");
              inputSubmit.onclick = choices;
            }
            break;
            case "chainmail":
            case "Chainmail":
            if(player.gold >= 500){
              input.value ="";
              player.inventory.push("chainmail");
              player.defense += 15;
              player.gold -= 500;
              output.value = "\n\n\n\n\n\n\n\n\n\n\n\nYou have purchased the 'chainmail'" +
              "\nThe 'chainmail' increases your defense by 40'" +
              "\nPress enter to return to the selection";

              let inputSubmit = document.getElementById("inputSubmit");
              inputSubmit.onclick = choices;
            } else {
              input.value = "";
              output.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nNot enough gold" +
              "\nPress enter to return to the selection";

              let inputSubmit = document.getElementById("inputSubmit");
              inputSubmit.onclick = choices;
            }
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
