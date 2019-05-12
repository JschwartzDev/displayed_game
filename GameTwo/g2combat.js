function combat(){
  combatScene();

  let leftOutPut = document.getElementById("leftOutPut");
  let rightOutput = document.getElementById("rightOutput");


  let rand = Math.floor(Math.random() * 10);
  let enemy = enemyList[rand];
  let exp = 100 + ((Math.floor(Math.random()*10) + 1) * player.level);
  enemy.health = parseInt(player.maxHealth/2);

  function leaveTown(){
    let inputSubmit = document.getElementById("inputSubmit");
    let input = document.getElementById("inputTextArea");
    let output = document.getElementById("outputTextArea");
    output.value = "\n\n\n\n\n\n\n\n\n\n\n\n*Wandering through the environment*" +
    "\nLook out! A " + enemy.name + " has appeared!" +
    "\nPress enter to continue";



    inputSubmit.onclick = function choices(){
      updateHealthBar();
      if(enemy.health >= 0 && player.health >= 0){
        output.value = "\n\n\n\n\n\n\n\nPlayer health: " + player.health +
        "\nEnemy health: " + enemy.health +
        "\nType 'attack', 'health', 'mana' or 'run'" +
        "\n1: attack" +
        "\n2: health pot + " + player.potionCount +
        "\n2: mana pot + " + player.manaPotionCount +
        "\n3: run";

        inputSubmit.onclick = function choose(){
          let regex = /attack|health|mana|run/i;
          let result = regex.test(input.value);

          if(result){
            switch(input.value){
              case "attack":
              case "Attack":

              if(player.name === "Mage" || player.name === "Shaman"){
                if(player.mana <= 0){
                  rightOutput.value = "You dont have any  mana!";
                } else {
                  player.mana -= 20;
                  let playerDmg = player.combat();
                  let enemyDmg = enemy.attack - player.defense;
                  if(enemyDmg < 0){
                    enemyDmg = 0;
                  }
                  player.health -= enemyDmg;
                  enemy.health -= playerDmg;
                  choices();
                }
              } else {
                let playerDmg = player.combat();
                let enemyDmg = enemy.attack - player.defense;
                if(enemyDmg < 0){
                  enemyDmg = 0;
                }

                player.health -= enemyDmg;
                enemy.health -= playerDmg;
                choices();
              }


                break;
              case "health":
              case "Health":
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
                case "mana":
                case "Mana":
                  if(player.manaPotionCount >= 1){
                    let input = document.getElementById("inputTextArea");
                    input.value = "";
                    if(player.mana + player.manaPotionRecoverAmount > player.maxMana){
                      player.mana = player.maxMana;
                      player.manaPotionCount--;
                      choices();
                    } else {
                      player.mana += player.manaPotionRecoverAmount;
                      player.manaPotionCount--;
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
        inputSubmit.onclick = function(){
          town();
        }
      } else if(enemy.health <= 0){
        player.exp += exp;
        levelCheck();
        loot();
        combat();
      }//end of enemy health check if
    }//end of choices()
  } //end of leavetown()


  leaveTown();
}




function levelCheck(){
  let leftOutPut = document.getElementById("leftOutPut");
  let input = document.getElementById("inputTextArea");
  let body = document.getElementById("body");
  removeName();
  if(player.exp >= player.level * 1000){
    player.maxHealth = parseInt(player.maxHealth * 1.2);
    player.health = parseInt(player.maxHealth);
    levelUpScene();
    player.level++;
    leftOutPut.value = "-----------------------------" +
    "\n-----------------------------" +
    "\n-----------------------------" +
    "\n-----------------------------" +
    "\n-----------------------------" +
    "\n-----------------------------" +
    "\n----You are now level " + player.level + "!-----"+
    "\n-----------------------------" +
    "\n-----------------------------" +
    "\n-----------------------------";

  }
}


function removeName(){
  let leftOutPut = document.getElementById("leftOutPut");
  let rightOutput = document.getElementById("rightOutput");
  let outputTextArea = document.getElementById("outputTextArea");
  leftOutPut.style.animationName = "";
  rightOutput.style.animationName = "";
  outputTextArea.style.animationName = "";
  leftOutPut.classList.remove('bounceInDown');
  rightOutput.classList.remove('bounceInDown');
  outputTextArea.classList.remove('bounceInDown');
}



function updateHealthBar(){
    let frac = parseInt(((player.health/player.maxHealth) * 100)).toString() + "%";
    let healthBar = document.getElementById("healthSpan");
    healthBar.style.setProperty("--health-bar-height",frac);

    let manaFrac = parseInt((player.mana/player.maxMana) * 100).toString() + "%";
    let manaBar = document.getElementById("manaSpan");
    manaSpan.style.setProperty("--mana-bar-height", manaFrac);
}
