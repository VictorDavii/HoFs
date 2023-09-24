//Existe 3 formas de usar funções...

//A primeira FUNÇÃO NOMINADA

function exemplo(num1, num2){
    return num1 + num2; 
};

console.log(exemplo(2,10));

//=====================================

//FUNÇÃO ANÔNIMA 
const exemple = function (num1, num2){
    return num1 + num2 ;
};

console.log(exemple(2, 10));

//======================================

//ARROW FUNCTION 
const arrowFunction = (num1, num2) => num1 + num2;

console.log(arrowFunction(2, 10));

//======================================

//HOFS - higher order functions


const timeGoku = ['GOKU', 'GOHAN', 'BULMA', 'MESTRE KAME'];

timeGoku.forEach((personagem) => {
    

    console.log `DBZ - ${personagem}`
})





