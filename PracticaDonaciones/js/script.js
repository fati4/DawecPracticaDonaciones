
/*var arrayOrganizacioness = [
  "Save the children",
  "Caritas",
  "Cruz Roja",
  "GreenPeace",
  "Medicos sin fronteras",
  "Accion contra el hambre",
  "Amnistía Internacional",
  "Asociación Española contra el cáncer",
  "WWF",
  "Unicef"
];*/

//var arrayDonaciones = [10, 2, 3, 5, 2, 8, 5, 6, 3, 4];
var arrayTotalDonacion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayAportaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var SaveTheChildren = new OPersonas("Save the children", arrayAportaciones[0], 0, 0, true, "infantil");
var Caritas = new OPersonas("Caritas", arrayAportaciones[1], 0, 0, false, "adolescencia");
var CruzRoja = new OPersonas("Cruz Roja", arrayAportaciones[2], 0, 0, false, "infantil");
var GreenPeace = new OAnimales("GreenPeace", arrayAportaciones[3], 0, 0, true, "nacional");
var MedicosSinFrontera = new OPersonas("Medicos sin fronteras", arrayAportaciones[4], 0, 0, false, " tercera edad");
var AccionContraElHambre = new OAnimales("Accion contra el hambre", arrayAportaciones[5], 0, 0, true, "provincial");
var AmnistiaInternacional = new OPersonas("Amnistía Internacional", arrayAportaciones[6], 0, 0, true, "adolescencia");
var AsociacionEspanolaContraElCancer = new OPersonas("Asociacion Española contra el cáncer", arrayAportaciones[7], 0, 0, false, "tercera edad");
var WWF = new OAnimales("WWF", arrayAportaciones[8], 0, 0, true, "internacional");
var Unicef = new OAnimales("Unicef", arrayAportaciones[9], 0, 0, false, "local");

var arrayOrganizaciones = [SaveTheChildren,
  Caritas,
  CruzRoja,
  GreenPeace,
  MedicosSinFrontera,
  AccionContraElHambre,
  AmnistiaInternacional,
  AsociacionEspanolaContraElCancer,
  WWF,
  Unicef];

function totalDonacionOrganizacion(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex((posicion) => posicion.getNombre() == organizacion)
  );
  let aportacion = document.getElementsByName('donacion')[indice].value;
  console.log(aportacion);
  let total;
  total = Number(arrayOrganizaciones[indice].getTotal()) + Number(aportacion);
   arrayOrganizaciones[indice].setTotal(total);
   console.log(arrayOrganizaciones[indice].getTotal());
  console.log(arrayTotalDonacion);
  return total;
}
/*Esta función rellena el array de aportaciones segun las veces que se le de click a una organizacion.
Al final de la función borra el contenido de texto si hubiera algo dentro de la caja de texto*/
function NumAportacionesPorOrganizacion(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex((posicion) => posicion.getNombre() == organizacion)
  );
  let aportacion = document.getElementsByName('donacion')[indice].value;
  if (aportacion > 0) {
    let indice = Number(
      arrayOrganizaciones.findIndex((posicion) => posicion.getNombre() == organizacion)
    );
    arrayAportaciones[indice] = arrayAportaciones[indice] + 1;
    totalDonacionOrganizacion(organizacion);
    rellenarContenedorLateral(organizacion, aportacion);
    marcarOrganizacion();
    calcularMedia(organizacion);
    InvertirOrderOrganizaciones();
    console.log(arrayAportaciones);
  }

  // BorrarContenidoDiv();
}

function rellenarContenedorLateral(organizacion, aportacion) {
  var cajaLateral = document.getElementById("contenedorLateral");
  let parrafoDonacion = document.createElement("p");
  parrafoDonacion.style.backgroundColor = ("pink");
  parrafoDonacion.textContent = organizacion + " --- " + aportacion;
  cajaLateral.appendChild(parrafoDonacion);
}
function marcarOrganizacion() {
  var cajaLateral = document.getElementById("contenedorLateral");
  let parrafosL = cajaLateral.children;
  for (var i = 0; i < parrafosL.length; i++) {
    let pFinal = parrafosL[parrafosL.length - 1].textContent;
    let pI = parrafosL[i].textContent;
    if (pFinal == pI) {
      parrafosL[i].style.color = ("green");

    } else {
      parrafosL[i].style.color = ("black");
    }
  }
}

