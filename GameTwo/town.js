
function town(){
  townScene();
  let output = document.getElementById("outputTextArea");
  let input = document.getElementById("inputTextArea");
  input.value = "";

  output.value = "\n\n\n\n\n\n\n\n\n\nWelcome to the world, " + player.name +
  "\nAdventure Options - " +
  "\n1: Combat!" +
  "\n2: Shop" +
  "\n3: Craft";

  let inputSubmit = document.getElementById("inputSubmit");

  inputSubmit.onclick = function choose(){

    let input = document.getElementById("inputTextArea");

    let valid = {
      "combat": "yes",
      "Combat": "yes",
      "shop": "yes",
      "Shop": "yes",
      "Craft": "yes",
      "craft": "yes"
    }

    if(input.value in valid){
      switch(input.value){
        case "combat":
        case "Combat":
          input.value = "";
          combat();
        break;
        case "shop":
        case "Shop":
          input.value = "";
          shop();
        break;
        case "craft":
        case "Craft":
          input.value = "";
          craft();
        break;
      }
    } else {
      output.value = "Invalid input";
      town();
    }
  }

}
