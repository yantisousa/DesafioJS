function highAndLow(numbers){
    let newNumbers = numbers.split(' ');
    for(let i = 0; i < newNumbers.length; i++){
        newNumbers[i] = parseFloat(newNumbers[i]);
    }
    let menorValor = 0;
    for(let atual = 0; atual < newNumbers.length; atual++){
        if(newNumbers[atual] < newNumbers[menorValor]){
            menorValor = atual;
        }
    }
    let maiorValor = 0
    for(let atualMaior = 0; atualMaior < newNumbers.length; atualMaior++){
        if(newNumbers[atualMaior] > newNumbers[maiorValor]){
            maiorValor = atualMaior;
        }
    }
    const menor = [newNumbers[menorValor]];
    const maior = [newNumbers[maiorValor]];
    const menorEmaior = maior.concat(menor);
    const maiorEmenorEmString = menorEmaior.join(" ");
    console.log(maiorEmenorEmString);

}
highAndLow("3 2 3 4 5 6");