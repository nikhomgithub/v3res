const fs = require('fs');
const formTemplate = require('./formTemplate')

let tempArray1=[]
let tempArray2=[]

formTemplate.map((i,idx)=>{
    if(idx%2==0){
        tempArray1=[...tempArray1,i]
    }
    else {
        tempArray2=[...tempArray2,i]
    }

})

console.log('11111111111')
console.log('11111111111')

tempArray1.map(i=>{
    console.log(i)
})

console.log('22222222222')
console.log('22222222222')

tempArray2.map(i=>{
    console.log(i)
})