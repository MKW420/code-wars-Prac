//Sum of all the multiples of 3 or 5

const { stringLength } = require("@firebase/util");


function  findSum(n){
    let result = 0;
    //the for loop will loop over every numver that is less than the number recieved in the function and check if its a multiple of 3 or 5
    for(let i=0; i <= n; i++ ){
        //check if its the multiple of 5 or 3 
        if(i% 3 === 0 ||  i%5 === 0){
            result++;

        }
    }
     return result

}

//reverse letters in a string

// function reverseletter(str){
   
   
//     var letter = str.spilt('')
//     var reverseArr = letter.reverse()
//    var joinArr = reverseArr.join('')
  

//    return joinArr
   

// }

function reverseletter(str){
   
    const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');
}