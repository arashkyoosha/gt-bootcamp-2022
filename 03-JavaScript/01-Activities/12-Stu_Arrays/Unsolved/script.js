// WRITE YOUR CODE HERE

var students = ["Arashk", "Sanam", "Oras", "Ava", "Tannaz", "Shahin"]

console.log(students)
console.log(students.length)

students.forEach(student => {
    console.log("Welcome to the class " + student)
});

students[0] = "Arta";

if (students[0] !== "Arashk") {
    console.log(students[0] + " is in class!")
}