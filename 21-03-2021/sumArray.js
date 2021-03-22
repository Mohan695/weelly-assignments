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
   let n = +userInput[0];
   let arr = userInput[1].split(" ").map(x=>+x);
   console.log(arr.reduce(function (a,b){
       return a+b;
   }));
  //end-here
});
