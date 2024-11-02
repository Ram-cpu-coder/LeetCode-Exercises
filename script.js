// Find the Original Typed String I

// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

// Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

// You are given a string word, which represents the final output displayed on Alice's screen.

// Return the total number of possible original strings that Alice might have intended to type.



// const word = "abcd";

// const possibleStringCount = (word)=>{
//     let possibleWords = new Set();
//     possibleWords.add(word);

//     for(i = 0; i < word.length - 1; i++){
//         if(word[i] === word[i+1]){
//             let originalWords = word.slice(0, i+1) + word.slice(i+2);
//             possibleWords.add(originalWords);

//         }
//         console.log(possibleWords);
//     }
//     return possibleWords.size;
// }
// console.log(possibleStringCount("abbcccc"));

// =====================================================================================================
// Convert Date to Binary

// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

// date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.

// Return the binary representation of date.
// const date = "2070-02-29";
// let year = parseInt(date.split("-")[0]);
// let month = parseInt(date.split("-")[1]);
// let day = parseInt(date.split("-")[2]);

// console.log(year, month, day);

// const decimalToBinary = (decimal)=>{
//     let binary ='';
//     if(decimal === 0){
//             return 0;
//         }
//     while(decimal > 0){
//         const remainder = decimal % 2;
//         binary = remainder + binary; 
//         decimal = Math.floor(decimal/2);

//     }
//     return binary;  
// }
// console.log(`${decimalToBinary(year)}-${decimalToBinary(month)}-${decimalToBinary(day)}`);


// =====================================================================================================

// BINARY TO DECIMAL

// const binary = "11111100100-1011-1";
// let year = binary.split("-")[0];
// let month = binary.split("-")[1];
// let day = binary.split("-")[2];

// console.log(year, month, day);

// const binaryToDecimal =(inputBinary)=>{
//     let result = 0;
//     const lastIndex = inputBinary.length;
//     for(let i = 0; i < lastIndex; i++){
//         result += parseInt(inputBinary[i] * 2**(lastIndex-1-i));
//         // console.log(result);

//     }
//     return result;
// }
// console.log(binaryToDecimal(year));
// console.log(binaryToDecimal(month));
// console.log(binaryToDecimal(day));



// =====================================================================================================

// You are given two strings, coordinate1 and coordinate2, representing the coordinates of a square on an 8 x 8 chessboard.

// Below is the chessboard for reference.



// Return true if these two squares have the same color and false otherwise.

// The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first (indicating its column), and the number second (indicating its row).

// const checkTwoChessboards = (input1, input2) => {
//     const numA = parseInt(input1.toString()[1]);
//     const numB = parseInt(input2.toString()[1]);

//     if (numA === 0 || numB === 0) {
//         return `You can not enter zero`;
//     }
//     while (numA, numB > 0) {
//         let result = numA + numB;
//          if (result % 2 === 0) {
//         return `The square of this co-ordinate is black.`
//     } else {
//         return `The square of this co-ordinate is white.`
//     }
//     }

// console.log(numA, typeof numA);
// console.log(numB, typeof numB);
// }
// console.log(checkTwoChessboards("a1", "h3"));


// =====================================================================================================

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

//  const lengthOfLongestSubstring = (s)=>{
//     let right = 0;
//     let left = 0;
//     let maxLength = 0;
//     let possibleStr = [];

//     for(right = 0; right < s.length-1; right++){

//         while(possibleStr.includes(s[right])){
//             delete possibleStr[left];
//             left++;
//         }
//         possibleStr.push(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1)
//     }
//     console.log(possibleStr);

//     return maxLength;
//  }

//  console.log(lengthOfLongestSubstring("abcabcbb"));




// =====================================================================================================

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


// const multiplyStr = (num1, num2)=>{
//     let number1 = parseFloat(num1);
//     let number2 = parseFloat(num2);

//     let result = number1 * number2;
//     return result.toString();
// }
// console.log(multiplyStr("23", "34"));


//calculation in leetcode is wrong for 123456789 * 987654321
// =====================================================================================================






// =====================================================================================================
// Exercise 1: Create an array called numbers with the following values: [1, 3, 5, 7, 9]. Perform the following operations:

// const arr = [1, 3, 5, 7, 9];
// // Log the second element of the array.
// console.log("1) " + arr[1]);

// // Change the first element to 0.
// console.log("2) "  + arr[0]);
// arr[0] = 0;
// console.log("3) " + arr[0]);

// // Add the number 10 to the end of the array.
// arr.push(10);
// console.log("4)", arr);

// // Remove the last element of the array.
// arr.pop();
// console.log("5)", arr);

// // Log the length of the array.
// const len = arr.length;
// console.log("6) ",len);

// // Use a for loop to log each number in the array.
// for(let i = 0; i < len; i++){
//     console.log("7."+(i+1)+")" ,arr[i]);
// }

// // Use the forEach() method to log each number.
// arr.forEach((item, i)=>{
//     console.log("8."+(i+1)+") " + item);
// })
// // Create a new array called squaredNumbers that contains the squares of each number using map().
// const squaredNumbers = arr.map((item)=>{
//     return item * item;
// });
// console.log("9)",squaredNumbers);

// // Create a new array called evenNumbers that contains only the even numbers from numbers using filter().
// arr.push(2,4,6,8);
// const evenNum = arr.filter((item, i)=>{
//     if(item % 2 === 0){
//         return item;
//     }
// })
// console.log("10)", evenNum);

// // Use the reduce() method to find the sum of all numbers in the array.
// const sum = arr.reduce((acc, item)=>{
//     return acc + item;
// },0);
// console.log(arr);
// console.log("11)", sum);

// // Check if there is any number greater than 5 using some().
// const gT5 = arr.some((item)=>{
//     return item > 5;
// })
// console.log("12)",gT5);

// // Check if all numbers are less than 10 using every().
// const lT10 = arr.every((item)=>{
//     return item < 10;
// })
// console.log(arr);
// console.log("13)",lT10);

// // Find the first number that is greater than 4 using find().
// const firstGt4 = arr.find((item)=>{
//     return item > 4;
// })
// console.log("14)" , firstGt4);

// // Create another array called moreNumbers with values [2, 4, 6] and combine it with numbers using concat().
// const moreNumbers = [2, 4, 6];
// const totalNewArr = arr.concat(moreNumbers);
// console.log("15)",totalNewArr);

// // Sort the numbers array in ascending order using sort().
// const sorted = totalNewArr.sort()
// console.log("16)",sorted);
// //descending 
// const descSorted = totalNewArr.sort((a,b)=>{
//     return b-a
// })
// console.log(descSorted);

// // Reverse the numbers array using reverse().
// const reversed = totalNewArr.reverse();
// console.log("17)",reversed);

// // Create a new array called firstTwoNumbers that contains the first two elements using slice().

// const firstTwoNumbers = totalNewArr.slice(0,2);
// console.log("18)",firstTwoNumbers);

// // Remove the second element of the numbers array using splice().
// const spliced = totalNewArr.splice(1,1)
// console.log("19)", totalNewArr);

// // Create a string from the numbers array where each number is separated by a hyphen using join().
// const arrToStr = totalNewArr.join("-");
// console.log("20)", arrToStr, "Data type:",typeof arrToStr);

// // Log the final state of the numbers array.
// console.log("21)", totalNewArr);

// =========================================================================================================


// Similar Exercises


// Exercise 2: Create an array called `colors` with values `["red", "green", "blue"]`.  
//    - Add two colors to the end of the array, then remove the first color.
//    - Check if the color "purple" exists in the array, and if not, add it.
const colors = ["red", "green", "blue"];
console.log(colors);
const addedColors = colors.push("pink", "yellow");
console.log(colors);

const checkColor = colors.some((item) => {
    return item === "purple";
})
if (!checkColor) {
    colors.push("purple")
};
console.log(checkColor, colors);

// Exercise 3: Create an array called `ages` with values `[22, 25, 30, 35]`.
//    - Remove the last age, add two new ages at the beginning, and sort the array in descending order.
const ages = [22, 25, 30, 35];

const removedAges = ages.pop();
console.log("Removed item: " + removedAges, ages);

ages.unshift(12, 45);
console.log(ages);

const reversedAges = ages.sort((a, b) => { return b - a })
console.log(reversedAges);


// Exercise 4: Create an array called `pets` with values `["dog", "cat", "rabbit"]`.
//    - Replace "cat" with "hamster", then reverse the array.
//    - Check if "turtle" is in the array; if not, add it.
const pets = ["dog", "cat", "rabbit"];
pets[1] = "hamster";
pets.reverse();
console.log(pets);

const turtle = (arr, str) => {
    const checkPets = arr.some((item) => { return item === str });
    if (!checkPets) {
        arr.push(str);
    }
    return arr;
}

