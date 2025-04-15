const amount = document.querySelector("#amount");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  let hasCharactersRegex = /\D+/g;

  amount.value = amount.value.replace(hasCharactersRegex, "");
});
