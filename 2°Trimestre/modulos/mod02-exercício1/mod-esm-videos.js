//**Crie dos arquivos .js**
//- O arquivo `mod-esm-videos.js` deverá conter
//2 funções: 
//- alugarFilme(nomeFilme, dataAluguel, preço)
//- devolverFilme(nomeFilme, dataEntrega)
export function alugarFilme(nomeFilme, dataAluguel, preco){
    return `O filme ${nomeFilme} foi alugado na data: ${dataAluguel} com o valor de: ${preco}`
}
export function devolverFilme(nomeFilme, dataEntrega){
    return `O filme ${nomeFilme} que foi alugado deverá ser entregue na proxima data: ${dataEntrega}`
}

    