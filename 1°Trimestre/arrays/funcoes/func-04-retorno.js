Node// Funções de retorno exigem a
// cláusula/termo 'return'
// isso permite fazer operações
// sequênciais com o resultado
// armazenar funções em variáveis 

function sobraDoSalario(meuSalario){
    const contaDeLuz = 150.0
    const aluguel = 1400.0
    const resto = meuSalario - (contaDeLuz+aluguel)

    return `O que restou no fim do mês R$ ${resto.toFixed(2).replace('.',',')}`
}
const minhasSobras = sobraDoSalario (2950.00)
// teste - experimento 
console.log(sobraDoSalario (50000))