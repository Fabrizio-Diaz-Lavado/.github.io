// Seleccionamos el formulario completo, el botón y el nuevo párrafo para mensajes
const formulario = document.querySelector(".formulario");
const boton = document.getElementById("btn-registro");
const mensajeEstado = document.getElementById("mensaje-estado");

// Escuchamos el evento "submit" (envío) del formulario en lugar del click
formulario.addEventListener("submit", function (evento) {
  // Prevenimos el comportamiento por defecto (que es recargar y redirigir inmediatamente)
  evento.preventDefault();

  // Modificamos el párrafo del mensaje de éxito
  mensajeEstado.textContent = "¡Listo! Tu registro gratuito ha comenzado.";
  mensajeEstado.style.color = "#1DB954"; 
  
  // Modificamos el texto y la apariencia del botón para confirmar el click
  boton.textContent = "Registro iniciado";
  boton.style.backgroundColor = "#0F5F55"; // Usamos la variable --verde-oscuro
  boton.style.pointerEvents = "none"; // Desactivamos el botón para evitar doble envío

  // Usamos setTimeout para esperar 1.5 segundos (1500 ms) antes de redirigir
  setTimeout(function() {
    formulario.submit(); // Finalmente enviamos el formulario a confirmacion.html
  }, 1500);
});

/* =====================================================
   LÓGICA DEL CHAT SIMULADO
   ===================================================== */
// 1. Seleccionamos los elementos del chat
const formChat = document.getElementById("formulario-chat");
const inputChat = document.getElementById("entrada-chat");
const cajaMensajes = document.getElementById("caja-mensajes");

// Verificamos que el chat exista en la página actual antes de ejecutar
if (formChat) {
  formChat.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evitamos que la página se recargue

    const textoUsuario = inputChat.value.trim();
    if (textoUsuario === "") return; // No enviamos mensajes vacíos

    // 2. Mostrar el mensaje del usuario
    agregarMensaje(textoUsuario, "usuario");
    inputChat.value = ""; // Limpiamos el input

    // 3. Simular la respuesta del Bot con un pequeño retraso
    setTimeout(function () {
      // Arreglo de respuestas aleatorias para darle variedad
      const respuestasBot = [
        "¡Excelente punto! Recuerda que un caño goteando puede desperdiciar hasta 30 litros al día.",
        "Estamos trabajando para que la app te envíe alertas precisas de los cortes en tu distrito.",
        "¡Cada gota cuenta! Te sugiero revisar nuestra sección de Monitoreo en Vivo para más ideas.",
        "Entendido. Almacenar agua en recipientes con tapa ayuda a mantenerla limpia por más tiempo."
      ];
      
      // Selecciona una respuesta al azar
      const respuestaAleatoria = respuestasBot[Math.floor(Math.random() * respuestasBot.length)];
      
      agregarMensaje(respuestaAleatoria, "bot");
    }, 1200); // 1.2 segundos de espera simulando que "está escribiendo"
  });
}

// Función reutilizable para crear las burbujas de mensaje
function agregarMensaje(texto, remitente) {
  // Creamos el contenedor del mensaje <div>
  const divMensaje = document.createElement("div");
  // Le añadimos la clase 'mensaje' y la clase del remitente ('usuario' o 'bot')
  divMensaje.classList.add("mensaje", remitente);
  
  // Creamos el párrafo <p> y le insertamos el texto
  const parrafo = document.createElement("p");
  parrafo.textContent = texto;
  
  // Metemos el <p> dentro del <div>, y el <div> dentro de la caja de mensajes
  divMensaje.appendChild(parrafo);
  cajaMensajes.appendChild(divMensaje);
  
  // Magia de UI: Hacemos scroll automático hacia abajo para ver el mensaje nuevo
  cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
}