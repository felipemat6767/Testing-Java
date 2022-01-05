const sum = (a,b) => {
    return a + b
}

console.log((sum(7,3)))


 const fromEuroToDollar = (euro) => {
    return euro * 1.2
}

const fromDollarToYen = (Dollar) => {
    return Dollar * 109
}

const fromYenToPound = (Yen) => {
    return Yen * 0.006
}

module.exports= { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };