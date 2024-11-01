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

const binary = "11111100100-1011-1";
let year = binary.split("-")[0];
let month = binary.split("-")[1];
let day = binary.split("-")[2];

console.log(year, month, day);

const binaryToDecimal =(inputBinary)=>{
    let result = 0;
    const lastIndex = inputBinary.length;
    for(let i = 0; i < lastIndex; i++){
        result += parseInt(inputBinary[i] * 2**(lastIndex-1-i));
        // console.log(result);
         
    }
    return result;
}
console.log(binaryToDecimal(year));
console.log(binaryToDecimal(month));
console.log(binaryToDecimal(day));


