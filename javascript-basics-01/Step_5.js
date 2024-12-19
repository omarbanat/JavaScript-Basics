const button = document.getElementById("validate");

button.addEventListener("click", function (event) {
event.preventDefault();
const number1 = document.getElementById("first_number").value;
const number2 = document.getElementById("second_number").value;
alert("Le produit est : "  +number1 * number2 ); 
});
