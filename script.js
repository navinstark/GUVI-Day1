// const productsRequest = new XMLHttpRequest();

// productsRequest.onload = function () {
//   console.log(JSON.parse(this.responseText));
// };

// productsRequest.onerror = function (event) {
//   console.log(event);
// };

// productsRequest.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// productsRequest.send();

const obj1={
  Task:"Day1",
  Name:"Arjun",
  age:23,
  Batch:57
}
const obj2={
  Task:"Day1",
  Name:"Naveen",
  age:25,
  Batch:57,
} 
obj1.Task="day2";
console.log(obj1);