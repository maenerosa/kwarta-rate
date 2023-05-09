export default async function liveCurrencyData(rates) {
  const conversion_rate_url = `https://v6.exchangerate-api.com/v6/18abbd3d5368ea846b4d66a0/latest/USD`;

  const response = await fetch(conversion_rate_url);
  const currencyData = await response.json();

  return currencyData;
}

function init(currencyData) {
  const container = document.getElementById("chart-container");
  const h1 = document.createElement("h1");
  h1.textContent = `Rate of USD is now ${currencyData.conversion_rates.USD}`;

  container.append(h1);
  console.log(currencyData);
}
