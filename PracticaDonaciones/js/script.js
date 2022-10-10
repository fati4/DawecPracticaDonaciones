var arrayOrganizacioness=["Save The Children","Caritas","Cruz Roja","Caritas", "Caritas", "Caritas", "Caritas", "Caritas","Caritas","Caritas"];
var arrayDonaciones=[10,2,3,5,2,3,5,6,3,4];
var arrayDonacionesPorOrganizacion=[0,0,0,0,0,0,0,0,0,0];

function donacionPorOrganizacion(organizacion){
   
 let indice = Number(arrayOrganizacioness.findIndex(posicion=> posicion == organizacion));
 
 
 arrayDonacionesPorOrganizacion[indice]= arrayDonacionesPorOrganizacion[indice]+arrayDonaciones[indice];

   console.log(arrayDonacionesPorOrganizacion);
}

function sumaTotalDeDonaciones(){
  let totalDonaciones= arrayDonacionesPorOrganizacion.reduce(function(total, item){
    total=total+item;
    return total;
  })
  console.log(totalDonaciones);
}
