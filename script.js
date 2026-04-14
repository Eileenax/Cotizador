console.log("Hola mundo"); //esto se muestra en la consola del navegador
//definicion de selectores
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");
const coinInfo = document.querySelector("#coin-info");

//avisa que una linea o mas van a ser asincronas (viene un await) // await espera hasta que se ejecute // async es como un warning
form.addEventListener("submit", async (event) => {
  event.preventDefault(); //evita que la pagina se recargue al enviar el formulario
  console.log("POR FIN No se recargó y estoy viendo esto en la consola"); //esto se ejecuta al enviar el formulario, pero no se recarga la pagina, por lo que se puede ver el mensaje en la consola
  
  const coinSelected = [...coin.children].find((element) => element.selected).value;
  const cryptoSelected = [...crypto.children].find((element) => element.selected).value;
  const amountValue = amount.value;
   console.log(coinSelected, cryptoSelected,amountValue);
  try {
  //se intenta ejecutar el codigo //fetch es el enlace o el puente para consultar a la api
coinInfo.innerHTML = `<div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`; //muestra un mensaje de carga mientras se espera la respuesta de la api

 const response = await( await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json();
  console.log(response);
  
  const price = response.DISPLAY[cryptoSelected][coinSelected].PRICE;
  const hightprice = response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR;
  const lowprice = response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR;
  const lastChange = response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR;
 console.log(price, hightprice, lowprice, lastChange);

 if (amountValue !== '') {
    const result= Number(amountValue) / response.RAW[cryptoSelected][coinSelected].PRICE; //raw es el precio sin formato, es decir, el precio en numero, no en string con simbolos y comas, si se usa display, el precio viene con simbolos y comas, por lo que no se puede hacer operaciones matematicas con el, por eso se usa raw
    coinInfo.innerHTML =`
         <p class="info"> El precio es: <span class="price">${price}</span></p>
                <p class="info"> El precio más alto es: <span class="price">${hightprice}</span></p>
                <p class="info"> El precio más bajo es: <span class="price">${lowprice}</span></p>
                <p class="info"> Variación 24 horas: <span class="price">${lastChange}%</span></p>
                <p class="info"> Puedes comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected}</span></p>
                `;
} else{
    coinInfo.innerHTML =`
         <p class="info"> El precio es: <span class="price">${price}</span></p>
                <p class="info"> El precio más alto es: <span class="price">${hightprice}</span></p>
                <p class="info"> El precio más bajo es: <span class="price">${lowprice}</span></p>
                <p class="info"> Variación 24 horas: <span class="price">${lastChange}%</span></p>
                `;
}
    
 } catch (error){
    console.log('error')
 }

});
//con . accedemos a algun atributo del objeto
