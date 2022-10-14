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
}
function Aportacion(organizacion) {
  let indice = Number(
    arrayOrganizacioness.findIndex((posicion) => posicion == organizacion)
  );
  return arrayAportaciones[indice];
}

function UnirOrganizacionYAportacion() {
  let arrayOrganizacionConAportacion = [];
  arrayOrganizacionConAportacion.length = 10;
  for (var i = 0; i <= arrayOrganizacionConAportacion.length - 1; i++) {
    if (arrayAportaciones[i] != 0) {
      arrayOrganizacionConAportacion[i] =
        arrayOrganizacioness[i] + "----" + arrayAportaciones[i];
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
  let mediaDonaciones = sumaTotalDeDonaciones() / numeroAportaciones;
  return mediaDonaciones;
}

function sumaTotalDeDonaciones() {
  let totalDonaciones = 0;
  for (var i = 0; i <= arrayAportaciones.length - 1; i++) {
    totalDonaciones =
      arrayAportaciones[i] * arrayDonaciones[i] + totalDonaciones;
  }
  return totalDonaciones;
}
function InicializarTodo(){
  arrayAportaciones.forEach((i)=>{
    arrayAportaciones[i]=0;
  });
}

function CrearTexto() {
  BorrarTexto();
  let caja = document.getElementById("CajaDeTexto");
  for (var i = 0; i <= arrayOrganizacioness.length - 1; i++) {
    let parrafo = document.createElement("p");
    parrafo.textContent = UnirOrganizacionYAportacion()[i];
    caja.appendChild(parrafo);
  }
  let parrafoSuma = document.createElement("p");
  let parrafoMedia = document.createElement("p");
 
  parrafoSuma.textContent = sumaTotalDeDonaciones() + "€ total ";
  parrafoMedia.textContent = MediaTotalDonaciones() + "€ media de donaciones";

  caja.appendChild(parrafoMedia);
  caja.appendChild(parrafoSuma);
  InicializarTodo();
}

  


