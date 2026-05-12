// Crie um perfil profissional que
// Interpole uma frase é um objeto com
// As características de um Profissional a sua escolha

// Criar objeto javascript 'profissional'

// Criar variável com interpolação (template)

// Imprimir perfilProfissional


const profissional = {
    nome: "Safira",
    profissão: "Médica",
    especialização: "Pedriatia",
    salário: "R$9.320,50",
}
const perfil = `\nOlá, ${profissional.nome} \na sua profissão é: ${profissional.profissão}, \nespecializada na área da: ${profissional.especialização}, \ne o seu salário é de: ${profissional.salário}`
console.log(perfil)