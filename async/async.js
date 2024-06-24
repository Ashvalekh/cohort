// var fs = require('fs');

// let a = 0;
// console.log(a)

// fs.readFile("a.txt", "utf-8", function(err,data){
//     console.log("this is in the data: ",data)
    
// })

//     let ans = 0
//     for(let i=0; i<=10000; i++){
//         ans= ans+i
//     }

//     console.log(ans)

//  promises

function myownsettimeout(callback, duration){
    setTimeout(callback, duration)
}

myownsettimeout(function(){
    console.log("afterset timeout")
}, 1000)