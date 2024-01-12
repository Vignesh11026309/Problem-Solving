// //Left-Angle
// let a=5;
// let patternLeft= "";

// for(let i=0; i<a;i++){
//     for(let j=0; j<=i; j++){
//         patternLeft +="*";
//     }
//     patternLeft +="\n";
// }
// console.log(patternLeft);

//Right-Angle
// let b=5;
// let PatternRight= "";

// for(let i=0; i<b; i++){
//     for(let j=0; j<b-i; j++){
//         PatternRight+=" ";
//     }
//     for(let k=0; k<=i; k++){
//         PatternRight+="*";
//     }
//     PatternRight+="\n";
// }
// console.log(PatternRight);

//Downward left:~
// let c =5;
// let downLeft="";
// for(let i=0; i<c;i++){
//     for(let j=0; j<c-i; j++){
//         downLeft+="*";
//     }
//     downLeft+="\n";
// }
// console.log(downLeft);

//Downward right:
// let d = 5;
// let downRight="";
// for(let i=0; i<d; i++){
//     for(let j=0; j<i;j++){
//         downRight+=" ";

//     }
//     for(let k=0; k<d-i; k++){
//         downRight+="*";
//     }
//     downRight+="\n";
// }
// console.log(downRight);

// Triangle
// let a= 5;
// let patten ="";
// for(let i=0; i<2*a;i++){
//     let answer= i > a?2*a-i:i;
//     for (let j=0; j<answer; j++){
//         patten+="* ";
//     }
//     patten+="\n";
// }
// console.log(patten);

// let n=21;
// for(let i=2; i<=)
// if(n %2 !=0 ){
//     console.log("Hi Prime")
// }
// else{
//     console.log("Bye")
// }

// PRIME NUMBER:

// const number = parseInt(prompt("Enter a positive number: "));
// const number =2;
// let isprime = true;

// if(number === 1){
//     console.log ("1 is a prime number");

// }
// else if(number>1){

//     for(let i=2; i< number; i++){
//         if(number % i == 0){
//             isprime = false;
//             break;
//         }
//     }
//     if(isprime){
//         console.log(`${number} is a prime number.`);
//     }
//     else{
//         console.log(`${number} is not a prime number.`);
//     }
// }
// else{
//     console.log("The number is not a prime number");
// }

// MULTIPLICATION TABLE:


// const number = 5;

// for(let i =1; i<= 10; i++){
//     const result = i* number;

//     console.log(`${number} * ${i} = ${result}`)
// }

// FACTORIAL OF A GIVEN NUMBER 

// const number =-1;

// if(number<0){
//     console.log("The factorial of negative numbers doesn't exist");
// }

// else {
//     let fact = 1;
//     for(let i =1; i<= number; i++){
//         fact*= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}`);
// }

// FIBONACCI SERIES:

// const number =8;
// let n1=0, n2= 1, nextN, i;

// for(i=1; i<=number; i++){
//     console.log(n1);
//     nextN=n1+n2;
//     n1=n2;
//     n2=nextN;
// }

// The man is allowed to go out with his friends only on the even days
//  of a given month. Write a program to count the number of days he can go out in the month of August.

// const numberOfDays=31;
// let allowedDays=0;

// for(let i=1; i<=numberOfDays;i++){
//     if(i % 2 ==0){
//         allowedDays++
//     }
// }
// console.log(`A man allowed go out with his friends ${allowedDays} in August month`)

// const num1=5;
// const num2=0;
// const operator= '%'; 
// let result;

// if(isNaN(num1) || isNaN(num2)){
//     console.log("Invalid input");
// }

// switch(operator){
//     case '+':
//         result= num1 + num2;
//         break;
//     case '-':
//         result= num1 - num2;
//         break;
//     case '*':
//         result= num1 * num2;
//         break;
//     case '/':
//         if(num2 !=0){
//             result= num1 / num2;
//         }
//         else{
//             console.log("Cannot divide by zero")
//         }
//         break;
//     default:
//         console.log("Invalid operator");
// }
// if(result != undefined){
//     console.log(`Result: ${result}`);
// }

// ARMSTRONG NUMBER:

// const number=1634;
// const numLength = number.length;
// let sum =0;
//  let temp = number;
// while(temp > 0){
//     let remainder = temp % 10;
//     sum += remainder ** numLength;
//     temp = parseInt(temp/10);
// }
// if(sum == number){
//     console.log(`${number} is a Armstrong number`);
// }
// else{
//     console.log(`${number} is a Armstrong number`);
// }
















// function isPalindrome(word) {
//     return word === word.split('').reverse().join('');
    
// }


// function palindromePairs(words) {
//     const result = [];

//     for (let i = 0; i < words.length; i++) {
//         console.log(i);
//         for (let j = 0; j < words.length; j++) {
//             console.log(j);
//             if (i !== j) {
//                 const concatenated = words[i] + words[j];
//                 // console.log(words[i]);
//                 // console.log(words[j]);

//                 console.log(concatenated);
//                 if (isPalindrome(concatenated)) {
//                     // console.log(concatenated)
//                     result.push([i, j]);
//                     console.log(result);
//                 }
//             }
//         }
//     }

//     return result;
// }

// const words = ["abcd", "dcba", "lls", "s", "sssll"];
// const output = palindromePairs(words);
// console.log(output);
