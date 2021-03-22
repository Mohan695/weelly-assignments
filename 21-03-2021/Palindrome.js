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
    function isPalindrome(str){
        let n = str.length;
        for(let i=0;i<Math.floor(n/2);i++)
        {
            if(str[i]!=str[n-1-i])
            return false;
        }
        return true;
    }
   let n = +userInput[0];
   let arr = userInput[1].split(" ");
   for(let i=0;i<n;i++)
   {
       if(isPalindrome(arr[i]))
       {
           console.log(arr[i]);
       }
   }
});
