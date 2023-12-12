/* assingment 0️⃣1️⃣ */
// var input = +window.prompt('insert number');
// console.log(input);

/* assingment 0️⃣2️⃣ */
// var input = +window.prompt('insert number');
// if (input % 4 === 0 && input % 3 === 0) {
//   console.log(input, 'yes');
// } else {
//   console.log(input, 'no');
// }

/* assingment 0️⃣3️⃣ */
// var num1 = +window.prompt('insert num 1');
// var num2 = +window.prompt('insert num 2');
// if (num1 > num2) {
//   console.log(num1);
// } else if (num2 > num1) {
//   console.log(num2);
// }

/* assingment 0️⃣4️⃣ */
// var num1 = +window.prompt('insert num 1');
// if (num1 >= 0) {
//   console.log(`${num1}: is positive`);
// } else if (num1 < 0) {
//   console.log(`${num1}: is negative`);
// }

/* assingment 0️⃣5️⃣  */
// var num1 = +window.prompt('insert num 1');
// var num2 = +window.prompt('insert num 2');
// var num3 = +window.prompt('insert num 3');

// function minMax(numOne, numTow, numThere) {
//   var min = numOne;
//   var max = numOne;
//   if (numTow > max && numTow > numThere) {
//     max = numTow;
//   } else if (numThere > max && numThere > numTow) {
//     max = numThere;
//   }
//   if (numTow < min && numTow < numThere) {
//     min = num2;
//   } else if (numThere < min && numThere < numTow) {
//     min = numThere;
//   }
//   return `min number : ${min}\n max number : ${max}`;
// }
// console.log(minMax(num1, num2, num3));

/* assingment 0️⃣6️⃣  */
// var number = +window.prompt('insert num 1');
// function oddEven(num) {
//   // This return false
//   if (num % 2) {
//     return `odd ${num}`;
//   } else {
//     return `even ${num}`;
//   }
// }
// console.log(oddEven(number));

/* assingment 0️⃣7️⃣ */
// var string = window.prompt('insert a word');
// function vowelChars(char) {
//   if (
//     char === 'a' ||
//     char === 'e' ||
//     char === 'I' ||
//     char === 'o' ||
//     char === 'u'
//   ) {
//     console.log(`'vowel': ${char}`);
//   } else console.log(`'Consonant': ${char}`);
// }
// vowelChars(string);

/* assingment 0️⃣8️⃣ */
// var num = +window.prompt('insert number');
// function rangeMax(max) {
//   for (var i = max; i > 0; i--) {
//     console.log(i);
//   }
// }
// rangeMax(num);

/* assingment 0️⃣9️⃣ */
// var number = +window.prompt('insert number');
// function multiplication(num) {
//   /*
//   stop loop for tableNumber
//   tableNumber => num + 1, = num string then concat with 0 then casting to trigger loop  up to 12
//   */
//   tableNumber = num + 1 + '0';
//   console.log(tableNumber);
//   console.log(`num start from ${num}`);
//   for (var i = num; i <= tableNumber; i += num) {
//     console.log(i);
//   }
// }

// multiplication(number);

/* assingment 1️⃣0️⃣ */
// var num = +window.prompt('insert number');
// function rangeMax(max) {
//   for (var i = 2; i < max; i += 2) {
//     console.log(i);
//   }
// }
// rangeMax(num);

/* assingment 1️⃣1️⃣ */
// var number = +window.prompt('insert number');
// var powerNum = +window.prompt('insert number');
// function power(num, power) {
//   return num ** power;
// }
// console.log(power(number, powerNum));

/* assingment 1️⃣2️⃣ */
// var numberMonth = +window.prompt('insert number');
// function month(month) {
//   var day = 31;
//   if (
//     month === 1 ||
//     month === 3 ||
//     month === 5 ||
//     month === 7 ||
//     month === 8 ||
//     month === 12
//   ) {
//     console.log(day);
//   } else console.log(--day);
// }
// month(numberMonth);

