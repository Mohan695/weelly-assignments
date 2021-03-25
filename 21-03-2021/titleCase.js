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
    
    let arr = userInput[0].split(" ");
    let n = arr.length;
    for(let i=0;i<n;i++)
    {
        arr[i] = arr[i].toLowerCase();
        let dummy = arr[i].split("");
        dummy[0] = dummy[0].toUpperCase();
        dummy = dummy.join("");
        arr[i]=dummy;
    }
    console.log(arr.join(" "));
});
