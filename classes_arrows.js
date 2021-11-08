//N1.Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

suma = ((a,b) => a + b)(5,4);  
console.log(suma);

//N2.1.Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

((estacion)=>{
    const objecte = estacion
    console.log(objecte)
  
})("Primavera");   


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


function Alumno(apellido) {
    this.apellido = apellido;
  }
  
  Alumno.prototype.escribeApellido = function() {
    console.log ("El apellido es:" + this.apellido);
  };
  
  var alumno1 = new Alumno("Sanchez");
  var alumno2 = new Alumno("Linares");
  
  
  const escribir = () => alumno1.escribeApellido();
  
  alumno1.escribeApellido();                           
  alumno2.escribeApellido();                           
  escribir();                             
                                                
  console.log(escribir === alumno1.escribeApellido);
  console.log(escribir===Alumno.prototype.escribeApellido);

  escribir.call(alumno1); 