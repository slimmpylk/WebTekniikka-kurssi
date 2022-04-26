fetch('https://futuramaapi.herokuapp.com/api/quotes')

  .then(response => response.json())

  .then(data => {

      data.forEach(quote => {
        let li = document.createElement('li');
        
        li.innerHTML = quote.quote;
        
        ul.appendChilf(li);
      });
      document.getElementById('printHere').appendChild(ul);
  });