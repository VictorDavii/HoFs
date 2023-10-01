const data = require('./dataBase');

const numbers = [1, 4, 10, 2, 20]

//Ordenar os  personagens através de um parâmetro

const ordered = data.characters.sort((a, b) => a.name.localeCompare(b.name))


console.log(ordered)
