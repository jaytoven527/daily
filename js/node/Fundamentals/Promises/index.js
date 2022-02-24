// let p = new Promise((resolve, reject) => {
//    let sum = 2 + 2;
//    if (sum === 4){
//        resolve('correct/!')
//    } else {
//        reject('incorrect')
//    }
// })

// p.then((response) => {
//    console.log('This is what happens when things are successful: ' + response)
// }).catch((response) => {
//    console.log('This is what happens when something fails: ' + response)
// })
fetch("http://localhost:3000/movies")
.then(response => response.json())
.then(json => console.log(json))

