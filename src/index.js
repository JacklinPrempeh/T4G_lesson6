// alert('Hi my name is Jacklin');
// let name=prompt('What is your name?');
// let hometown='ashanti';
// let age='18';
// // alert(name);
// // alert('hello '+ name +' welcome to my website');
// alert(`hi${name} ,from${hometown},who is ${age},welcome to my page`)
// let title=prompt('what is your title');
// let name=prompt('what is your name');
// let product=prompt('what is your preferred product');
// alert(`Hi ${title} ${name},do you like ${product}?`);
// let message ="hello there";
// let message1 =message + " you are welcome";
// let message2 =(`${message} I am happy to see you`);
// console.log(message1);
// console.log(message2);
// let name=prompt('What is your name?'); //taking the name of user
// let  age=prompt('Tell us your age');//taking the user age "12"
// let email=prompt('Enter your email');//taking the user email
// if (age < 12) { // checking if the user is less than 12
//     alert(`Hi ${name}, you are ${age} years old and you are too young to register.sorry😔😔 `);
// } else if(age > 12 && age < 18) { // checking if the user is between ages of 12 and 18
//     alert(`Hi ${name}, you are ${age} years old and you have limited options to register for.We will keep in touch via ${email}👋👋`)
// }
// else if(age == 18 || age > 18){ // checking if user is 18 or above
//     alert(`Hi ${name}, you are ${age} years old and you have unlimited options to register.You are eligible to discounted offers and we will keep in touch via ${email}👋👋`)
// } else {
//     alert(`you must be ${age}`);
// }
// let name=prompt('what is your name');
// // let content=prompt('message');
// let hey=document.getElementById('hey');
// hey.innerHTML=`hey ${name}`;

function findMe(){ //function to execute
    let pFour=document.getElementById('pfour');// selecting the fourth paragraph
    pFour.style.display='block';// styling using display
    }

let pThree=document.getElementById('pthree'); //Selecting the third paragraph
pThree.addEventListener("dblclick", findMe);//adding event listener to the third paragraph


function changewidth(){
    let pOne=document.getElementById('pone');
    pOne.style.width='500pt';
    pOne.style.backgroundColor="pink";
    
}
let pOne=document.getElementById('pone');
pOne.addEventListener('click',changewidth);


function changesize(){
    let pTwo=document.getElementById('ptwo');
    pTwo.style.width='500pt';
    pTwo.style.backgroundColor="red";}

    let pTwo=document.getElementById('ptwo');
    pTwo.addEventListener('mouseenter',changesize);  
    
    
    