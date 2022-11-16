var arrayAportaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var SaveTheChildren = new OPersonas(
  "Save the children",
  arrayAportaciones[0],
  0,
  0,
  "Personas",
  true,
  "infantil"
);
var Caritas = new OPersonas(
  "Caritas",
  arrayAportaciones[1],
  0,
  0,
  "Personas",
  false,
  "adolescencia"
);
var CruzRoja = new OPersonas(
  "Cruz Roja",
  arrayAportaciones[2],
  0,
  0,
  "Personas",
  false,
  "infantil"
);
var GreenPeace = new OAnimales(
  "GreenPeace",
  arrayAportaciones[3],
  0,
  0,
  "Animales",
  true,
  "nacional"
);
var MedicosSinFrontera = new OPersonas(
  "Medicos sin fronteras",
  arrayAportaciones[4],
  0,
  0,
  "Personas",
  false,
  "tercera edad"
);
var AccionContraElHambre = new OAnimales(
  "Accion contra el hambre",
  arrayAportaciones[5],
  0,
  0,
  "Animales",
  true,
  "provincial"
);
var AmnistiaInternacional = new OPersonas(
  "Amnistía Internacional",
  arrayAportaciones[6],
  0,
  0,
  "Personas",
  true,
  "adolescencia"
);
var AsociacionEspanolaContraElCancer = new OPersonas(
  "Asociacion Española contra el cáncer",
  arrayAportaciones[7],
  0,
  0,
  "Personas",
  false,
  "tercera edad"
);
var WWF = new OAnimales(
  "WWF",
  arrayAportaciones[8],
  0,
  0,
  "Animales",
  true,
  "internacional"
);
var Unicef = new OAnimales(
  "Unicef",
  arrayAportaciones[9],
  0,
  0,
  "Animales",
  false,
  "local"
);

var arrayOrganizaciones = [
  SaveTheChildren,
  Caritas,
  CruzRoja,
  GreenPeace,
  MedicosSinFrontera,
  AccionContraElHambre,
  AmnistiaInternacional,
  AsociacionEspanolaContraElCancer,
  WWF,
  Unicef,
];

//Esta funcion recoje el número que metemos y lo suma al total de la organizacion pulsada.
function totalDonacionOrganizacion(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex(
      (posicion) => posicion.getNombre() == organizacion
    )
  );
  let aportacion = document.getElementsByName("donacion")[indice].value;

  let total;
  total = Number(arrayOrganizaciones[indice].getTotal()) + Number(aportacion);
  //let redondeo= Math.floor(total*100)/100;
  // console.log(redondeo)
  arrayOrganizaciones[indice].setTotal(total);

  return total;
}
//Esta función rellena el array de aportaciones segun las veces que se le de click a una organizacion.

function NumAportacionesPorOrganizacion(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex(
      (posicion) => posicion.getNombre() == organizacion
    )
  );

  let aportacion = document.getElementsByName("donacion")[indice].value;

  if (aportacion > 0) {
    let indice = Number(
      arrayOrganizaciones.findIndex(
        (posicion) => posicion.getNombre() == organizacion
      )
    );
    arrayAportaciones[indice] = arrayAportaciones[indice] + 1;
    totalDonacionOrganizacion(organizacion);
    rellenarContenedorLateral(organizacion, aportacion);
    marcarOrganizacion(organizacion);
    calcularMedia(organizacion);
  }
}

function rellenarContenedorLateral(organizacion, aportacion) {
  var cajaLateral = document.getElementById("contenedorLateral");
  let parrafoDonacion = document.createElement("p");
  parrafoDonacion.style.backgroundColor = "pink";
  parrafoDonacion.textContent = organizacion + " --- " + aportacion;
  cajaLateral.appendChild(parrafoDonacion);
}

function marcarOrganizacion(organizacion) {
  var cajaLateral = document.getElementById("contenedorLateral");
  let parrafosL = cajaLateral.children;
  for (var i = 0; i < parrafosL.length; i++) {
    let pI = parrafosL[i].textContent;
    let contiene = pI.search(organizacion);
    if (contiene != -1) {
      parrafosL[i].classList.add("marcado");
    } else {
      parrafosL[i].classList.remove("marcado");
    }
  }
}

function fechaFinalizacion() {
  let fechaActual = new Date().toLocaleString();
  return fechaActual;
}
//calcula la media de cada organización teniendo en cuenta las veces que se le han hecho una aportación.
function calcularMedia(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex(
      (posicion) => posicion.getNombre() == organizacion
    )
  );
  let media =
    arrayOrganizaciones[indice].getTotal() / arrayAportaciones[indice];

  arrayOrganizaciones[indice].setMedia(media);

  return media;
}
/* Crea otro array copia del array de objetos para ordenar las organizaciones */
function InvertirOrderOrganizaciones() {
  let arrayOrganizacionesOrdenadas = arrayOrganizaciones.slice();
  arrayOrganizacionesOrdenadas.sort(function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    } else {
      return 0;
    }
  });
  arrayOrganizacionesOrdenadas.reverse();

  return arrayOrganizacionesOrdenadas;
}

