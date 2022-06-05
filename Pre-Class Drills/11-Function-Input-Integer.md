Write a function that takes in an input and returns true if it’s an integer and false otherwise.

Ex:
Input: "7"
Output: false

Input: 7
Output: true

Input: 4.3
Output: false

```js
var isInt = function (input) {
	return parseInt(input) === input;
}
```

OR

```js
var isInt = function (input) {
	return Math.floor(input) === input;
}
```