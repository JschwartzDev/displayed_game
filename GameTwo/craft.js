function craft(){
  let input = document.getElementById("inputTextArea");
  input.value = "";
  let mainOutPut = document.getElementById("outputTextArea");
  let sideOutPut = document.getElementById("rightOutput");

  let inputSubmit = document.getElementById("inputSubmit");

  mainOutPut.value = "\n\n\n\n\n\n\n\n\n\n\n\n\nYou're now at the smith" +
  "\nPress enter to continue.";



  inputSubmit.onclick = function choices(){

    mainOutPut.value = "\n\n\n\n\n\n\n\n\n\n\nCrafting options - " +
    "\n1: Smelt" +
    "\n2: Smith" +
    "\n3: Leave";



    inputSubmit.onclick = function choose(){
      let input = document.getElementById("inputTextArea");

      let valid = {
        "smelt":"yes",
        "Smelt":"yes",
        "Smith":"yes",
        "smith":"yes",
        "leave":"yes",
        "Leave":"yes"
      }

      if(input.value in valid){
        switch(input.value){
          case"smelt":
          case "Smelt":
            smelt();
          break;
          case"Smith":
          case "smith":
            smith();
          break;
          case"leave":
          case "Leave":
            town();
          break;
        }
      }
    }
  }


}
