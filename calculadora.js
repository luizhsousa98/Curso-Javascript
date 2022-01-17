const zero = 0;

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    let divisao = num1 / num2;
    if (num2 === zero) {
        console.error("Impossível divisão por zero!!!");
    }
    return divisao;
}


function operacao(operacao, num1, num2) {
    switch (operacao) {
        case 1:
            console.log("Voce selecionou a opcao soma: \n" + "Resultado = " + soma(num1, num2));
            break;
        case 2:
            console.log("Voce selecionou a opcao subtracao: \n" + "Resultado = " + subtracao(num1, num2));
            break;
        case 3:
            console.log("Voce selecionou a opcao multiplicacao: \n" + "Resultado = " + multiplicacao(num1, num2));
            break;
        case 4:
            console.log("Voce selecionou a opcao divisao: \n" + "Resultado = " + divisao(num1, num2));
            break;
        default:
            console.error("Operação inválida!!!");
            break;
    }
}


console.log("Escolha uma operação matematica: \n 1) Soma; \n 2) Subtracao; \n 3) multiplicacao; \n 4) Divisão.");
operacao(3, 5, 8);