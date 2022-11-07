class Organizacion{
    constructor(nombre, cantidad, media, total){
        this.nombre=nombre;
        this.cantidad= cantidad;
        this.media=media;
        this.total=total;
    }
    getNombre(){
        return this.nombre;
    }
    getCantidad(){
        return this.cantidad;
    }
    getMedia(){
        return this.media;
    }
    setMedia(media){
        this.media=media;
    }
    getTotal(){
        return this.total;
    }
    setTotal(total){
        this.total=total;
    }

}

class OAnimales extends Organizacion{
 constructor(nombre, cantidad,media, total, multiraza, ambitoTrabajo ){
    super(nombre, cantidad,media,total)
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
    constructor(nombre, cantidad,media,total, colaborar, rangoEdad ){
        super(nombre, cantidad,media,total)
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
