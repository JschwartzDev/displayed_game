function combat(){
  combatScene();

  let leftOutPut = document.getElementById("leftOutPut");
  let rightOutput = document.getElementById("rightOutput");


  let rand = Math.floor(Math.random() * 10);
  let enemy = enemyList[rand];
  let exp = 100 + ((Math.floor(Math.random()*10) + 1) * player.level);
  enemy.health = player.maxHealth/2;

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
        output.value = "\n\n\n\n\n\n\n\n\nPlayer health: " + player.health +
        "\nEnemy health: " + enemy.health +
        "\nType 'attack', 'heal' or 'run'" +
        "\n1: attack" +
        "\n2: potion + " + player.potionCount +
        "\n3: run";

        inputSubmit.onclick = function choose(){
          let regex = /attack|potion|run/i;
          let result = regex.test(input.value);

          if(result){
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
        inputSubmit.onclick = function(){
          town();
        }
      } else if(enemy.health <= 0){
        player.exp += exp;
        console.log(player.exp);
        console.log(player.level);
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
    player.maxHealth *= 1.2;
    player.health = player.maxHealth;
    levelUpScene();
    player.level++;
    leftOutPut.value = "------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n--------You are now level " + player.level + "!--------"+
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------" +
    "\n------------------------------------";

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
}
