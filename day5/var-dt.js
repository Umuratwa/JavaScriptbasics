const subjects = ["chemistry", "biology", "mathematics"];
subjects[subjects.length] = "economics";
console.log(subjects);

const course = ["bio" , "geo" , "phys"];
course[course.length] ="math";
console.log(course);

let x = ["banana" , "orange" ,"mangoes"];
x.splice(x.indexOf ("orange") , 1);
console.log(x)

const books = ["bio" , "chem" , "phy" , "history"];
books.splice(books.indexOf("chem") ,1);
console.log(books)
 const b =["bio" , "chem" , "phy" ,];
 b[b.length] ="maths";
 console.log(b)
 const num = [20 , 30 , 40];
maxNumber = Math.max(...num);
console.log("the maximum number is:" , maxNumber);
const fruits = ["apple", "orange", "cherry"];

fruits.forEach(function(item, index, array) {
    console.log(item); // Print each item in the array
});

console.log(fruits);

const frui = ["mango" , "apple" , "orange"];
frui.forEach(function(item, index, array) {
    console.log(item)
}
)
console.log(frui)