const testModule=require('./testModule');
const fs=require('fs')

var a=fs.readFileSync('abc.txt', 'utf-8');
console.log(a);
const b=a.split('\n');
let num1=parseInt(b[0]);
let num2=parseInt(b[1]);
console.log(b[0]+b[1]);
if(b[2]=='add') {
    let ans=testModule.add(num1, num2)
    ans=ans.toString();
    fs.writeFileSync('result.txt',ans);    
}
if(b[2]=='sub') {
    let ans=testModule.sub(num1, num2)
    ans=ans.toString();
    fs.writeFileSync('result.txt',ans);    
}