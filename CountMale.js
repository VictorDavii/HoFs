const data = require('./dataBase');

//2- Conte a quantidade de personagens de acordo com o sexo.

function countGender(gender){
 
    if(gender == 'M' || gender == 'F'){

        return data.characters.filter((character) => {
            return character.gender === gender
        })

    }else{
        'ERROR'
    }

}

console.log(countGender('M'))