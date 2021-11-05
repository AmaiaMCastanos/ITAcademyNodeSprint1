//N1.Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.

function user(username)
  {

    console.log(username);
  }

user("amaia");


/*N2.1.Mostra per consola el nom i cognoms de l'usuari mitjançant template literals,
 guardant-los en variables i referenciant-les en la impressió del missatge.*/

var nom=`Amaia`
var cognoms=` Muñoz Castaños`
console.log(nom + cognoms);


//N2.2.Invoca una funció que retorni un valor des de dins d'una template literal.

function myfunction(a,b){
  return a+b;
}

console.log(`Total: ${(myfunction(5,5))}`);


 /* N3.1.Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
 Invoca cada funció de l'array iterativament. 
 Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.*/
 const cuenta = () => {
  console.log("Contando:")
    for(i=0;i<10;i++){
      console.log(i)
    }

}
const array_cuenta = new Array(10).fill(cuenta)


array_cuenta.forEach((func) => {
  func();
});
/* N3.2.Crea una funció anònima autoinvocable igualada a una variable
 que mostri per consola el nom de l'usuari rebut com a paràmetre.*/

 (function(){

  function user(username)
  {

    console.log(username);
  }

user("amaia");

})();