//You can copy arrays and objects by value by running a loop
let arr1 = [1,2,3,4,5,6];
let arr2 = [];
// suppose you need to copy the content of arr1 to arr2
for(let i=0;i<arr1.length;i++)
{
  arr2.push(arr1[i]);
}
console.log(arr2);
