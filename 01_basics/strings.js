const name="abhishek"
const repocount=50
// console.log(`hello my name is ${name} my rapo count is ${repocount}`);

const gameName =new String('abhishek')
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('s'));
// console.log(gameName.length);

const newstring=gameName.substring(0,4)
console.log(newstring);
 
const anotherstring=gameName.slice(-8,3)
console.log(anotherstring);

const newSringOne="  abhi   "
console.log(newSringOne);
console.log(newSringOne.trim());

const url="https://abhishek.com/abhishek%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('abi'))

const constantstring="hello world"
document.body.innerHTML=constantstring.big();
console.log(constantstring);


