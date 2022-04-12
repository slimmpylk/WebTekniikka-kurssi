document.getElementById("submit").onclick = function () {
  let name = document.getElementById("name").value; 

  if ( name.length > 0) {
        // näytä success-alert
        document.getElementById("formSuccess").style.display = 
        "block";
        document.getElementById("formError").style.display = 
        "none";
  } else {

    document.getElementById("formError").style.display = 
    "block";
    document.getElementById("formSuccess").style.display = 
        "none";

  }
  // peruuta formin lähetys
  return false; 
}