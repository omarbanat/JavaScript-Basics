function multiplyByTwo(value) {
  return value * 2;
}

function addFive(value) {
  return value + 5;
}

function multiplyByFifty(value) {
    return value * 50; // 4250
}

function subtractYear(value, year) {
  return value - year; // 2250
}

function add1766(value) {
  return value + 1766;
}

function displayResult(e) {
  e.preventDefault();
  const shoeSizeValue = document.getElementById('shoe_size').value;
const yearValue = document.getElementById('year').value;

// const shoeSize = parseInt(shoeSizeValue);
// const shoeSize = Number(shoeSizeValue);
const shoeSize = +shoeSizeValue;
const year = +yearValue;

  const result1 = multiplyByTwo(shoeSize);
  const result2 = addFive(result1);
  const result3 = multiplyByFifty(result2);
  const result4 = subtractYear(result3, year);
  const result5 = add1766(result4);
  alert(result5);
}