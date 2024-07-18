let array = [1,2,3,4]
//  let NewArray = []
// array.forEach(e => {
//     NewArray.push(e*2)
// });
// console.log(NewArray);

// function transform(i){
//     return i*2
// }

// const ans = array.map(transform)
// console.log(ans);

// array.forEach(e => {
//     if (e%2==0) {
//         NewArray.push(e)
//     }
// });

// for(let i=0; i<=array.length; i++){
//     if(array[i]%2 == 0){
//         NewArray.push(array[i])
//     }
// }

function filterlogic(n){
    if(n%2==0){
        return true
    }else{
        return false
    }
}

const ans = array.filter(filterlogic)
console.log(ans);
// console.log(NewArray);