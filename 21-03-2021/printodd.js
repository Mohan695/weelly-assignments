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
  let n = +userInput[0];
  let arr = userInput[1].split(" ").map(x=>+x);
  for(let i=0;i<n;i++)
  {
    if(arr[i]&1)
    console.log(arr[i]);
  }
});
