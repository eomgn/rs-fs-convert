// cotacoes de moeda do dia
const USD = 5.86;
const EUR = 6.64;
const GBP = 7.71;

// obtendo os elementos do formulario
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  let hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// capturando o evento de submit (enviar) do formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
});

// função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  //  console.log(amount, price, symbol);

  try {
    // aplica a classe que exibe o footer para mostra o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // remove a classe do footer removendo ele da tela
    footer.classList.remove("show-result");

    console.log(error);
    alert("Não foi possível converter. Tente novamente mais tarde.");
  }
}
