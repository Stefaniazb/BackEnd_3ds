// Crie um array que contenha 3 frutas
// Adicione 4 frutas com o método .push(<nomeFrutas>)
// remova 1 fruta com .pop()
// faça um loop for que remova todas as frutas
// verifique, se todas as frutas foram removidas
// imprima "Nenhuma fruta encontrada"

const frutas = ['maçã verde' , 'manga' , 'maracujá']
//console.log(frutas)
frutas.push('melancia')
//console.log(frutas)
console.log(frutas.length) // comprimento desse array
while (frutas.length > 0) {
    frutas.pop()
    if (frutas.length == 0){
        console.log("Não há futas para vender!!!")
    }
        
}
console.log(frutas)
console.log(frutas.length)