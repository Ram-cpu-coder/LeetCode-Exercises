// Find the Original Typed String I

// Alice is attempting to type a specific string on her computer. However, she tends to be clumsy and may press a key for too long, resulting in a character being typed multiple times.

// Although Alice tried to focus on her typing, she is aware that she may still have done this at most once.

// You are given a string word, which represents the final output displayed on Alice's screen.

// Return the total number of possible original strings that Alice might have intended to type.



// const word = "abcd";

const possibleStringCount = (word)=>{
    let possibleWords = new Set();
    possibleWords.add(word);

    for(i = 0; i < word.length - 1; i++){
        if(word[i] === word[i+1]){
            let originalWords = word.slice(0, i+1) + word.slice(i+2);
            possibleWords.add(originalWords);
            
        }
        console.log(possibleWords);
    }
    return possibleWords.size;
}
console.log(possibleStringCount("abbcccc"));

// =====================================================================================================