function fechaFinalizacion() {
  let fechaActual = new Date().toLocaleString();
  return fechaActual;
}

function calcularMedia(organizacion) {
  let indice = Number(
    arrayOrganizaciones.findIndex((posicion) => posicion.getNombre() == organizacion)
  );
let media= arrayOrganizaciones[indice].getTotal()/arrayAportaciones[indice];
media.toFixed(3);
arrayOrganizaciones[indice].setMedia(media);
console.log(arrayOrganizaciones[indice].getMedia());
return media;

}

function InvertirOrderOrganizaciones(){
 let arrayOrganizacionesOrdenadas;
 let contador=0;

 for(var i=0; i<arrayOrganizaciones.length; i++){
  let total=arrayOrganizaciones[i].getTotal();
  if(total!=0){
    console.log(arrayOrganizaciones[i]);
    arrayOrganizacionesOrdenadas[contador]=arrayOrganizaciones[i];
    contador++;
  }
 }
 arrayOrganizaciones.sort().reverse();

console.log(arrayOrganizaciones);

  
}

/*Crea un array que une las organizaciones con las aportaciones realizadas por cada organización 
y luego los ordena al contrario del orden alfabetico. Si el numero de aportación es 0 no lo mete en el nuevo array*/
/*
function UnirOrganizacionYAportacion() {
  let arrayOrganizacionConAportacion = [];
  arrayOrganizacionConAportacion.length = 10;
  for (var i = 0; i <= arrayOrganizacionConAportacion.length - 1; i++) {
    if (arrayAportaciones[i] != 0) {
      if(arrayAportaciones[i]>1){
            arrayOrganizacionConAportacion[i] =
        arrayOrganizacioness[i] + " ---- " + arrayAportaciones[i] + " aportaciones"; 
      }else{
        arrayOrganizacionConAportacion[i] =
        arrayOrganizacioness[i] + " ---- " + arrayAportaciones[i] + " aportacion"; 
      }
 
    }
  }
  arrayOrganizacionConAportacion.sort().reverse();
  return arrayOrganizacionConAportacion;
}
*/

/*Hace la suma total de aportaciones que se han hecho sumando las posiciones del array de 
aportaciones para tener el numero total de aportaciones y asi poder hacer la media*/
/*
function MediaTotalDonaciones() {
  let numeroAportaciones = 0;
  for (var i = 0; i <= arrayAportaciones.length - 1; i++) {
    if (arrayAportaciones[i] != 0) {
      numeroAportaciones = arrayAportaciones[i] + numeroAportaciones;
    }
  }
  let mediaDonaciones = SumaTotalDeDonaciones() / numeroAportaciones;
  return mediaDonaciones;
}

 
function SumaTotalDeDonaciones() {
  let totalDonaciones = 0;
  for (var i = 0; i <= arrayAportaciones.length - 1; i++) {
    totalDonaciones =
      arrayAportaciones[i] * arrayDonaciones[i] + totalDonaciones;
  }
  return totalDonaciones;
}
*/

/*Inicializa el array de aportaciones a 0 para poder volver a empezar de nuevo las donaciones */
/*
function InicializarTodo(){
  for(var i=0; i<=arrayAportaciones.length-1;i++){
    arrayAportaciones[i]=0;
  }
}
*/

function CrearTexto() {
  let caja = document.getElementById("CajaDeTexto");
  for (var i = 0; i <= arrayOrganizacioness.length - 1; i++) {
    let parrafo = document.createElement("p");
    parrafo.textContent = UnirOrganizacionYAportacion()[i];
    caja.appendChild(parrafo);
  }
  let parrafoSuma = document.createElement("p");
  let parrafoMedia = document.createElement("p");
 
  parrafoSuma.textContent = "Donación final: "+ SumaTotalDeDonaciones() + "€";
  parrafoMedia.textContent = "Donación media: "+MediaTotalDonaciones() + "€/aportación";

  caja.appendChild(parrafoSuma);
  caja.appendChild(parrafoMedia);
  InicializarTodo();
}


function BorrarContenidoDiv(){
let caja= document.getElementById("CajaDeTexto");
while(caja.hasChildNodes){
  caja.removeChild(caja.lastChild);
}
}

  


