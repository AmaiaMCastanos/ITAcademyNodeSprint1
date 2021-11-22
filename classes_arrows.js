//N1.Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

suma = ((a,b) => a + b)(5,4);  
console.log(suma);


//N2.1.Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const estaciones = estacion => obj = {
   nombre:estacion
    };

console.log(estaciones("primavera"));



/*N2.2.Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona{
    constructor(nom){
        this.nom = nom;
    }   
    dirNom (){
        console.log(this.nom);
    }   
}

const alumno = new Persona ("Pepe");
alumno.dirNom();

//N3.Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.


class perro {
    constructor (nombre, edad, color){
        this.nombre=nombre;
        this.edad=edad;
        this.color=color;
        if(this.constructor == perro){
			throw new Error(" Object of Abstract Class cannot be created");
			}	
    }
    datos(){
		console.log(`DATOS DEL PERRO:
    nombre: ${this.nombre}
    edad: ${this.edad}
    color:${this.color}`);
	}
}

function crearBDPerro(_nombre,_edad,_color){
    return Object.create(perro.prototype, {
		"nombre" : {value: _nombre},
		"edad":{value: _edad},
		"color":{value: _color}
	});
}

perro1 = crearBDPerro("txiki",1,"marrón");
perro1.datos();

perro2 = crearBDPerro("neu",3,"blanco con manchas negras");
perro2.datos();

