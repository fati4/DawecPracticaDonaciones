class Organizacion{
    constructor(nombre, cantidad, media, total, tipo){
        this.nombre=nombre;
        this.cantidad= cantidad;
        this.media=media;
        this.total=total;
        this.tipo=tipo;
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
    getTipo(){
        return this.tipo;
    }
    setTipo(tipo){
        this.tipo=tipo;
    }


}

class OAnimales extends Organizacion{
 constructor(nombre, cantidad,media, total,tipo, multiraza, ambitoTrabajo ){
    super(nombre, cantidad,media,total, tipo)
    this.multiraza=multiraza;
    this.ambitoTrabajo=ambitoTrabajo;
 }

 getMultiRaza(){
    if(this.multiraza){
        return "trabaja con todo tipo de animales";
    }else{
        return "trabaja solo con un tipo de animales";
    }
 }
 getambitoTrabajo(){
    if (this.ambitoTrabajo=="local"){
        return "a nivel local"

    }if(this.ambitoTrabajo=="provincial"){
        return "a nivel provincial"

    } if (this.ambitoTrabajo=="nacional"){
        return "a nivel nacional"

    } if(this.ambitoTrabajo=="internacional"){
       return "a nivel internacional"
    }else{
        console.log("error");
    }
   
 }
}

class OPersonas extends Organizacion{
    constructor(nombre, cantidad,media,total,tipo, colaborar, rangoEdad ){
        super(nombre, cantidad,media,total,tipo)
        this.colaborar=colaborar;
        this.rangoEdad=rangoEdad;
    }

        getColaborar(){
            if(this.colaborar){
                return "tramita acogidas"
            }else{
                return "no tramita acogidas"
            }
        }
    getrangoEdad(){
        if(this.rangoEdad=="infantil"){
            return "está enfocada en la infancia";
        }if(this.rangoEdad=="adolescencia"){
            return "está enfocada en la adolescencia";
        }if(this.rangoEdad=="tercera edad" ){
            return "está enfocada en la tercera edad";
        }else{
            console.log("error");
        }
    }
}
