console.log(" welcome to my website");

console.log("this is log");
 console.info("this is an information");
 console.error("this is an error");
 console.warn("this is an warning");

// المتغيرات
var ftistName = "heba";
var lastName = "eldesouky"
var fullName = ftistName +lastName ;
var age = 21 ;
console.log("fullName" , fullName, typeof fullName);
console.log("age" , age , typeof age);


// العمليات الحسابية 
var num1=12;
 var num2=6;
 console.log(num1+num2);
 console.log(num1-num2);
 console.log(num1*num2);
 console.log(num1%num2);
 console.log(num1**num2);
 console.log(num1/num2);
 
 // المقارنة
 var num3 =13;
 var num4 =10;
 console.log(num3>num4);
 console.log(num3<num4);
 console.log(num3>=num4);
 console.log(num3<=num4);
 console.log(num3==num4);
 console.log(num3===num4);
 console.log(num3!=num4);


 // امثلة 
 var heba = "2" +1;
 console.log( "heba=" ,heba);

 var num = 10+23+10
 console.log( "num=" ,num);


 // حالة if
 if ( age > 20 ) {
   console.log("Hello 21")
 }
 // لمعرفة قيمة الرقم زوجي  و فردي 
var h=2;
if (h % 2 == 0) {
     console.log("Number is even");
 } else if (h % 2 == 1) {
     console.log("Number is odd");
 } else if (h < 0) {
    console.log("Number is less than zero");
} else {
     console.log("You must enter a number");
}

 
// التكرار

 // for
for ( var i= 1; i<=5; i++){
     console.log(i)
}

// while
var i=1;
while(i<= 3){
    console.log(i)
    i++
}

// do while 
var x = 1;
do {
  console.log( x);
  x++;
} while (x < 2);


// function

function getAvg(num1,num2){
    var sum=num1+num2;
    var getAvg=sum/2
    console.log("getAvg" ,getAvg )
 
}
getAvg(500,300)

// objects

 var heba = {
    fullName: "Heba eldesouky ",
     age: 21,
    gender: "female",
    hobbies : " reading"
 }
 console.log(heba);
 console.log(fullName);
 
 

    