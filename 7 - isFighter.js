/* 7 - Verificar se o personagem possui poderes ou não. Adicionar a propriedade 
isFighter com o valor True (para quando tiver poderes) ou false (quando não tiver
poderes). Faça isso para todos os personagens.

*/

const data = require('./dataBase')

function isFighter(){
        data.characters.forEach((character) => {
        let personagem = []
        if(character.powers.length != 0){
           character.isFighter = true
        } else {
           character.isFighter = false
        }
    })  
     return data.characters
}

console.log(isFighter())