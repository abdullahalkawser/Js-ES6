// array.prototype.find() main array not chane //"খুঁজে বের করা


// var numbers = [1, 2, 3, 4, 5];

// var found = numbers.find(function(element) {
//     return element > 4;
// });

// console.log(found); 

// arow function 

// const results = numbers.find((data =>{
//     return data > 4
// }))
// console.log(results); 
// console.log(numbers); 


// User
// array.find(callback(element, index, array), thisArg) exmple



// Sample array of objects
// const students = [
//     { id: 1, name: 'Alice', age: 20 },
//     { id: 2, name: 'Bob', age: 22 },
//     { id: 3, name: 'Charlie', age: 25 },
//     { id: 4, name: 'David', age: 18 }
// ];

// // Callback function to find a student with age greater than 21
// const callback = (student) => {
//     return student.age > 21;
// };

// // Using the find() method with the provided syntax
// const result = students.find(callback);

// console.log(result); // Output: { id: 2, name: 'Bob', age: 22 }








// array কোনও নির্দিষ্ট শর্ত পূরণ করে তার মধ্যে প্রথম উপাদানের অনুসন্ধান করতে চান তখন মডার্ন জাভাস্ক্রিপ্টে ফাইন্ডইন্ডেক্স() মেথড ব্যবহার করা উপকারী 

// const numbers = [1, 2, 3, 4, 5]; // kono element nah thkle -1 dibeee 

// const index = numbers.findIndex((element) => {
//     return element > 6;
// });

// console.log(index); 



//কটি শর্ত অনুযায়ী মুদ্রণের উপরের মাধ্যমে filter() মেথড ব্যবহার করে অ্যারের সব উপাদানের মধ্যে ফিল্টার করেছি

// const numbers = [1, 2, 3, 4, 5,39,984,439];// not main array change


// const filteredNumbers = numbers.filter(function(number) {
//     return number > 3;
// });

// console.log(filteredNumbers); // new array banayyy



// array.slice(start, end) এটি একটি অ্যারের নির্দিষ্ট অংশ অনুসন্ধান করে এবং উত্তীর্ণ উপাদানগুলি থাকা অন্য একটি নতুন অ্যারে ফিরে পাঠায়। এটি মূল অ্যারের মধ্যে কোনও পরিবর্তন করে না।


// const array = ['a', 'b', 'c', 'd', 'e', 'f'];// orginal array not chbnage

// const newArray = array.slice(1, 2);

// console.log(newArray); 
// console.log(array); 


// Array splice() method


//array.splice(start, deleteCount, item1, item2, ...)

// const array = [1, 2, 3, 4, 5,100,7,8,9,0,78]; // main array chnae koree

// // শুরুতের তিনটি উপাদান মুছে ফেলুন
// const deletedItems = array.splice(3, 10);

// // console.log(array); // মুছে ফেলা উপাদানের পরিবর্তিত অ্যারে
// console.log(deletedItems); // আউটপুট - মুছে ফেলা উপাদানগুলির অ্যারে 


// concate
// array.concat(value1, value2, ..., valueN)

//concat() মেথডটি দুই বা একাধিক অ্যারে সংযোজন করে এবং এই অ্যারেগুলির নতুন অবস্থান সৃষ্টি করে।
// mainb array not cahnee

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const concatenatedArray = array1.concat(array2);

// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


// array push

// main array chnge koreeeee

// const array = [1, 2, 3];

// array.push(4, 5);

// console.log(array); // Output: [1, 2, 3, 4, 5]



//map() মেথডটি একটি অ্যারের প্রতিটি উপাদানের জন্য একটি ফাংশন কল করে এবং প্রতিটি ফাংশনের ফলাফল একটি নতুন অ্যারের উপাদান হিসেবে ফেরত পাঠায়। এই মেথডটি মূল অ্যারেটি পরিবর্তন করে না।

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number)=> {
//     return number * number;
// });

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


//reduce() মেথডটি একটি অ্যারের প্রতিটি উপাদানের উপরে একটি ফাংশন কল করে এবং একটি একক মান ফেরত পাঠায়। এই মানগুলি মৌলিক মানগুলির সংঘাত করে একটি একক মানে সংক্ষেপিত হয় এবং এই মানটি ফেরত পাঠায়। এই মেথডটি মূল অ্যারেটি পরিবর্তন করে না।  array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)



const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, currentValue,currentIndex, array) {
    return accumulator + currentValue;
}, 0);

console.log(sum); 







