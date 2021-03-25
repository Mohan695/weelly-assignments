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
    let n = +userInput[0]; //size of Array
    let arr = userInput[1].split(" ").map(x=>+x);
    let uniq = [];
    for(let i=0;i<n;i++)
    {
        if(uniq.indexOf(arr[i])=== -1)
        uniq.push(arr[i]);
    }
    console.log(uniq.join(" "));
});
