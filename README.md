🪙 Cotizador de Criptomonedas en Tiempo Real
¡Hola! Soy Eileen Valera y este es mi proyecto de Cotizador de Criptomonedas. Es una aplicación web sencilla pero potente que utiliza una API externa para dar precios actualizados al instante.

🚀 ¿Qué hace este proyecto?
Esta aplicación permite a los usuarios:

Seleccionar una moneda local (como USD, EUR, VES o ARS).

Elegir una criptomoneda popular (Bitcoin, Ethereum, etc.).

Calcular cantidades: Si ingresas un monto, la app te dice exactamente cuántas criptos puedes comprar con ese dinero.

Ver estadísticas: Muestra el precio actual, el más alto del día, el más bajo y la variación en las últimas 24 horas.

🛠️ Tecnologías utilizadas
Para este proyecto utilicé el "trío dinámico" del desarrollo web:

HTML5: Para la estructura y los formularios.

CSS3: Para el diseño, colores (con mis tonos favoritos) y que se vea bien en pantalla.

JavaScript (ES6+): Para toda la lógica, el manejo de eventos y la conexión con la API.

🔌 API Utilizada
Consumo los datos de la API de CryptoCompare, específicamente el endpoint de pricemultifull.

Fetch API: Utilizada para realizar peticiones asíncronas.

Async/Await: Para manejar la respuesta del servidor de forma ordenada.

📖 Aprendizajes clave
Durante este desarrollo aprendí y practiqué:

Manipulación del DOM: Cómo capturar datos de un formulario y mostrar resultados dinámicamente.

Template Literals: Para crear bloques de HTML desde JavaScript de forma limpia.

Manejo de Errores: Uso de bloques try...catch para evitar que la app falle si no hay internet.

Lógica de Programación: Diferencia entre datos RAW (para cálculos) y DISPLAY (para mostrar al usuario).

📥 Cómo usarlo
Clona este repositorio.

Abre el archivo index.html en tu navegador.

¡Empieza a cotizar tus criptos favoritas!

✨ Notas adicionales
Spinner de carga: Agregué un loader visual para que el usuario sepa que la app está trabajando mientras llega la respuesta de la API.

Validaciones: El código verifica si el usuario puso un monto o no para adaptar el mensaje final.
