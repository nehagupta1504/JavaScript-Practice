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
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

/*fetch is itlsef a promise already defined in JS like amazonprime we made 
  at the top
  It always take url as a paramter */

//! --------------------------------------------------------------------------------

//Promise.all

let api1 = new Promise((resolve, reject) => {
  resolve("Api 1 s");
});

let api2 = new Promise((resolve, reject) => {
  reject("Api 2 fails");
});

let api3 = new Promise((resolve, reject) => {
  reject("Api 3 sucess");
});

//to call all these multiple promises at once we use promiseall

// Promise.all([api1, api2, api3]).then((response) => {
//   console.log(response);
// });
Promise.race([api1, api2, api3])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
/*
        Output -- Array of results

            Promises Js
            index.js:102 
            (3) ["Api 1 sucess", "Api 2 sucess", "Api 3 sucess"]
            0: "Api 1 sucess"
            1: "Api 2 sucess"
            2: "Api 3 sucess"
            length: 3

*/

/* 
    If we want to have ith response we can use response[i]
    If we r passing single object in promise.all then also e have to pass in array brackest[]
*/

/* 
    If any one  of the promise response in reject then catch will be executed with
    the output if that promise which has been rejected.

*/

//Race Method - Everything is same as all method the only difference is in the return
//value the all method return responses of all apis in array
//while race will only return first api resonse

//Async await is syntactic sugar for promises

function asyncAwaitExample() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved");
    }, 5000);
  });
}

async function ayncCall() {
  console.log("calling");
  const result = await asyncAwaitExample();
  console.log(result);
  console.log("After called");
}

ayncCall();

/**
 * 
 * Output without await
        * index.js:1 Promises Js
        index.js:150 calling
        index.js:152 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
        index.js:153 After called
        index.js:106 Api 1 s
 */

/**
 * 
 * Output with await
      index.js:1 Promises Js
      index.js:150 calling
      index.js:106 Api 1 s
      index.js:152 Resolved
      index.js:153 After called
 */
