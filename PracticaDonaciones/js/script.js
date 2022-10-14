var arrayOrganizacioness = [
  "Save the children",
  "Caritas",
  "Cruz Roja",
  "GreenPeace",
  "Medicos sin fronteras",
  "Accion contra el hambre",
  "Amnistía Internacional",
  "Asociación Española contra el cáncer",
  "WWF",
  "Unicef",
];
var arrayDonaciones = [10, 2, 3, 5, 2, 8, 5, 6, 3, 4];
var arrayDonacionesPorOrganizacion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayAportaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/*function donacionPorOrganizacion(organizacion) {

  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));


  arrayDonacionesPorOrganizacion[indice] = arrayDonacionesPorOrganizacion[indice] + arrayDonaciones[indice];

  console.log(arrayDonacionesPorOrganizacion);
}*/
function NumAportacionesPorOrganizacion(organizacion) {
  let indice = Number(
    arrayOrganizacioness.findIndex((posicion) => posicion == organizacion)
  );
  arrayAportaciones[indice] = arrayAportaciones[indice] + 1;
  BorrarContenidoDiv();
}

/*function Aportacion(organizacion) {
  let indice = Number(
    arrayOrganizacioness.findIndex((posicion) => posicion == organizacion)
  );
  return arrayAportaciones[indice];
}*/

function UnirOrganizacionYAportacion() {
  let arrayOrganizacionConAportacion = [];
  arrayOrganizacionConAportacion.length = 10;
  for (var i = 0; i <= arrayOrganizacionConAportacion.length - 1; i++) {
    if (arrayAportaciones[i] != 0) {
      if(arrayAportaciones[i]>1){
            arrayOrganizacionConAportacion[i] =
        arrayOrganizacioness[i] + "----" + arrayAportaciones[i] + " aportaciones"; 
      }else{
        arrayOrganizacionConAportacion[i] =
        arrayOrganizacioness[i] + "----" + arrayAportaciones[i] + " aportacion"; 
      }
 
    }
  }
  arrayOrganizacionConAportacion.sort().reverse();
  return arrayOrganizacionConAportacion;
}

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
function InicializarTodo(){
  for(var i=0; i<=arrayAportaciones.length-1;i++){
    arrayAportaciones[i]=0;
  }
}

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

  


