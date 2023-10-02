const names = [ 
  'Daniel', 'Maria', 'Marta', 'Juca', 'João', 'Jéssica'
]

let namesCount = names.reduce((count, nomeAtual) => {
    const firstLetter = nomeAtual[0].toLocaleLowerCase()
    if(count[firstLetter]){
        count[firstLetter]++
    } else{ 
        count[firstLetter] = 1
    }
    return count
}, {})

console.log(namesCount) 
