/* 8 - Para cada personagem imprima um frase da seguinte forma: 
    Parte 1: {nome} é da espécie {ID espécie}
    Parte 2: {nome} é da espécie {NOME espécie}
 */

const data = require('./dataBase')

function information(){
    return data.characters.map((character) => { 
      const specieName = data.species.find((specie) => specie.id === character.speciesId)
      return `${character.name} é da espécie ${specieName.name}`
    })
}

console.log(information())