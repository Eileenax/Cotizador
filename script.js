// definición de los selectores, aqui capturamos los elementos del DOM para interactuar con ellos
const form = document.querySelector("#coin-form");
const coin = document.querySelector("#coin");
const crypto = document.querySelector("#crypto");
const amount = document.querySelector("#amount");
const coinInfo = document.querySelector("#coin-info");

//el callback es 'async' porque dentro realizamos una petición a una API (operación que toma tiempo).//
//'event' es el objeto que contiene la información del suceso (el clic en el botón submit).//

form.addEventListener("submit", async (event) => {
  // evita el comportamiento por defecto de los formularios (recargar la página)
  event.preventDefault();

  // obtenemos los valores seleccionados. Usamos el operador propagacion [...] para convertir la lista de elementos en un Array y usar .find()
  const coinSelected = [...coin.children].find(
    (element) => element.selected,
  ).value;
  const cryptoSelected = [...crypto.children].find(
    (element) => element.selected,
  ).value;
  const amountValue = amount.value;

  try {
    // loader (spinner) mientras esperamos la respuesta de la red
    coinInfo.innerHTML = `<div class="lds-default"><div></div>...</div>`;

    /*
     * FETCH es la interfaz nativa de JS para hacer peticiones HTTP.
     * AWAIT detiene la ejecución de esta función hasta que la Promesa se resuelva.
     * hacemos dos awaits: uno para la petición y otro para convertir la respuesta a formato JSON.
     */
    const response = await (
      await fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`,
      )
    ).json();

    // acceso a datos mediante notación de corchetes [] porque las llaves del objeto son dinámicas (variables)
    const price = response.DISPLAY[cryptoSelected][coinSelected].PRICE;
    const hightprice =
      response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR;
    const lowprice = response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR;
    const lastChange =
      response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR;

    //lógica condicional: Si el usuario ingresó un monto, calculamos cuánto puede comprar
    if (amountValue !== "") {
      // usamos .RAW porque contiene el precio como NÚMERO puro (DISPLAY trae símbolos como $ o € que rompen la matemática)
      const result =
        Number(amountValue) / response.RAW[cryptoSelected][coinSelected].PRICE;

      // template literals (plantillas literales) para construir el HTML de forma limpia
      coinInfo.innerHTML = `
            <p class="info"> El precio es: <span class="price">${price}</span></p>
            <p class="info"> Variación 24 horas: <span class="price">${lastChange}%</span></p>
            <p class="info"> Puedes comprar: <span class="price">${result.toFixed(4)} ${cryptoSelected}</span></p>
        `;
    } else {
      // si no hay monto, solo mostramos la información básica de la cripto
      coinInfo.innerHTML = `
            <p class="info"> El precio es: <span class="price">${price}</span></p>
            <p class="info"> Variación 24 horas: <span class="price">${lastChange}%</span></p>
        `;
    }
  } catch (error) {
    // bloque catch: Si el fetch falla (sin internet, API caída), el error se captura aquí para no romper la app
    console.log("Error al consultar la API", error);
  }
});
