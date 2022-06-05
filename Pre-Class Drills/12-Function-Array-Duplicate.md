Write a function that takes an array of integers as an input and outputs the first duplicate.

Ex:
Input: [ 2, 5, 6, 3, 5 ]
Output: 5

Input: [ 1, 3, 4, 1, 3, 4 ]
Output: 1

Input: [ 2, 4, 5 ]
Output: undefined

```js
var findDup = function (arr) {
	for (var i = 0; i < arr.length; i++){
		for (var j = 0; j < i; j++){
			if(arr[i] === arr[j]){
				return arr[i];
            }
        } 
    }
}
```

OR

```js
var firstDup = function(arr){
	var dups = {};
	for (var i = 0; i < arr.length; i++) {
		var val = arr[i]
		if (dups[val]) {
			return val;
		}
		else{
			dups[val] = true;
		}
	}
}
```