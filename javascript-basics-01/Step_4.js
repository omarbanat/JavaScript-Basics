// const name = prompt("What is your name?");
// const surName = prompt("What is your surname?");
// const city = prompt("What is your city?");

// // const response = prompt("What is your name, surname, city separated by comma?");
// // const [name, surName, city] = response.split(',');


// alert("Nom: "  + name + "\nPrenom:" +  surName + "\nVille: " + city);

console.log('first')

const button = document.getElementById("validate");

button.addEventListener("click", function (event) {
event.preventDefault();
const name = document.getElementById("name").value;
const surName = document.getElementById("surname").value;
const city = document.getElementById("city").value;

alert("Nom: "  + name + "\nPrenom:" +  surName + "\nVille: " + city); 
});
