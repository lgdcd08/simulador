/**
*Simulador dos operadores lógicos AND - OR - NOT
*@author Luiz Gustavo de Carvalho Dagnese
*/

let receive//armazena o parametro(valor) recebido html
//as variaveis abaixo são usadas para identificar se o interruptor está ligado ou desligado (false = desligado | true = ligado)

let sw1 = false
let sw2 = false

//a variável abaixo é usada para identificar se a lãmpada está quebrada
let broken = false

function sw(receive) {
    // console.log(receive)//apoio à logica

    //lógica para os interruptores
    if (receive === 1 && sw1 === false) {
        document.getElementById('sw1').src = "img/swon.png"
        sw1 = true
    }
    else if (receive === 1 && sw1 === true) {
        document.getElementById('sw1').src = "img/swoff.png"
        sw2 = false
    }
    else if (receive === 2 && sw1 === false) {
        document.getElementById('sw2').src = "img/swon.png"
        sw2 = true
    }
    else if (receive === 2 && sw2 === true) {
        document.getElementById('sw2').src = "img/swoff.png"
        sw2 = false
    }
    //lógica para quebrar a lâmpada
    if (receive === 3) {

        //a linha a baixo cria um objeto usando a classe audio
        let som = new Audio()
        console.log(typeof (som))
        som.src = "sound/glassbreaking.wav"
        som.play()
        //trocar a imagem (mAnipulação do DOM)
        document.getElementById('lamp').src = "img/broken.jpg"
        broken = true
    }
    //lógica para o operador AND
    if (broken !== true) {
        if (sw1 === true && sw2 === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }  else {
            document.getElementById('lamp').src = "img/off.jpg"

        }
    }
}