/*Inicializa el array de aportaciones a 0 para poder volver a empezar de nuevo las donaciones y inicializa a cero la media y el total de los objetos */

function InicializarTodo() {
  for (var i = 0; i < arrayOrganizaciones.length; i++) {
    arrayAportaciones[i] = 0;
    arrayOrganizaciones[i].setMedia(0);
    arrayOrganizaciones[i].setTotal(0);
  }
}
//calcula el total donado de todas las organizaciones
function CantidadTotalDonaciones() {
  let total = 0;
  for (var i = 0; i < arrayOrganizaciones.length; i++) {
    let totalO = Number(arrayOrganizaciones[i].getTotal());
    total = totalO + total;
  }


  return total;
}
//calcula la media donada de todas las organizaciones
function CantidadMediaDonaciones() {
  let total = CantidadTotalDonaciones();
  let numeroOrganizaciones = 0;
  for (var i = 0; i < arrayOrganizaciones.length; i++) {
    if (arrayOrganizaciones[i].getTotal() != 0) {
      numeroOrganizaciones = numeroOrganizaciones + 1;
    }
  }
  let media = total / numeroOrganizaciones;
  return Number(media);
}
function CrearTexto() {
  let caja = document.getElementById("CajaDeTexto");
  let fecha = document.createElement("p");
  fecha.textContent = "Fecha de compra: " + fechaFinalizacion();
  caja.appendChild(fecha);

  for (var i = 0; i < arrayOrganizaciones.length; i++) {
    let total = InvertirOrderOrganizaciones()[i].getTotal();
   
    if (total != 0) {
      let total = InvertirOrderOrganizaciones()[i].getTotal();
      let redondeoT = Math.floor(total * 100) / 100;
      let media = InvertirOrderOrganizaciones()[i].getMedia();
      let redondeoM = Math.floor(media * 100) / 100;

      let parrafo = document.createElement("p");
      parrafo.textContent =
        InvertirOrderOrganizaciones()[i].getNombre() +
        " --- " +
        redondeoM.toLocaleString() +
        "€ --- " +
        redondeoT.toLocaleString() +
        "€";
      caja.appendChild(parrafo);
    }
  }
  let parrafoTotal = document.createElement("p");
  let parrafoMedia = document.createElement("p");

  parrafoTotal.textContent =
    "Donación final: " + CantidadTotalDonaciones().toLocaleString() + "€";
  parrafoMedia.textContent =
    "Donación media: " +
    CantidadMediaDonaciones().toLocaleString() +
    "€/aportación";

  caja.appendChild(parrafoTotal);
  caja.appendChild(parrafoMedia);
  ventanaEmergente();
  BorrarContenido();
}

//Crea una ventana emergente que desaparecera, si no es cerrada antes, a los 10segundos

function ventanaEmergente() {
  window.name = "Ventana";
  let ventana = window.open("", "nueva", "width=500,height=300");
  let contenido = "";
  for (var i = 0; i < arrayOrganizaciones.length; i++) {
    if (arrayOrganizaciones[i].getTotal() != 0) {
      if (arrayOrganizaciones[i].getTipo() == "Animales") {
        contenido =
          contenido +
          "<p>" +
          arrayOrganizaciones[i].getNombre() +
          " " +
          arrayOrganizaciones[i].getMultiRaza() +
          " " +
          arrayOrganizaciones[i].getambitoTrabajo() +
          "</p>";
      }
      if (arrayOrganizaciones[i].getTipo() == "Personas") {
        contenido =
          contenido +
          "<p>" +
          arrayOrganizaciones[i].getNombre() +
          " " +
          arrayOrganizaciones[i].getColaborar() +
          " y " +
          arrayOrganizaciones[i].getrangoEdad() +
          "</p>";
      }
    }
  }
  ventana.document.write(contenido);

  setTimeout(() => {
    ventana.close();
  }, 10000);
}

//Borra el contenido de la caja lateral, de la caja de abajo y del input de las organizaciones a los 10 segundos de pulsar el boton
function BorrarContenido() {
  setTimeout(() => {
    let cajaLateral = document.getElementById("contenedorLateral");
    let caja = document.getElementById("CajaDeTexto");
    for (var i = 0; i < arrayOrganizaciones.length; i++) {
      document.getElementsByName("donacion")[i].value = "";
    }
    while (caja.firstChild) {
      caja.removeChild(caja.firstChild);
    }
    while (cajaLateral.firstChild) {
      cajaLateral.removeChild(cajaLateral.firstChild);
    }
    InicializarTodo();
  }, 10000);
}
