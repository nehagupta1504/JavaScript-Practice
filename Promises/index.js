console.log("Promises Js");

//reolve reject status
// let delivery = 4;
// let amazonPrime = new Promise((resolve, reject) => {
//   if (delivery <= 2) {
//     resolve("Product Delivered");
//   } else {
//     reject("Delivery Delayed");
//   }
// });

// amazonPrime
//   .then((message) => {
//     console.log(message); //sucessful execution
//   })
//   .catch((error) => {
//     console.log(error); //If rejected
//   });

// --------------------------------------------------------------------------------
//pending status
// let amazonPrime = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("printed after 3000 ms");
//   }, 3000);
// });
// //so its waiting 3ms thus this state is called pending status
// amazonPrime.then((msg) => {
//   console.log(msg);
// });

// --------------------------------------------------------------------------------
//Callbacks
//Why to move from callbacks to promises
//utubeCallback is invoking 2 functions callback & rejectcallback thus multiple callbacks happen called callback hell thus promises introduced
// let internet = true;
// function uTubeCallback(callback, rejectCallBack) {
//   if (internet) {
//     callback({ message: `User is watching Videos` });
//   } else {
//     rejectCallBack({ message: " No internet" });
//   }
// }
// uTubeCallback(
//   (response) => {
//     console.log(response.message);
//   },
//   (error) => {
//     console.log(error.message);
//   }
// );

//Converting to promise
// let internet = false;
// function uTubeCallback() {
//   return new Promise((resolve, reject) => {
//     if (internet) {
//       resolve({ message: `User is watching Videos` });
//     } else {
//       reject({ message: " No internet" });
//     }
//   });
// }
// uTubeCallback()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((rejecteMessage) => {
//     console.log(rejecteMessage);
//   });

// --------------------------------------------------------------------------------
//API CALL
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((response) => console.log(response));

//   fetch is itlsef a promise already defined in JS like amazonprime we made
//   at the top
//   It always take url as a paramter
