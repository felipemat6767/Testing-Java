
const {sum } = require ("./app.js")

test("adds 14 + 9 to equal 23", ()=>{
let total = sum(14,9)

expect(total).toBe(23)
})


test("One euro should be 1.206 dollars", function(){
  
    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 127.9 yen", function(){
 const { fromDollarToYen } = require("./app.js")

 const  Yen = fromDollarToYen(4.2)

 const expected = 4.2 * 109.6

 expect(fromDollarToYen(4.2)).toBe(457.8)

})


test ("One euro should be 0,8 Pounds", function(){

    const {fromYenToPound} = require("./app.js")

    const Pound = fromYenToPound(20)

    const expected = 20 * 0.006

    expect(fromYenToPound(20)).toBe(0.12)

})