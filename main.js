import "./style.css";

const currencyElement = document.getElementById("currency-one");
const currencyElementTwo = document.getElementById("currency-two");
const currencyAmountOne = document.getElementById("amount-one");
const currencyAmountTwo = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

function calculate() {
  const currencyOne = currencyElement.value;
  const currencyTwo = currencyElementTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[currencyTwo];
      rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      currencyAmountTwo.value = (currencyAmountOne.value * rate).toFixed(2);
    });
}

currencyElement.addEventListener("change", calculate);
currencyElementTwo.addEventListener("change", calculate);
currencyAmountOne.addEventListener("input", calculate);
currencyAmountTwo.addEventListener("input", calculate);

calculate();
