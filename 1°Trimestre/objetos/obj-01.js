// objetos são estruturas do tipo chave-valor
// podemos atribuir de forma dinâmica, assim como em arrays
// objetos tem índices nomeados
// podemos usar (for of) ou (for in)

const carros = {
    nome: "Camaro",
    modelo: "xpto Cam",
    cores: ["preto", "roxo"]
}
carros.modelo = "Fusca"
carros["nome"] = "Chev"
console.log(carros.modelo)
console.log(carros.nome)

//for(carro in carros) { console.log(carro) }