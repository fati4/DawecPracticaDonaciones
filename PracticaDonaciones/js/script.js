var arrayOrganizacioness = ["Save the children", "Caritas", "Cruz Roja", "GreenPeace", "Medicos sin fronteras", "Caritas", "Caritas", "Caritas", "Caritas", "Caritas"];
var arrayDonaciones = [10, 2, 3, 5, 2, 3, 5, 6, 3, 4];
var arrayDonacionesPorOrganizacion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrayAportaciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalDonaciones = 0;
var mediaDonaciones = 0;
function donacionPorOrganizacion(organizacion) {

  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));


  arrayDonacionesPorOrganizacion[indice] = arrayDonacionesPorOrganizacion[indice] + arrayDonaciones[indice];

  console.log(arrayDonacionesPorOrganizacion);
}
function NumAportacionesPorOrganizacion(organizacion) {
  let indice = Number(arrayOrganizacioness.findIndex(posicion => posicion == organizacion));
  arrayAportaciones[indice] = arrayAportaciones[indice] + 1;
  console.log(arrayAportaciones);
}

function MediaTotalDonaciones() {
  let numeroAportaciones=0;
  for(var i=0; i<=arrayAportaciones.length-1; i++){
    if(arrayAportaciones[i]!=0){
      numeroAportaciones= arrayAportaciones[i]+ numeroAportaciones;
    }
  }
  mediaDonaciones = totalDonaciones / numeroAportaciones;
  console.log(mediaDonaciones);
}

function sumaTotalDeDonaciones() {

  for (var i = 0; i >= arrayAportaciones.length - 1; i++) {
    totalDonaciones = (arrayAportaciones[i] * arrayDonaciones[i] + totalDonaciones);
  }
  console.log(totalDonaciones);
}
function texto(){
  let caja= document.getElementById("CajaDeTexto");
  let contenido="";
  for(var i=0; i<=arrayOrganizacioness.length-1; i++){
    contenido= contenido + arrayOrganizacioness[i]+" ---- " +arrayAportaciones[i]  ;
  }
 caja.textContent=  contenido ;
 
  
}