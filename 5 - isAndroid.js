const data = require('./dataBase'); 

//6 - Imprimir se existe algum personagem de uma determinada espécie. True ou 
//False . Caso o retorno seja True, traga os nomes de todos os personagens desta 
//espécie.
 
function isAndroide(specie) { 
    let namesPush = []; 
    if(data.species.some((specieSome) => specieSome.name === specie) === true){
        let findId = data.species.find((findId) => findId.name === specie)
        for(let index = 0; index < data.characters.length; index++){
            if(findId.id === data.characters[index].speciesId){ 
                namesPush.push(data.characters[index].name)
            }
        }
    }

    else {
        console.log('Espécie não encontrada!')
    }
    return namesPush
}

console.log(isAndroide('Saiyans'))

//em uma variável add a função de Find === specie 
//varrer o Array de Characters 
//caso SpeciesId === find.id  
//Push para a variável nome 
