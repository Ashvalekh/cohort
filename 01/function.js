// function findsum(n){
//     let ans = 0;
//     for (let i = 1; i<=n; i++){
//         ans = ans+i;
//     }
//     console.log(ans);
// }

// findsum(9)

// function square(n){
//     return n*n
// }

// function sumOfSquare(a,b){
//     let c = square(a)
//     let d = square(b)
//     return c+d
// }

// console.log(sumOfSquare(2,4))

// CallBack

function square(a){
    return a*a
} 

function cube(a){
    return a*a*a
}

function sumOfsomething(b,c,fn){
    console.log(fn)
    let val1 = fn(b)
    let val2 = fn(c)
    return val1+val2
}

console.log(sumOfsomething(3,4,function (a){
    return a*a*a
}))