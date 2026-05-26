
const fs = require('fs')

//console.log(fs)

//const arquivo = fs.readFileSync('./README.md', 'utf-8')
///workspaces/BackEnd_3ds/2°Trimestre/modulos/mod03-FS/README.md
//2°Trimestre/modulos/mod03-FS/README.md

const arquivoFinal = fs.readFileSync(__dirname + "/README.md", 'utf-8')

console.log(arquivoFinal)