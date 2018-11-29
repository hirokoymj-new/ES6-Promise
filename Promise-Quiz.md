# Promise Quiz

**Q1**
```js
const p1 = new Promise((resolve, resject)=>{
  resolve('task1');
});
p1.then((value)=>{
  console.log(value);
})
console.log('task2');
console.log('task3');
```

**Q1: Answer**
```js
task2
task3
task1
```
<hr />



**Q2**
```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});
p2.then(function(value) {
  console.log(value);
  return value + 1;
}).then(function(value) {
  console.log(value + ' - A synchronous value works');
});

p2.then(function(value) {
  console.log(value + ': what is next task?'); 
});
```
**Q2: Answer**
```js
1
1: what is next task?
2 - A synchronous value works
```

**Explanation**
```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});
// 1. Receive "1" and print it in console, and reutn 1 but not move next then because it is que.
p2.then(function(value) {
  console.log(value);
  return value + 1;
})
// 2. Receive "2" but not print it in console because 1 hasn't finish yet.
.then(function(value) {
  console.log(value + ' - A synchronous value works');
});

// 3. Calls while 1. is waiting.
p2.then(function(value) {
  console.log(value + ': what is next task?'); 
});
```


<hr />

**Q3**
```js
Promise.resolve()
.then( () => {
  throw new Error('Oh no!');
})
.then( () => { 
  console.log( 'Not called.' );
}, error => {
  console.error( 'onRejected function called: ' + error.message );
});
```
**Q3: Answer**
```js
onRejected function called: Oh no!
```
<hr />

**Q4**
```js
Promise.reject()
.then( () => 99, () => 42 ) 
.then( solution => console.log( 'Resolved with ' + solution ) );

```
**Q4: Answer**
```js
Resolved with 42
```
<hr />

**Q5**
```js
Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw new Error('Oh no!');
  })
  .catch( error => {
    console.error( 'onRejected function called: ' + error.message );
  })
  .then( () => {
    console.log( "I am always called even if the prior then's promise rejects" );
  });
```
**Q5: Answer**
```js
Quiz 6: Answer
onRejected function called: Oh no!
I am always called even if the prior then's promise rejects
```
<hr />


**Q6**

```js
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
})
```

**Q6: Answer**

```js
Initial
Do that
Do this, no matter what happened before
```
**Explanation**
[Using Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
>Note: The text Do this is not displayed because the Something failed error caused a rejection.
<hr />
