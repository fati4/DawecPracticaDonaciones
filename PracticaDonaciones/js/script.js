var arrayOrganizacioness = ["Save the children", "Caritas", "Cruz Roja", "GreenPeace", "Medicos sin fronteras", "Accion contra el hambre", "Amnistía Internacional", "Asociación Española contra el cáncer", "WWF", "Unicef"];
var arrayDonaciones = [10, 2, 3, 5, 2, 3, 5, 6, 3, 4];
var arrayDonacionesPorOrganizacion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayAportaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/*function donacionPorOrganizacion(organizacion) {

  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));


  arrayDonacionesPorOrganizacion[indice] = arrayDonacionesPorOrganizacion[indice] + arrayDonaciones[indice];

  console.log(arrayDonacionesPorOrganizacion);
}*/
function NumAportacionesPorOrganizacion(organizacion) {
  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));
  arrayAportaciones[indice] = arrayAportaciones[indice] + 1;
  console.log(arrayAportaciones);
 
}
function Aportacion(organizacion){
  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));
  return arrayAportaciones[indice];
}
function OrdenarOrganizacion(){
  let arrayOrganizacionesColocadas=[];
  arrayOrganizacionesColocadas=arrayOrganizacioness.sort().reverse();
  console.log(arrayOrganizacionesColocadas);
  return arrayOrganizacionesColocadas;
}
function OrdenarAportaciones(organizacion){
  let arrayAportacionesOrdenadas=[];
  let indice = Number(OrdenarAportaciones().findIndex(posicion => posicion == organizacion));
  let indice2= Number(arrayAportaciones.findIndex(posicion => posicion == Aportacion(organizacion)));
  arrayAportacionesOrdenadas[indice]=arrayAportaciones[indice2];
  return arrayAportacionesOrdenadas[indice];
}

function MediaTotalDonaciones() {
  
  let numeroAportaciones=0;
  for(var i=0; i<=arrayAportaciones.length-1; i++){
    if(arrayAportaciones[i]!=0){
      numeroAportaciones= arrayAportaciones[i]+ numeroAportaciones;
    }
  }
  console.log(numeroAportaciones);
 let mediaDonaciones = sumaTotalDeDonaciones() / numeroAportaciones;
  console.log(mediaDonaciones);
  return mediaDonaciones;
}

function sumaTotalDeDonaciones() {
  let totalDonaciones=0;
  for (var i = 0; i <= arrayAportaciones.length - 1; i++) {
    totalDonaciones =( (arrayAportaciones[i] * arrayDonaciones[i]) + totalDonaciones);
  }
  console.log(totalDonaciones);
  return totalDonaciones;
}
function texto(){
  let caja= document.getElementById("CajaDeTexto");
  for(var i=0; i<=arrayOrganizacioness.length-1; i++){
  let parrafo= document.createElement('p');
  parrafo.textContent= OrdenarOrganizacion()[i]+" ---- " + OrdenarAportaciones(arrayOrganizacioness[i]) 
  caja.appendChild(parrafo);
}
let parrafoSuma = document.createElement('p');
parrafoSuma.textContent = sumaTotalDeDonaciones() + "€ total "

let parrafoMedia = document.createElement('p');
parrafoMedia.textContent= MediaTotalDonaciones() + "€ media de donaciones"

caja.appendChild(parrafoMedia);
caja.appendChild(parrafoSuma);
OrdenarOrganizacion();

  
}