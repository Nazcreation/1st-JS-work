//Q #01

alert("Erum");

//Q #02
var myName=("Erum Abid");

alert("Hello my name is "+myName+"& I am a student of SMIT");
console.log("Hello,my name is "+myName+"& I am a student of SMIT");

//Q #03
var a=(4)
var b=(2)
var c=(a++ + --b - --a + b++ +a +b);
console.log(c);

// Q# 05
var Institute = prompt("In which institute do you study?");
var Course = prompt("Which course do you study?");
var Batch = prompt("Which batch do you belong to?");
var Name = prompt("What is your name?");
var Days = prompt("How many days do you study?");
var Age = prompt("How old are you?");
var Address = prompt("What is your address?");
var Phone = prompt("What is your phone number?");
var Email = prompt("What is your email address?");
var StudentInfo = "Name: "+Name+"\nCourse: "+Course+"\nBatch: "+
Batch+"\nAge: "+Age+"\nAddress: "+Address+"\nPhone: "+Phone+"\
\nEmail: "+Email+"\nInstitute: "+Institute;
alert(StudentInfo);

if (Institute === "SMIT" && Course === "Web And App" && Days === "Tuesday & Saturday"&& Age >=20){
    alert("you are allowed");
}
else{
    alert("You are not allowed");
}


