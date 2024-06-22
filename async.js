
// function findSum(n){
//     let ans = 0;
//     for(let i = 1; i<=n; i++){
        
//         ans = ans + i;
//     }
//     return ans;
    
// }

// function waitTill(){
//     console.log(findSum(100))
// }

// setTimeout(waitTill,3000)
// console.log("hello world")

// rading a file using fs.readfile

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data)
// })

// console.log("holla amigos")

//promises

// const fs = require("fs")

// function ahureads(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             resolve(data)
//         })
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// ahureads().then(onDone)

// var d = new Date();

// console.log(d.getDate())

// let p = new Promise(function(resolve){
//     resolve("hi there")
// })
// console.log("teri maa ki")
// p.then(function(){
//     console.log(p)
// })

// console.log("ooski maaki")

function ashuAsync(){
    let p = new Promise(function(resolve){
        //do some async logic here
        setTimeout(function(){

           resolve( "hi there!")
        }, 3000)
    })
    return p
}

async function main(){
    // ashuAsync().then(function(value){
    //     console.log(value)
    // })
    let value = await ashuAsync();
    console.log(value)
    console.log("hi there 1")
    //  console.log(value)

}

main()