// object


 var heba = {
    fullName: "Heba eldesouky ",
     age: 21,
    gender: "female",
    hobbies : " reading",
    city:"fayoum",
    jop : false
    
 }

 console.log(heba);
 console.log( heba .fullName);
 console.log(heba.gender);
 heba.birthday =(1/11)
 console.log(heba);
 heba.city="cairo"
console.log(heba);
delete heba .jop
console.log(heba);


 // المصفوفة 
 var fruits = ["apple","banana","orange","blueberry"];
 console.log(fruits);
 console.log(fruits[3]);
 
 fruits.push =("strawberry");
 console.log(fruits);
 console.log(fruits.sort());
 fruits.unshift =("cherry");
 console.log(fruits);
 fruits.pop();
 console.log(fruits);
 fruits.shift();
 console.log(fruits);
 fruits.splice(0,1);
 console.log(fruits);
 fruits.reverse();
 console.log(fruits);
 
 // srting
 var string = ("Hello My Name Heba");
 var check = string.toLowerCase();
 console.log(check);
 var check = string.toUpperCase();
 console.log(check);
 var check = string.trimEnd();
 console.log(check); 
var check =string.trimStart(); 
console.log(check);
var check = string.trim();
console.log(check);
var check = string. split(" ");
console.log(check);

//  the DOM الجزء المسؤول للتعامل مع كود html
var element =document .getElementsByClassName ("item");
console.log(element);

var element = document .getElementById ("heba");
 console.log(element);

 var element = document .getElementsByTagName ("p");
 console.log(element);
  var element = document .getElementsByName ("text");
 console.log(element);
 var element = document .querySelector (".item");
 console.log(element);
 var element = document .querySelectorAll (".item h1");
 console.log(element);
 var element = document .querySelectorAll ("div");
 console.log(element);



//--------------------------------------------------------
var headings =document.querySelectorAll("h2.tast");
function sayHello(userName){
   console.log("hello", userName);
   
}
  for ( var i =0; i< headings.length; i++){
   headings[i] .addEventListener
   ("click" , function() {sayHello("heba")})
  }
  
 
 
 
 
 
 
 
 
 
 


 
 

 
 