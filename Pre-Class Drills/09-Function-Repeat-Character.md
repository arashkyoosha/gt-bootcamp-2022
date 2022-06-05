 Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

 Ex:
 Input: “the quick brown fox jumps over the calm kitten quietly”
 Output: "b"

 Input: “this hat is the greatest!”
 Output: "g"

 Input: “what a wonderful day it has been!”
 Output: "o"

```js
 function firstNonRepeatChar(str) {
 	for (var i = 0; i < str.length; i++) {
 		var char = str[i];
 		var count = 0;
 		
 		for (var j = 0; j < str.length; j++) {
 			if (str[j] === char) {
 				count++;
 			}
 		}

 		if (count === 1) {
 			return char;
 		}
 	}
 }
```

OR

```js
 function firstNonRepeatChar(str){
 	var charCount = {};
 	for (var i = 0; i < str.length; i++) {
 		var char = str[i];
 		if (charCount[char]) {
 			charCount[char]++;
 		}
 		else {
 			charCount[char] = 1;
 		}
 	}
 	for (var j in charCount) {
 		if (charCount[j]===1) {
 			return j;
 		}
 	}
 }  
```