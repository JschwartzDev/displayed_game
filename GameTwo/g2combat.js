function combat(){
  let rand = Math.floor(Math.random() * 10);
  let enemy = enemyList[rand];

  function leaveTown(){
    let output = document.getElementById("outputTextArea");
    output.value = "\n\n\n\n\n\n\n\n\n\n\n\n*Wandering through the environment*" +
    "\nLook out! A " + enemy.name + " has appeared!" +
    "\nPress enter to continue";

    let inputSubmit = document.getElementById("inputSubmit");

    inputSubmit.onclick = function choices(){

      if(enemy.health >= 0 && player.health >= 0){
        output.value = "\n\n\n\n\n\n\n\n\nPlayer health: " + player.health +
        "\nEnemy health: " + enemy.health +
        "\nType 'attack', 'heal' or 'run'" +
        "\n1: attack" +
        "\n2: potion + " + player.potionCount +
        "\n3: run";

        inputSubmit.onclick = function choose(){

          let input = document.getElementById("inputTextArea");

          let valid = {
            "attack":"yes",
            "Attack":"yes",
            "potion":"yes",
            "Potion":"yes",
            "run":"yes",
            "Run":"yes"
          }

          if(input.value in valid){
            switch(input.value){
              case "attack":
              case "Attack":
                let playerDmg = player.combat();
                let enemyDmg = enemy.attack - player.defense;
                if(enemyDmg < 0){
                  enemyDmg = 0;
                }

                player.health -= enemyDmg;
                enemy.health -= playerDmg;
                choices();
                break;
              case "potion":
              case "Potion":
                if(player.potionCount >= 1){
                  let input = document.getElementById("inputTextArea");
                  input.value = "";
                  if(player.health + player.potHealAmount > player.maxHealth){
                    player.health = player.maxHealth;
                    player.potionCount--;
                    choices();
                  } else {
                    player.health += player.potHealAmount;
                    player.potionCount--;
                    choices();
                  }
                } 
                break;
              case "run":
              case "Run":
                let input = document.getElementById("inputTextArea");
                input.value = "";
                town();
              break;
            }
          }

        }//end of choose()


      } else if(player.health <= 0){
        let output = document.getElementById("outputTextArea");
        output.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nYou run away, mortally wounded" +
        "\nPress enter to continue";

        let inputSubmit = document.getElementById("inputSubmit");
        inputSubmit.onclick = function(){
          town();
        }
      } else {
        loot();
        combat();
      }//end of enemy health check if
    }//end of choices()
  } //end of leavetown()


  leaveTown();
}