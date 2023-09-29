// let promise1 = new Promise ( function (resolve, reject) {
//     function task1(){
//         console.log(`The async task is done`)
//         resolve()
//     }
//     setTimeout (task1 , 1000 ) 
// }  )


// promise1.then( function(){
//     console.log(`Promise1 is consumed`)
// } )



// let promise2 = new Promise( function(resolve, reject){
//     function task2(){
//         console.log(`The task2 is done also`)
//         resolve()
//     }
//     setTimeout(task2 ,1000)
// } )


// promise2.then( function(){
//     console.log(`The async task2 is cosumed successfully`)
// })




// let promise3 = new Promise( function(resolve, reject){
//     function task3(){

//         resolve( {
//             email: "foty.com",
//             name: "putkuu"
//         } )
//     }
//     setTimeout( task3 , 1000 )
// } )

// promise3.then( function(user){
// console.log(user)
// } )


// very very important for database cases

let promise4 = new Promise( function(resolve, reject){
    function task4(){
        let error = false;
        if( error === false ){
            resolve( {username: "Bulu", title: "fotuu"} )
        }
        else{
            reject(` Something went wrong`)
        }
    }
    setTimeout( task4, 1000)
} )

promise4.then( (user) => {
console.log(user)
return user.username
} )
.then ( (username) => {
console.log(username)
} )
.catch(function (err) {
    console.log(err)
})