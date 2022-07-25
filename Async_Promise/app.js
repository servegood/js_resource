// REGULAR function returns a string:
// function greet() {
// 	return 'HELLO!!!';
// }

// THE ASYNC KEYWORD!
// This function now returns a promise!
async function greet() {
  return 'HELLO!!!' //resolved with the value of 'HELLO!!!'
}
greet().then((val) => {
  console.log('ASYNC PROMISE RESOLVED WITH: ', val)
})

async function add_async(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw 'X and Y must be numbers!'
  }
  return x + y
}

add_async(6, 7)
  .then((val) => {
    console.log('ADD_ASYNC PROMISE RESOLVED WITH: ', val)
  })
  .catch((err) => {
    console.log('ADD_ASYNC PROMISE REJECTED WITH: ', err)
  })

// Equivalent non-async function...
function add_promise(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject('X and Y must be numbers!')
    }
    resolve(x + y)
  })
}

add_promise(6, 7)
  .then((val) => {
    console.log('ADD_PROMISE PROMISE RESOLVED WITH: ', val)
  })
  .catch((err) => {
    console.log('ADD_PROMISE PROMISE REJECTED WITH: ', err)
  })
