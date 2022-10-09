var arrayOrganizacioness=["h","v","lo"];
var arrayDonaciones=[10,2,3,5,2,3,5,6,3,4,5];
var arrayDonacionesPorOrganizacion=[0,0,0,0,0,0,0];

function donacionPorOrganizacion(organizacion){
   
 let indice = Number(arrayOrganizacioness.findIndex(posicion=> posicion == organizacion));
 
 
 arrayDonacionesPorOrganizacion[indice]= arrayDonacionesPorOrganizacion[indice]+arrayDonaciones[indice];

   console.log(arrayDonacionesPorOrganizacion);
}
