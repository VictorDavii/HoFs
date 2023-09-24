const dataBase = require('./dataBase');
const data = require('./dataBase');

function getBySpecie(id){

    return data.characters.find((specie) => specie.speciesId === id)

}
console.log(getBySpecie(4))
