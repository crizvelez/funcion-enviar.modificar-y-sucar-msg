const mensajesEl = document.getElementById('mensajes');
const enviarMensajeForm = document.getElementById('enviar-mensaje');

async function obtenerConversacion(usuarioLoguedo, idContacto) {
 try {
   const url = `http://localhost:3000/messages`
   const mensajesEnviados = await axios.get(`${url}?sendBy=${usuarioLoguedo}&recipientUser=${idContacto}`)
   const mensajesRecibidos = await axios.get(`${url}?sendBy=${idContacto}&recipientUser=${usuarioLoguedo}`)
   return [...mensajesEnviados.data, ...mensajesRecibidos.data];
 } catch (error) {
   console.error(error);
   return [];
 }
}


function obtenerFechaFormateada() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtener el día y añadir un cero si es necesario para que tenga dos dígitos
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 porque los meses van de 0 a 11) y añadir un cero si es necesario
  const año = fechaActual.getFullYear().toString(); // Obtener el año

  return `${dia}-${mes}-${año}`;
}

function obtenerHoraFormateada() {
  const fechaActual = new Date();
  const horas = fechaActual.getHours().toString().padStart(2, '0'); // Obtener las horas y añadir un cero si es necesario para que tenga dos dígitos
  const minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Obtener los minutos y añadir un cero si es necesario
  const segundos = fechaActual.getSeconds().toString().padStart(2, '0'); // Obtener los segundos y añadir un cero si es necesario

  const horaFormateada = `${horas}:${minutos}`;
  return horaFormateada;
}

// Función para enviar un mensaje
async function enviarMensaje(mensaje) {
  //aqui tengo que validar si ya existe un mensasje donde el sender id o e resive id sean igual al id del ususario logeado
  //si ya existe el mensaje lo mandamos a la propiedad chat con un push y si no creamos un nuevo mensaje total

  if (mensaje.trim() !== "") {
    // const nuevomensaje = {
    //   "senderUser": 1,
    //   "recipientUser": 2,
    //   "chat": [
    //     {
    //       "sendBy": 1,
    //       "date": obtenerFechaFormateada(),
    //       "hour": obtenerHoraFormateada(),
    //       "message": mensaje,
    //       "flag": true
    //     }
    //   ]
    // }

    const nuevomensaje = {
      "sendBy": 1,
      "recipientUser": 2,
      "date": obtenerFechaFormateada(),
      "hour": obtenerHoraFormateada(),
      "message": mensaje,
      "flag": true
    }
    const response = await axios.post("http://localhost:3000/messages", nuevomensaje)
    // Se crea un nuevo elemento para el mensaje
    const mensajeEl = document.createElement('div');
    mensajeEl.classList.add('mensaje');
    mensajeEl.innerHTML = `
    <p>${mensaje}</p>
    <div class="acciones">
      <button name=${response.data.id} class="editar">Editar</button>
      <button name=${response.data.id} class="eliminar">Eliminar</button>
    </div>
  `;

    // Se agrega el nuevo mensaje al contenedor
    mensajesEl.appendChild(mensajeEl);

    //funcionalidad delboton de editar
    const editarBtn = mensajeEl.querySelector('.editar');
    editarBtn.addEventListener('click', () => {

      //input para que el usuario edite el mensaje
      const nuevoMensaje = prompt('Escribe el nuevo mensaje:', mensajeEl.querySelector('p').textContent);
      if (nuevoMensaje) {
        editarMensaje(response.data.id, mensajeEl, nuevoMensaje);
      }
    });

    //funcion del boton de eliminar y desplegable
    const eliminarBtn = mensajeEl.querySelector('.eliminar');
    eliminarBtn.addEventListener('click', async () => {
      if (confirm('¿Estás seguro de eliminar este mensaje?')) {
        const id = eliminarBtn.getAttribute('name');
        await eliminarMensaje(id,mensajeEl);
      }
    });
  }


}

