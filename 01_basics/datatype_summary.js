// java is a dynamic type language

// primtive()
// 7 types: string,number,boolean,null,undefind,symbol,bigint


const score=100  //  number
const scorevalue=100.3 //number
const isLoggedIn=false //boolean
const outsideTemp=null //object
let userMail; //undefind

// const id = symbol('123')
// const anotherId = symbol('123')

const bigNumber=25436542345435

console.log(typeof bigNumber); //number

//reference(non primtive)

//array,objects,funcations

const heros=["shaktiman","nagraj","doga"] //object
let myobj={
    name:"abhishek",   //object
    age:22,
}

const myFuncation=function(){
    console.log("hello word!");  //funcation
}

console.log(typeof myFuncation);



// +++++++++++++++++++++++++++++++++++

//stack(primitive),heap(non-primitive)
let youtubename="abhisheklife"
let anothername=youtubename
anothername="newlife"

console.log(anothername)