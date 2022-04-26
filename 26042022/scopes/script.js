let recipes = [
    {
    name: "tuna Pasta",
    cookingTime: 30,
    ingredients: [
        'tuna',
        'pasta'
    ]
},
{
    name: "macandcheese",
    cookingTime: 30,
    ingredients: [
        'cheese',
        'macaronis'
    ]
},
{
    name: "cesar salad",
    cookingTime: 30,
    ingredients: [
        'salad',
        'cesar dressing'
    ]
}
]

let element = document.getElementById("printHere");
let html = "<table>";
recipes.forEach(recipes => {
    html += "<tr>";
    html += "<td>" + recipes.name + "</td>";
    html += "<td>" + recipes.cookingTime + "</td>"
    html += "<td>" + recipes.ingredients + "</td>"
    html += "</tr>";

});
html += "</table>";
element.innerHTML = html;