function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mensajesEl = document.getElementById('mensajes');
var enviarMensajeForm = document.getElementById('enviar-mensaje');
function obtenerFechaFormateada() {
  var fechaActual = new Date();
  var dia = fechaActual.getDate().toString().padStart(2, '0'); // Obtener el día y añadir un cero si es necesario para que tenga dos dígitos
  var mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0'); // Obtener el mes (se suma 1 porque los meses van de 0 a 11) y añadir un cero si es necesario
  var año = fechaActual.getFullYear().toString(); // Obtener el año

  return "".concat(dia, "-").concat(mes, "-").concat(año);
}
function obtenerHoraFormateada() {
  var fechaActual = new Date();
  var horas = fechaActual.getHours().toString().padStart(2, '0'); // Obtener las horas y añadir un cero si es necesario para que tenga dos dígitos
  var minutos = fechaActual.getMinutes().toString().padStart(2, '0'); // Obtener los minutos y añadir un cero si es necesario
  var segundos = fechaActual.getSeconds().toString().padStart(2, '0'); // Obtener los segundos y añadir un cero si es necesario

  var horaFormateada = "".concat(horas, ":").concat(minutos);
  return horaFormateada;
}

// Función para enviar un mensaje
function enviarMensaje(mensaje) {
  //aqui tengo que validar si ya existe un mensasje donde el sender id o e resive id sean igual al id del ususario logeado
  //si ya existe el mensaje lo mandamos a la propiedad chat con un push y si no creamos un nuevo mensaje total
  var nuevomensaje = {
    "senderUser": 1,
    "recipientUser": 2,
    "chat": [{
      "sendBy": 1,
      "date": obtenerFechaFormateada(),
      "hour": obtenerHoraFormateada(),
      "message": mensaje,
      "flag": "True"
    }]
  };
  var response = axios.post("http://localhost:3000/messages", nuevomensaje);
  // Se crea un nuevo elemento para el mensaje
  var mensajeEl = document.createElement('div');
  mensajeEl.classList.add('mensaje');
  mensajeEl.innerHTML = "\n    <p>".concat(mensaje, "</p>\n    <div class=\"acciones\">\n      <button class=\"editar\">Editar</button>\n      <button class=\"eliminar\">Eliminar</button>\n    </div>\n  ");

  // Se agrega el nuevo mensaje al contenedor
  mensajesEl.appendChild(mensajeEl);

  //funcionalidad delboton de editar
  var editarBtn = mensajeEl.querySelector('.editar');
  editarBtn.addEventListener('click', function () {
    //input para que el usuario edite el mensaje
    var nuevoMensaje = prompt('Escribe el nuevo mensaje:', mensajeEl.querySelector('p').textContent);
    if (nuevoMensaje) {
      editarMensaje(mensajeEl, nuevoMensaje);
    }
  });

  //funcion del boton de eliminar y desplegable
  var eliminarBtn = mensajeEl.querySelector('.eliminar');
  eliminarBtn.addEventListener('click', function () {
    if (confirm('¿Estás seguro de eliminar este mensaje?')) {
      eliminarMensaje(mensajeEl);
    }
  });
}

// Función para eliminar un mensaje
function eliminarMensaje(mensajeEl) {
  // Se elimina el elemento del DOM
  mensajeEl.parentNode.removeChild(mensajeEl);
}

// Función para editar un mensaje
function editarMensaje(_x, _x2, _x3) {
  return _editarMensaje.apply(this, arguments);
}
function _editarMensaje() {
  _editarMensaje = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(idmensaje, posicionindex, nuevoMensaje) {
    var response, mensaje, chat, mensajeTextoEl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios.get("http://localhost:3000/messages/" + idmensaje);
        case 2:
          response = _context.sent;
          console.log(response.data);
          mensaje = response.data;
          chat = mensaje.chat[posicionindex];
          console.log(chat);
          chat.message = nuevoMensaje;
          _context.next = 10;
          return axios.put("http://localhost:3000/messages/" + idmensaje, mensaje);
        case 10:
          // Se actualiza el mensajes en el DOM
          mensajeTextoEl = mensajeEl.querySelector('p');
          mensajeTextoEl.textContent = nuevoMensaje;
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _editarMensaje.apply(this, arguments);
}
editarMensaje("0649", 0, "hola ejemplo 2");
// Se agrega un evento 'submit' al formulario para enviar el mensaje
enviarMensajeForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var mensaje = e.target.mensaje.value;
  e.target.mensaje.value = '';
  enviarMensaje(mensaje);
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

var inputBusqueda = document.querySelector('.busqueda-mensajes input');
var btnBuscar = document.querySelector('.busqueda-mensajes button');
var urlMensajes = 'http://localhost:3000/mensajes'; // URL del servidor JSON

btnBuscar.addEventListener('click', function () {
  var terminoBusqueda = inputBusqueda.value.toLowerCase();
  axios.get(urlMensajes).then(function (response) {
    var mensajes = response.data;
    var mensajesFiltrados = mensajes.filter(function (mensaje) {
      var titulo = mensaje.titulo.toLowerCase();
      var contenido = mensaje.contenido.toLowerCase(); // Buscar también en el contenido
      return titulo.includes(terminoBusqueda) || contenido.includes(terminoBusqueda);
    });

    // Mostrar los mensajes filtrados
    var listaMensajes = document.querySelector('#lista-mensajes');
    listaMensajes.innerHTML = '';
    mensajesFiltrados.forEach(function (mensaje) {
      var li = document.createElement('li');
      li.textContent = mensaje.titulo;
      listaMensajes.appendChild(li);
    });
  });
});
inputBusqueda.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    btnBuscar.click();
  }
});