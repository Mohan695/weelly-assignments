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
    function rotArray(arr,n,k)
    {
        k = k%n;
        if(k===0)
        return arr;
        let b = []
        for(let i=k;i<n;i++)
        {
            b.push(arr[i]);
        }
        for(let i=0;i<k;i++)
        {
            b.push(arr[i]);
        }
        return b;
    }
    let n = +userInput[0]; //size of Array
    let arr = userInput[1].split(" ").map(x=>+x);
    let k = +userInput[2];
    let ans = rotArray(arr,n,k);
    console.log(ans.join(" "));
});
