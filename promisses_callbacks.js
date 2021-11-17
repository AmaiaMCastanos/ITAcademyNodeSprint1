/*1.1.Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

const myAsyncfunction = (a, b)  => new Promise ( (resolve,reject)=>{
    if (a ===b ) {
        resolve('Promise resolta')
    } else {
        reject('Promise NO resolta')
    }
})
myAsyncfunction (7,7).then (x => console.log(x))
myAsyncfunction (7,8).catch((e) => console.log(e))


/*1.2.Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/ 


const myCallback = (nombre, callback) => {
    console.log(`${nombre},`)
    callback();
};

function nombreRandom() {
    var codi = Math.floor(Math.random()*20);
    if (codi>6) {
        return console.log(`El seu codi d'accès es: ${codi}`)
    }   else {
        return console.log(`El seu codi d'accès es massa gran, si us plau, torna-ho a intentar: ${codi}`)
    }
};
nombreRandom('Pepa', nombreRandom);



//3.1.Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

try {


    /*2.1.Donats els objectes employees i salaries,
    crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id. */


    let employees = [{
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Gates'
    },{
        id: 3,
        name: 'Jeff Bezos'
    }];
    
    let salaries = [{
        id: 1,
        salary: 4000
    }, {
        id: 2,
        salary: 1000
    }, {
        id: 3,
        salary: 2000
    }]; 

    var id = Math.floor(Math.random()*5);; 


    const getEmployee = (id) => new Promise((resolve, reject)=>{
            let trobaemployee = employees.find(treballador => treballador.id === id);
            if (trobaemployee) {
                resolve (trobaemployee)
            }   else {
                reject ('El treballador no es troba a la base de dades')
            }
        });


    getEmployee(id).then((message) => { 
        console.log(message);
    })
    .catch((message) => { 
        console.log(message);
    });

    /*2.2. Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.
    */

    const getSalary = (id) =>new Promise ( (resolve,reject)=>{
        let trobaSalary = salaries.find(treballador => treballador.id === id);
        if (trobaSalary) {
            resolve (trobaSalary)
        }   else {
            reject ('El treballador no es troba a la base de dades')
        }
    });;

    getSalary(id).then((message) => { 
        console.log(message);
    })
    .catch((message) => { 
        console.log(message);
    });

    //2.3.Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.

    Promise.all([getEmployee(id), getSalary(id)]).then(message => {
        console.log(message);
    }, message => {
        console.log(message)
    });

    alertDeCatch("patata")
    }
    
  catch(err) {
    console.log(err.message);
  }
