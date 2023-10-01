const data = require('./dataBase'); 

specie = data.species

//6 - Imprima todos os nomes das espécies.

function speciesNames(){ 

    return data.species.reduce((prev, curr) => {
        return [...prev, curr.name]
    }, [])
}

console.log(speciesNames())

//https://youtu.be/IzlP3FJwA58?si=86tVfwiHnjWaq1Vc 
// Aula #07 - Gustavo Caetano