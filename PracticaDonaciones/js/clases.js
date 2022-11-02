class Organizacion{
    constructor(nombre, cantidad){
        this.nombre=nombre;
        this.cantidad= cantidad;
    }
    getNombre(){
        return this.nombre;
    }
    getCantidad(){
        return this.cantidad;
    }

}

class OAnimales extends Organizacion{
 constructor(nombre, cantidad, multiraza, ambitoTrabajo ){
    super(nombre, cantidad)
    this.multiraza=multiraza;
    this.ambitoTrabajo=ambitoTrabajo;
 }

 getambitoTrabajo(){
    if (this.ambitoTrabajo=="local"  || this.ambitoTrabajo=="provincial" || this.ambitoTrabajo=="nacional" || this.ambitoTrabajo=="internacional"){
       return this.ambitoTrabajo  
    }else{
        console.log("error");
    }
   
 }
}

class OPersonas extends Organizacion{
    constructor(nombre, cantidad, colaborar, rangoEdad ){
        super(nombre, cantidad) 
        this.colaborar=colaborar;
        this.rangoEdad=rangoEdad;
    }

    getrangoEdad(){
        if(this.rangoEdad=="infantil" || this.rangoEdad=="adolescencia" ||this.rangoEdad=="tercera edad" ){
            return this.rangoEdad;
        }else{
            console.log("error");
        }
    }
}