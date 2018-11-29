// const p1 = new Promise((resolve, resject)=>{
//   resolve('task1');
// });
// p1.then((value)=>{
//   console.log(value);
// })
// console.log('task2');
// console.log('task3');

// task2
// task3
// task1

// Quiz 2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Chaining
// Added master read me to understand then funciton
// Promise.resolve('foo')
// .then(function(string) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       string += 'bar';
//       resolve(string);
//     }, 1);
//   });
// })
// .then(function(string) {
//   setTimeout(function() {
//     string += 'baz';
//     console.log(string);
//   }, 1)
//   return string;
// })
// .then(function(string) {
//   console.log("Last Then:  oops... didn't bother to instantiate and return " +
//               "a promise in the prior then so the sequence may be a bit " +
//               "surprising");
//   console.log(string);
// });


//Quiz 3
// var p2 = new Promise(function(resolve, reject) {
//   resolve(1);
// });

// p2.then(function(value) {
//   console.log(value);
//   return value + 1;
// }).then(function(value) {
//   console.log(value + ' - A synchronous value works');
// });

// p2.then(function(value) {
//   console.log(value + ': what is next task?'); 
// });

//Quiz 3 - Answer
// 1
// 1: what is next task?
// 2 - A synchronous value works


// Quiz 4
// Promise.resolve()
// .then( () => {
//   // Makes .then() return a rejected promise
//   throw new Error('Oh no!');
// })
// .then( () => { 
//   console.log( 'Not called.' );
// }, error => {
//   console.error( 'onRejected function called: ' + error.message );
// });
// Quiz 4 - RESULT
// onRejected function called: Oh no!

// Quiz 5
// Promise.reject()
// .then( () => 99, () => 42 ) 
// .then( solution => console.log( 'Resolved with ' + solution ) );
// Quiz 5 - Answer
//Resolved with 42

// Quiz 6
// Promise.resolve()
//   .then( () => {
//     // Makes .then() return a rejected promise
//     throw new Error('Oh no!');
//   })
//   .catch( error => {
//     console.error( 'onRejected function called: ' + error.message );
//   })
//   .then( () => {
//     console.log( "I am always called even if the prior then's promise rejects" );
//   });

  // Quiz 6: Answer
  // onRejected function called: Oh no!
  // I am always called even if the prior then's promise rejects

// Quiz 7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

// Quiz 7: Answer
// Initial
// Do that
// Do this, no matter what happened before


// Quiz 8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
// var p1 = new Promise(function(resolve, reject) {
//   resolve('Success');
// });

// p1.then(function(value) {
//   console.log(value); // "Success!"
//   throw 'oh, no!';
// }).catch(function(e) {
//   console.log(e); // "oh, no!"
// }).then(function(){
//   console.log('after a catch the chain is restored');
// }, function () {
//   console.log('Not fired due to the catch');
// });

// Quiz 8: Answer
// "Success!"
// "oh, no!"
//  after a catch the chain is restored

// Quiz 9
// var p1 = new Promise(function(resolve, reject) {
//   resolve('Success');
// });

// p1.then(function(value) {
//   console.log(value); // "Success!"
//   throw 'oh, no!';
// }, function () { // onReject method 
//   console.log('Not fired due to the catch');
// });



let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});


