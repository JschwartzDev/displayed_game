function characterSelection(){
    let output = document.getElementById("outputTextArea");
    output.innerHTML = "\n\n\n\n\n\n\n\nThere are currently 3 classes to choose from" +
    "\n1: Warrior\n2: Rogue\n3: Paladin" +
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
        'paladin':'yes'
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
        }
      } else {
        output.value = "Not a class";
        choose();
      }
    }

}
