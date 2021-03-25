// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
    function mean(a,b){
        a = a+b;
        a = a/2;
        return a;
    }
    let n = +userInput[0];
    let arr1 = userInput[1].split(" ").map(x=>+x);
    let arr2 = userInput[2].split(" ").map(x=>+x);
    let arr3 = arr1.concat(arr2);
    arr3.sort(function (a,b){return a-b});
    console.log( mean( arr3[n] , arr3[n-1] ) );
});
