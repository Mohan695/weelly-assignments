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
    function isPrime(n){
        if(n==1||n==4||n==6)
        return false;
        if(n==2||n==3||n==5)
        return true;
        for(let i=2;i<=Math.sqrt(n);i++)
        {
            if(n%i===0)
            return false;
        }
        return true;
    }
   let n = +userInput[0];
   let arr = userInput[1].split(" ").map(x=>+x);
   for(let i=0;i<n;i++)
   {
       if(isPrime(arr[i]))
       {
           console.log(arr[i]);
       }
   }
});
