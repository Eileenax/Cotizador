//definicion de selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");

//avisa que una linea o mas van a ser sincronas (viene un await) // await espera hasta que se ejecute // async es como un warning
form.addEventListener("submit", async (event) => {
  event.preventDefault(); //evita que la pagina se recargue al enviar el formulario
  console.log("POR FIN No se recargó y estoy viendo esto en la consola"); //esto se ejecuta al enviar el formulario, pero no se recarga la pagina, por lo que se puede ver el mensaje en la consola
});

const coinSelected = [...coin.children].find((element) => element.selected);
const cryptoSelected = [...crypto.children].find((element) => element.selected);
const amountValue = amount.value;
// console.log(coinSelected, cryptoSelected,amountValue);
try {
  //se intenta ejecutar el codigo //fetch es el enlace o el puente para consultar a la api
  const response = await (
    await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`,
    )
  ).json();
  console.log(response.DISPLAY[cryptoSelected][coinSelected].PRICE);
  console.log(response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR);
  console.log(response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR);
  console.log(response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR);
} catch (error) {
  console.log(error);
}

//con . accedemos a algun atributo del objeto
