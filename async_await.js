
/*1.1.Donats els objectes employees i salaries, crea una arrow function getEmployee 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.
Crea una altra arrow function getSalary 
que rebi com a paràmetre un objecte employee i retorni el seu salari.*/

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


const getEmployee = (id) => new Promise((resolve, reject)=>{
    let trobaemployee = employees.find(treballador => treballador.id === id);
        if (trobaemployee) {
            resolve (trobaemployee)
        }   else {
            reject ('El treballador no es troba a la base de dades')
        }
});



const getSalary = (employee) => {
    return new Promise((resolve, reject) => {

        const trobaSalari = salaries.find(element => element.id === employee.id);

        if (trobaSalari) {
            resolve(trobaSalari.salary)
        } else {
            reject(new Error('El treballador no es troba a la base de dades'))
        }
    })

}
//Exercici 2

//Crea una funció asíncrona
// que rebi un id d'empleat 
//i imprimeixi per pantalla el nom de l'empleat i el seu salari, 
// usant les funcions que has definit a l'exercici anterior.

async function empleats (id) {
    const empleat = await getEmployee(id);
    const salari = await getSalary(empleat);
    console.log(empleat.name, salari);
}

empleats (1);

//Nivell 2 Exercici 1

//Crea una nova funció asíncrona 
//que cridi a una altra que 
    //retorni una Promise que 
        //efectuï la seva funció resolve() després de 2 segons de la seva invocació.


MyFunction = () => {
    new Promise(function(resolve) {
        setTimeout(() => resolve(console.log("Han passat tres segons")), 3000);
      });
}   

async function MyAsyncFunction () {
    await MyFunction();   
}

MyAsyncFunction();



//Nivell 3 Exercici 1

//TODOCaptura tots els errors possibles dels nivells 1 i 2. 