/* assingment 1️⃣3️⃣ */
// function Grad(...nums) {
//   var res = 0;
//   var Percentage;
//   for (var i = 0; i < nums.length; i++) {
//     res += nums[i];
//   }
//   Percentage = res / i;
//   if (Percentage >= 90) {
//     return `Percentage :is ${Percentage} : Grad A`;
//   } else if (Percentage >= 80) {
//     return `Percentage :is ${Percentage} : Grad B`;
//   } else if (Percentage >= 70) {
//     return `Percentage :is ${Percentage} : Grad C`;
//   } else if (Percentage >= 60) {
//     return `Percentage :is ${Percentage} : Grad D`;
//   } else if (Percentage >= 40) {
//     return `Percentage :is ${Percentage} : Grad E`;
//   } else if (Percentage < 40) {
//     return `Percentage :is ${Percentage} : Grad F`;
//   }
// }
// console.log(Grad(80, 50, 50, 50));

/* assingment 1️⃣4️⃣ */
// function total(...nums) {
//   var res = 0;
//   var Percentage;
//   for (var i = 0; i < nums.length; i++) {
//     res += nums[i];
//   }
//   Percentage = res / i;
//   console.log(`Total marks = ${res}`);
//   console.log(`Average Marks  = ${Percentage}`);
//   console.log(`Percentage = $${Percentage}`);
// }
// total(95, 76, 58, 90, 89);

/* assingment 1️⃣5️⃣ */
// var numberMonth = +window.prompt('insert number');
// function month(month) {
//   var day = 31;
//   switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 12:
//       console.log(day);
//       break;
//     default:
//       console.log(--day);
//   }
// }
// month(numberMonth);

/* assingment 1️⃣6️⃣ */
// var string = window.prompt('insert a word');
// function vowelChars(char) {
//   switch (true) {
//     case 'a' == char:
//     case 'e' == char:
//     case 'I' == char:
//     case 'o' == char:
//     case 'u' == char:
//       console.log(`'vowel': ${char}`);
//       break;
//     default:
//       console.log(`'Consonant': ${char}`);
//   }
// }

/* assingment 1️⃣7️⃣*/
// var num1 = +window.prompt('insert num 1');
// var num2 = +window.prompt('insert num 2');
// var num3 = +window.prompt('insert num 3');

// function minMax(numOne, numTow, numThere) {
//   var min = numOne;
//   var max = numOne;
//   switch (true) {
//     case numTow > max && numTow > numThere:
//       max = numTow;
//       break;
//     case numThere > max && numThere > numTow:
//       max = numThere;
//       break;
//     case numTow < min && numTow < numThere:
//       min = num2;
//       break;
//     case numThere < min && numThere < numTow:
//       min = numThere;
//       break;
//   }

//   return `min number : ${min}\n max number : ${max}`;
// }
// console.log(minMax(num1, num2, num3));

/* assingment 1️⃣8️⃣*/
// var num1 = +window.prompt('insert num ');
// function oddEven(num) {
//   switch (num % 2) {
//     case 0:
//       console.log(`even ${num}`);
//       break;
//     case 1:
//     default:
//       console.log(`odd ${num}`);
//   }
// }
// oddEven(num1);

/* assingment 1️⃣9️⃣ */

// var number = +window.prompt('insert number');
// switch (true) {
//   case number > 0:
//     console.log('positive number');
//     break;
//   case number < 0:
//     console.log('nigative number');
//     break;
//   case number === 0:
//     console.log('zero ');
// }

/* assingment 2️⃣0️⃣ */
// var num1 = +window.prompt('insert num 1');
// var num2 = +window.prompt('insert num 2');
// var operationType = window.prompt('insert  operation');
// function calculate(firstNum, secondNum, operation) {
//   var operation;
//   var result = '';
//   switch (operation) {
//     case 'add':
//       result = firstNum + secondNum;
//       break;
//     case 'subtract':
//       result = firstNum - secondNum;
//       break;
//     case 'multiply':
//       result = firstNum * secondNum;
//   }
//   console.log(result);
// }
// calculate(num1, num2, operationType);
