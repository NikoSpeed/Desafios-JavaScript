let pocionVida = prompt("Cuantas pociones de vida tenes?")
let pocionMana = prompt("Cuantas pociones de mana tenes?")
let vidaBoss = 100

let cantPociones = pocionMana + pocionVida;
Pociones(cantPociones)

function Pociones(cantPociones){
    if (cantPociones <= 0){
        console.log("No tenes pociones");
    }
    else if(cantPociones <= 5){
        console.log("Tenes algunas pociones")
    }
    else if(cantPociones > 6){
        console.log("Tenes muchas pociones")
    }
}

let cantNivel = prompt("Cuanto nivel tiene tu personaje?")
VerificarNivel(cantNivel)

function VerificarNivel(cantNivel){
    if(cantNivel <= 3){
        switch(cantNivel){
            case "0":
                console.log("Personaje sin nivel")
                break;
            case "1":
                console.log("Personaje nivel 1")
                break;
            case "2":
                console.log("Personaje nivel 2")
                break;
            case "3":
                console.log("Personaje nivel 3")
                break;
        }
    }
    else{
        console.log("Tu personaje tiene nivel de sobra")
    }
}

CalculoDerrota(pocionMana,pocionVida,cantNivel,vidaBoss)
function CalculoDerrota(pocionM,pocionV,jugador,boss){
    const habilidadJugador = (pocionM + pocionV) * jugador
    if(vidaBoss - habilidadJugador <= 0){
        alert("Felicidades! Derrotaste al Boss")
    }
    else{
        alert("Has muerto")
    }
}
console.log("Game Over")