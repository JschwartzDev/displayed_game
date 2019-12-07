function characterSelection(){
    let output = document.getElementById("outputTextArea");
    output.innerHTML = "\n\n\n\n\nAvailable classes:" +
    "\n1: Warrior\n2: Rogue\n3: Paladin \n4: Shaman \n5: Mage \n6: Hunter" +
    "\nType the corresponding class-name" + "\nto choose that class" +
    "\nEx: Warrior or warrior";

    let inputSubmit = document.getElementById("inputSubmit");

    inputSubmit.onclick = function choose(){
      let input = document.getElementById("inputTextArea");
      let valid = {
        "Warrior":'yes',
        "warrior":'yes',
        'Rogue':'yes',
        'rogue':'yes',
        'Paladin':'yes',
        'paladin':'yes',
        "shaman":"yes",
        "Shaman":"yes",
        "hunter":"yes",
        "Hunter":"yes",
        "mage":"yes",
        "Mage":"yes"
      }

      if(input.value in valid){
        switch(input.value){
          case "Warrior":
          case "warrior":
            input.value = "";
            player = new warriorCreator();
            town();
          break;
          case "Paladin":
          case "paladin":
            input.value = "";
            player = new paladinCreator();
            town();
          break;
          case "Rogue":
          case "rogue":
            input.value = "";
            player = new rogueCreator();
            town();
          break;
          case "hunter":
          case "Hunter":
            input.value = "";
            player = new hunterCreator();
            town();
          break;
          case "mage":
          case "Mage":
            input.value = "";
            player = new mageCreator();
            town();
          break;
          case "shaman":
          case "Shaman":
            input.value = "";
            player = new shamanCreator();
            town();
          break;
        }
      } else {
        choose();
      }
    }

}
