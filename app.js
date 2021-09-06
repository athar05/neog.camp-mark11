const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkButton = document.getElementById("check-button");

const result = document.getElementById("result");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    result.innerText = "Your Birthday Is Lucky";
  } else {
    result.innerText = "Your Birthday Is Not Lucky";
  }
}

function checkIfBdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = addDOB(dob);

  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    result.innerText = "Please Enter A Valid Input";
  }
}

function addDOB(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;

  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkButton.addEventListener("click", checkIfBdayIsLucky);
