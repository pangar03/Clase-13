// const ensalada = ["lechuga", "tomate", "zanahoria"];
// console.log(ensalada);

// ensalada.push("pepino");

// console.log(ensalada);

// const primerElemento = ensalada[0];
// console.log(primerElemento);
// console.log(ensalada.length);

// let nombreEnsalada = "";
// for(const vertura of ensalada){
//     nombreEnsalada += vertura + " ";
//     console.log(vertura);
// }

// console.log(nombreEnsalada);

// for(let i = 0; i < ensalada.length; i++){
//     console.log(ensalada[i]);
// }

// const parrafo = document.querySelector("#parrafo");
// console.log(parrafo);
// parrafo.innerHTML = "<Strong>" + nombreEnsalada + "</Strong>";

// parrafo.classList.add("parrafo--verde", "parrafo--titulo");

// =================================================================================================
// ==================================== TALLER  ====================================================
// =================================================================================================

const numeros = [3, 1, 1, 10, 5, 7, 2];

let numMenor = 0, numMayor = 0, suma = 0;

for (n of numeros) {
    suma += n;
    if (numMenor === 0 && numMayor === 0) {
        numMenor = n;
        numMayor = n;
    }

    else {
        if (n < numMenor) {
            numMenor = n;
        }
        if (n > numMayor) {
            numMayor = n;
        }
    }
}

const parrafo = document.querySelector("#parrafo");
parrafo.innerHTML = "La suma total es " + suma + ", el número menor es " + numMenor + " y el número mayor es " + numMayor;
parrafo.classList.add("parrafo", "parrafo--azul");