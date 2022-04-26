fetch('https://yesno.wtf/api')

  .then(response => response.json())

  .then( 
      data => {document.getElementById('printHere').innerHTML = 
      data.answer
      document.getElementById('printHere').innerHTML +=
      '<img src="' + data.image + '"/>' ;
  }
);