function sorteio(){

let num = Number(prompt('Digite um número de 1 a 10 e saiba se acertou'));


let sorte = (Math.floor(Math.random()* 10) + 1);

if(num === sorte){
    alert(`Parabéns, o número era: ${sorte}`);
} else{
    alert(`Infelizmente você errou, o número era: ${sorte}`);
}

}


sorteio();