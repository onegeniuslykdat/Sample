 let names = document.getElementById("listNames")
    let msg = document.getElementById("Welcome")
    
    names.addEventListener('change', () => {
      if(names.value == "0") {
         msg.innerText = "Welcome !";
      }
      else {
   msg.innerText = "Welcome, " + names.selectedOptions[0].innerText + " !";
      }
})
