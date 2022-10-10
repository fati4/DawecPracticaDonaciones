var arrayOrganizacioness=["Save the children","Caritas","Cruz Roja","GreenPeace", "Medicos sin fronteras", "Caritas", "Caritas", "Caritas","Caritas","Caritas"];
var arrayDonaciones=[10,2,3,5,2,3,5,6,3,4];
var arrayDonacionesPorOrganizacion=[0,0,0,0,0,0,0,0,0,0];
var arrayAportaciones=[0,0,0,0,0,0,0,0,0,0];
function donacionPorOrganizacion(organizacion){
   
 let indice = Number(arrayOrganizacioness.findIndex(posicion=> posicion == organizacion));
 
 
 arrayDonacionesPorOrganizacion[indice]= arrayDonacionesPorOrganizacion[indice]+arrayDonaciones[indice];

   console.log(arrayDonacionesPorOrganizacion);
}
function NumAportacionesPorOrganizacion(organizacion){
  let indice = Number(arrayOrganizacioness.findIndex(posicion=> posicion == organizacion));
  arrayAportaciones[indice]= arrayAportaciones[indice]+1;
  console.log(arrayAportaciones);
}

function MediaTotalDonaciones(){

}

function sumaTotalDeDonaciones(){
  let totalDonaciones= arrayDonacionesPorOrganizacion.reduce(function(total, item){
    total=total+item;
    return total;
  })
  console.log(totalDonaciones);
}
