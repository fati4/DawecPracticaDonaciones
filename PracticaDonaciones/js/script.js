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
  let totalDonaciones= arrayAportaciones.reduce(function(total,item,i){

    total=arrayDonaciones[i]*arrayAportaciones[i]+item;
    console.log(total);
    return total;
  })
  
  console.log(totalDonaciones);
}
function sumaTotalDeDonaciones(){
  let totalDonaciones=0;
  for(var i=0; i>=arrayAportaciones.length-1; i++){
    totalDonaciones=(arrayAportaciones[i]*arrayDonaciones[i]+totalDonaciones);
  }
  console.log(totalDonaciones);
}