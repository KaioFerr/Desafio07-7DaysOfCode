//funções
function soma(x,y){
    solucao = x+y
    return solucao
}
function subtracao(x,y){
    solucao = x-y
    return solucao
}
function multiplicacao(x,y){
    solucao = x*y
    return solucao
}
function divisao(x,y){
    solucao = x/y
    return solucao
}

//Parte em que o usuário escolherá a operação
for(i = 1; i !=0; i++){
    opcao = prompt("Escolha uma opção: soma, subtração, multiplicação, divisão ou sair")

    if(opcao == "sair"){
        i=0
        alert("Até a próxima")
        break
    }

    valorInicial = parseFloat(prompt("Valor inicial: "))
    valorFinal = parseFloat(prompt("Valor final: "))
    
    if (opcao == "soma" || opcao == "Soma" || opcao == "+"){ 
        resultado = soma(valorInicial,valorFinal)
        alert(`solução: ${resultado}`)
    } 
    else if(opcao == "subtracao" || opcao == "Subtracao" || opcao == "subtração" || opcao == "Subtração" || opcao == "-"){
        resultado = subtracao(valorInicial,valorFinal)
        alert(`solução: ${resultado}`)
    }
    else if(opcao == "multiplicacao" || opcao == "Multiplicacao" || opcao == "multiplicação" || opcao == "Multiplicação" || opcao == "x"){
        resultado = multiplicacao(valorInicial,valorFinal)
        alert(`solução: ${resultado}`)
    }
    else if(opcao == "divisao" || opcao == "Divisao" || opcao == "divisão" || opcao == "Divisão" || opcao == "/"){
        resultado = divisao(valorInicial,valorFinal)
        alert(`solução: ${resultado}`)
    }
    else{
        alert("Você digitou a opcão errada")
    }
}