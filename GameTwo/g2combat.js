function combat(){

  let rand = Math.floor(Math.random() * 10);
  let enemy = enemyList[rand];

  function leaveTown(){
    let output = document.getElementById("outputTextArea");
    output.value = "\n\n\n\n\n\n\n\n\n\n\n\nYou leave the town in search of adventure!" +
    "\nLook out! A " + enemy.name + " has appeared!" +
    "\nPress enter to continue";

    let inputSubmit = document.getElementById("inputSubmit");

    inputSubmit.onclick = function choices(){

      output.value = "\n\n\n\n\n\n\n\n\nPlayer health: " + player.health +
      "\nEnemy health: " + enemy.health +
      "\nType 'attack', 'heal' or 'run'" +
      "\n1: attack" +
      "\n2: heal" +
      "\n3: run";

      inputSubmit.onclick = function choose(){

        let input = document.getElementById("inputTextArea");

        let valid = {
          "attack":"yes",
          "Attack":"yes",
          "heal":"yes",
          "Heal":"yes",
          "run":"yes",
          "Run":"yes"
        }

        if(input.value in valid){
          switch(input.value){
            case "attack":
            case "Attack":
              let playerDmg = player.combat();
              let enemyDmg = enemy.attack;
              if(enemy.health >= 1 && player.health >= 1){
                player.health -= (enemyDmg - player.defense);
                enemy.health -= playerDmg;
                choices();
              } else if(enemy.health <= 0){
                let rand = Math.floor(Math.random() * 10);
                let lootTable = ["potion","gold","nothing","gold",
                                 "potion","nothing","nothing","nothing",
                                 "potion","gold","nothing","gold",
                                 "potion"];

                if(lootTable[rand] === "potion"){
                  player.potionCount++;
                  input.value = "";
                  output.value = "You have killed the " + enemy.name +
                  "\nThe " + enemy.name + " dropped a potion!" +
                  "\nYou now have " + player.potionCount + " potions" +
                  "\nWould you like to keep fighting?" +
                  "\n1: yes" +
                  "\n2: no";

                  inputSubmit.onclick = function keepFighting(){

                    let input = document.getElementById("inputTextArea");

                    let valid = {
                      "yes": "yes",
                      "Yes": "yes",
                      "no": "yes",
                      "No": "yes"
                    }

                    if(input.value in valid){
                      switch(input.value){
                        case "yes":
                        case "Yes":
                          input.value = "";
                          combat();
                        break;
                        case "no":
                        case "No":
                          input.value = "";
                          town();
                        break;
                      }
                    } else {
                      output.value = "Invalid input";
                      choose();
                    }
                  }
                } else if(lootTable[rand] === "gold"){
                    let gold = (Math.floor(Math.random() * 10) + 1) * 5;
                    player.gold += gold;
                    output.value = "You have killed the " + enemy.name +
                    "\nThe " + enemy.name + " dropped " + gold + " gold coins!" +
                    "\nYou now have " + player.gold + " gold coins" +
                    "\nWould you like to keep fighting?" +
                    "\n1: yes" +
                    "\n2: no";

                    inputSubmit.onclick = function keepFighting(){

                      let input = document.getElementById("inputTextArea");

                      let valid = {
                        "yes": "yes",
                        "Yes": "yes",
                        "no": "yes",
                        "No": "yes"
                      }

                      if(input.value in valid){
                        switch(input.value){
                          case "yes":
                          case "Yes":
                            input.value = "";
                            combat();
                          break;
                          case "no":
                          case "No":
                            input.value = "";
                            town();
                          break;
                        }
                      } else {
                        output.value = "Invalid input";
                        choose();
                      }
                    }
                } else {
                  let input = document.getElementById("inputTextArea");
                  input.value = "";
                  output.value = "You have killed the " + enemy.name +
                  "\nWould you like to keep fighting?" +
                  "\n1: yes" +
                  "\n2: no";

                  inputSubmit.onclick = function keepFighting(){

                    let input = document.getElementById("inputTextArea");

                    let valid = {
                      "yes": "yes",
                      "Yes": "yes",
                      "no": "yes",
                      "No": "yes"
                    }

                    if(input.value in valid){
                      switch(input.value){
                        case "yes":
                        case "Yes":
                          input.value = "";
                          combat();
                        break;
                        case "no":
                        case "No":
                          input.value = "";
                          town();
                        break;
                      }
                    } else {
                      output.value = "Invalid input";
                      choose();
                    }
                  }
                }
              }
            break;
            case "heal":
            case "Heal":
              input.value = "";
              player.potionCount--;
              player.health += player.potHealAmount;
              choices();
            break;
            case "run":
            case "Run":
              input.value = "";
              town();
            break;
          }
        }


      }
    }
  }


  leaveTown();
}
