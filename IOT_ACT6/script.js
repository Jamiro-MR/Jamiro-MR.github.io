// Instancia de la clase Particle
var particle = new Particle(); // Crea una nueva instancia de Particle
var token; // Variable para almacenar el token de acceso
var result = 0; // Variable para almacenar el resultado
var resultLabel = document.getElementById("result"); // Referencia al elemento HTML que muestra el resultado

// Iniciar sesión en el cloud de Particle
particle.login({username: 'bgutierrez14@ucol.mx', password: 'lucas_10'}).then(
  function(data) {
    token = data.body.access_token; // Asigna el token de acceso recibido a la variable token
  }, 
  function (err) {
    console.log('No se pudo iniciar sesión.', err); // Manejo de errores si no se puede iniciar sesión
  }
);

// Enviar datos periódicamente al cloud de Particle y actualizar el resultado
setInterval(function() {
  var slider = document.getElementById('Ktms'); // Referencia al control deslizante (slider)
  
  slider.oninput = function() { // Evento que se activa cuando el valor del slider cambia
    var output = document.getElementById('Kvaluetms'); // Referencia al elemento que muestra el valor del slider
    output.innerHTML = this.value; // Actualiza el valor mostrado en el elemento

    var Salida = this.value; // Valor actual del slider
    
    // Llamada a la función en el dispositivo Particle
    particle.callFunction({
      deviceId: '340017000947313037363132', // ID del dispositivo
      name: 'TMS_2', // Nombre de la función a llamar en el dispositivo
      argument: Salida, // Argumento pasado a la función
      auth: token // Token de autenticación
    });

    // Obtener variable del dispositivo Particle
    particle.getVariable({
      deviceId: '340017000947313037363132', // ID del dispositivo
      name: 'result', // Nombre de la variable a obtener
      auth: token // Token de autenticación
    }).then(function(data) {
        console.log('Variable del dispositivo obtenida exitosamente:', data); // Mensaje de éxito
        result = data.body.result; // Asigna el resultado obtenido a la variable result
        console.log(result); // Muestra el resultado en la consola
        resultLabel.innerText = (new Intl.NumberFormat('en-IN', { maximumFractionDigits: 3 })).format(result); // Formatea el resultado y lo muestra en el HTML
    }, function(err) {
        console.log('Ocurrió un error al obtener los atributos:', err); // Manejo de errores al obtener la variable
    });
  }

  slider.oninput(); // Llama a la función cada vez que cambia el valor del slider
}, 1000); // Espera 1 segundo antes de volver a ejecutar la función

// Nuevas funciones para los botones de menos y más

// Función para actualizar la visualización del valor del slider
function outputUpdate(val) {
    document.getElementById('Kvaluetms').innerText = val; // Actualiza el texto que muestra el valor del slider
}

// Función para cambiar el valor del slider
function changeValue(amount) {
    const slider = document.getElementById('Ktms'); // Referencia al control deslizante (slider)
    let currentValue = parseInt(slider.value, 10); // Valor actual del slider
    const minValue = parseInt(slider.min, 10); // Valor mínimo permitido
    const maxValue = parseInt(slider.max, 10); // Valor máximo permitido

    currentValue += amount; // Ajusta el valor del slider según la cantidad

    if (currentValue < minValue) currentValue = minValue; // Limita el valor mínimo
    if (currentValue > maxValue) currentValue = maxValue; // Limita el valor máximo

    slider.value = currentValue; // Actualiza el valor del slider
    outputUpdate(currentValue); // Actualiza la visualización del valor del slider
}

// Inicializa la visualización del slider
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('Ktms'); // Referencia al control deslizante (slider)
    outputUpdate(slider.value); // Muestra el valor inicial del slider
});