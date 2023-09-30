const data = require('./dataBase');

//6 - Imprimir se existe algum personagem de uma determinada espécie. True ou 
//False . Caso o retorno seja True, traga os nomes de todos os personagens desta 
//espécie.
 
function isAndroide(specie) { 
    let name = [] 
    if(data.species.some((specieSome) => specieSome.name === specie) === true){
        let findId = data.species.find((findId) => findId.name === specie)
        for(let i = 0; i < data.characters.length; i++){
            if(findId.id === data.characters[i].speciesId){
                name.push(data.characters[i].name)
            }
        }
    } else {
        console('Espécie não encontrada!')
    }
    return name
}

console.log(isAndroide('Saiyans'))