// Función para eliminar un mensaje
async function eliminarMensaje(idMensaje, mensajeEl) {
  
  await axios.delete("http://localhost:3000/messages/" + idMensaje)
  // Se elimina el elemento del DOM
  mensajeEl.parentNode.removeChild(mensajeEl);
}

// Función para editar un mensaje
async function editarMensaje(idmensaje, mensajeEl, nuevoMensaje) {
  const response = await axios.get("http://localhost:3000/messages/" + idmensaje)
  console.log(response.data)
  const mensaje = response.data
  mensaje.message = nuevoMensaje
  // const chat = mensaje.chat[posicionindex]
  // console.log(chat)
  // chat.message = nuevoMensaje
  await axios.put("http://localhost:3000/messages/" + idmensaje, mensaje)
  // Se actualiza el mensajes en el DOM
  const mensajeTextoEl = mensajeEl.querySelector('p');
  mensajeTextoEl.textContent = nuevoMensaje;
}

//editarMensaje("0649", 0, "hola ejemplo 2")
// Se agrega un evento 'submit' al formulario para enviar el mensaje
enviarMensajeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const mensaje = e.target.mensaje.value;
  console.log(mensaje)

  await enviarMensaje(mensaje);
  // e.target.mensaje.value = '';
  enviarMensajeForm.reset();
});

function traermensaje(idcontacto) {
  //aqui debo consultar el axios.get donde los mensajes tenga sender o resive el id de el contacto
  //esa consulta me trae un objeto mensaje completo aqui debo recorrer la propiedad.chat de ese objeto 
  //cuando este dentro del forich del chat a cada bloque de html le tengo que asignar el valor del indice del forich para cuando le de click sea para eliminar o editar yo tenga la referencia del mensaje 
}

// Aquí se implementaría la lógica para cargar los mensajes existentes
// ...

// Ejemplo de cómo cargar mensajes desde un servidor usando JSON
//const urlMensajes = 'https://ejemplo.com/mensajes';

/*fetch(urlMensajes)
  .then((response) => response.json())
  .then((mensajes) => {
    mensajes.forEach((mensaje) => {
      enviarMensaje(mensaje.contenido);
    });
  });
*/



const inputBusqueda = document.querySelector('.busqueda-mensajes input');
const btnBuscar = document.querySelector('.busqueda-mensajes button');

//const urlMensajes = 'http://localhost:3000/messages/'; // URL del servidor JSON

btnBuscar.addEventListener('click', () => {

  const terminoBusqueda = inputBusqueda.value.toLowerCase();
  
  obtenerConversacion(1,2)
    .then((response) => {
      const mensajes = response.data;
      console.log(mensajes);
      // const mensajesFiltrados = mensajes.filter((mensaje) => {
      //   const titulo = mensaje.message.toLowerCase();
      //   const contenido = mensaje.contenido.toLowerCase(); // Buscar también en el contenido
      //   return titulo.includes(terminoBusqueda) || contenido.includes(terminoBusqueda);
      // });

      const busqueda = mensajes.filter(item=> item.message.toLowerCase().includes(terminoBusqueda))

      // Mostrar los mensajes filtrados
      const listaMensajes = document.querySelector('#lista-mensajes');
      listaMensajes.innerHTML = '';

      busqueda.forEach((mensaje) => {
        const li = document.createElement('li');
        li.textContent = mensaje.message;
        listaMensajes.appendChild(li);
      });
    });
});

inputBusqueda.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    btnBuscar.click();
  }
});




async function buscarMensajes() {
  const searchTerm = document.getElementById('searchInput').value;

  try {
    const response = await fetch(`http://localhost:3000/messages?q=${searchTerm}`);
    const data = await response.json();

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Limpiamos la lista antes de mostrar los resultados

    data.forEach((mensaje) => {
      const listItem = document.createElement('li');
      listItem.textContent = mensaje.texto; // Asume que el campo se llama "texto"
      resultsList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error al buscar mensajes:', error);
  }
}