console.log(turtle(pets, "turtle"));


// Exercise 5: Create an array called `scores` with values `[95, 85, 75, 65]`.
//    - Sort the scores in ascending order, then add 90 at the correct position to maintain the order.

const scores = [95, 85, 75, 65];
console.log("Scores", scores);

scores.sort();
console.log("Sorted scores before adding element:", scores);

const addAndSort = (arr, score) => {
    arr.push(score);
    arr.sort();
    console.log("Added and Sorted scores:", arr);
}
addAndSort(scores, 90);


// Exercise 6: Create an array called `hobbies` with values `["reading", "swimming", "coding"]`.
//    - Remove the first hobby, add "traveling" at the end, and find the index of "coding".
const hobbies = ["reading", "swimming", "coding"];
console.log("Hobbies:", hobbies);

const remove_add_find = (arr, str, findIndexOf)=>{
    arr.shift();
    arr.push(str);
    const Index = arr.indexOf(findIndexOf);

    console.log(`First item is removed and ${str} is added at the end.`);
    console.log(arr);
    console.log(`Index of ${findIndexOf} is ${Index}`); 
}
remove_add_find(hobbies, "travelling", "coding");

// Exercise 7: Create an array called `days` with values `["Monday", "Tuesday", "Wednesday"]`.
//    - Add "Thursday" at the end, "Sunday" at the beginning, then remove "Tuesday" from the array.

const days = ["Monday", "Tuesday", "Wednesday"];
console.log("Days:", days);

const add_remove = (toAddFront, toAddEnd, toRemove, arr)=>{
    arr.unshift(toAddFront);
    arr.push(toAddEnd);
    delete arr[toRemove];

    console.log(toAddFront, "is added in the front and", toAddEnd, "is added in the end and", toRemove, "is removed." );
    
}
add_remove("Sunday", "Thursday", "Tuesday", days);
console.log(days);

// Exercise 8: Create an array called `temperatures` with values `[30, 25, 20, 15]`.
//    - Reverse the array, then add 10 at the beginning and 35 at the end. Sort it in ascending order.

// Exercise 9: Create an array called `books` with values `["Book A", "Book B", "Book C"]`.
//    - Replace "Book B" with "Book D" and add "Book E" to the start of the array.
//    - Remove the last book and check if "Book F" exists.

// Exercise 10: Create an array called `numbers2` with values `[10, 20, 30, 40]`.
//    - Insert `25` between `20` and `30`, then remove the first element. Sort in descending order.

// Exercise 11: Create an array called `movies` with values `["Inception", "Titanic", "Avatar"]`.
//    - Add a new movie at the beginning, then check if "Titanic" is in the array and remove it.

// Exercise 12: Create an array called `months` with values `["January", "February", "March"]`.
//    - Add "December" at the end, then sort the array in alphabetical order.

// Exercise 13: Create an array called `shapes` with values `["circle", "square", "triangle"]`.
//    - Replace "square" with "rectangle" and add a new shape at the end. Remove the first element.

// Exercise 14: Create an array called `numbers3` with values `[5, 10, 15, 20]`.
//    - Insert `12` between `10` and `15`, then remove the last element and find the sum of all elements.

// Exercise 15: Create an array called `cities` with values `["New York", "Los Angeles", "Chicago"]`.
//    - Add two cities at the beginning, then remove one from the end and sort the array alphabetically.

// Exercise 16: Create an array called `products` with values `["Apples", "Oranges", "Bananas"]`.
//    - Add "Grapes" at the end, remove the first product, and reverse the order.

// Exercise 17: Create an array called `languages` with values `["English", "Spanish", "French"]`.
//    - Add "German" after "Spanish", then remove the last element and sort the array in alphabetical order.

// Exercise 18: Create an array called `vehicles` with values `["Car", "Bike", "Bus"]`.
//    - Add "Truck" at the start, check if "Car" is in the array, and remove it if present.

// Exercise 19: Create an array called `instruments` with values `["Guitar", "Piano", "Drums"]`.
//    - Add "Violin" at the correct position in alphabetical order, then reverse the array.

// Exercise 20: Create an array called `events` with values `["Concert", "Festival", "Exhibition"]`.
//    - Add "Parade" to the start, remove the last event, and sort the array in alphabetical order.

// Exercise 21: Create an array called `numbers4` with values `[3, 6, 9, 12]`.
//    - Add `15` at the end, remove the second element, and calculate the average of all numbers.