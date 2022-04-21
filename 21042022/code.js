//harj1
let h1 = document.querySelector("h1");

h1.classList.add("special");

h1.style.width = "80%"

//harj2
let p = document.querySelector("p");

p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);


function changeColor(){
    p.classList.toggle("textcolor");

}

function changeBg(){
    p.classList.toggle("textback");
}

//harj3

let sotu = document.getElementById("sotu");
sotu.addEventListener("input", checkValidity);

function checkValidity(){
    let text = sotu.value;

    if(text.lenght == 11) {
        sotu.classList.remove("invalid")
    } else{
        sotu.classList.add("invalid");
    }
}

document.querySelector("form").addEventListener("submit", calc);

/**
 * 
 * @param {Event} event 
 */
function calc(event){
    event.preventDefault();

    let formData = new FormData(event.currentTarget);

    let num1 = formData.get("num1");
    let num2 = formData.get("num2");

    let sum = +num1 + +num2;

    let res = document.getElementById("result");

    let arit = formData.get("arit");

    if(arit == "sum"){
        res.textContent = "Lukujen summa on" + Number(num1) + Number(num2);
    } else {
        res.textContent = "Lukujen erotus on" + Number(num1) - Number(num2);
    }

}