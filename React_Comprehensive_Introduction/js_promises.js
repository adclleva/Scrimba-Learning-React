// promises are used in order to do things while waiting for something to finish
// like waiting to fetch all the data
let promise1 = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve('Success!')
  } else {
    reject('Failed')
  }
})

promise1.then(message => {
  console.log(`This is a ${message}`)
}).catch(message => {
  console.log(`This is a ${message}`)
})

// we can utilize callbacks for promises
const userLeft = false
const userWatchingCatMeme = false

const watchTutorialCallback = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':C'
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat'
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialCallback().then((message) => {
  console.log("Success" + message)
}).catch(errorMsg => {
  console.log(errorMsg.name)
  console.log(errorMsg.message)
})

// we do promises to avoid callback hell
// this is a cool example of using a Promise to get
// multiple videos at once by using Promise all

const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 has been recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 has been recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 has been recorded')
})

Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  messages.forEach(message => {
    console.log(message)
  })
})

// you can do Promise.race to return as soon as one of the
// promises has been completed instead of waiting for
// the other promises
// thus returning one promise message

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(firstMessages => {
    console.log(`The first promise to finish is:`)
    console.log(`The first promise to finish is:`)
    console.log(firstMessages)
 })

// lecture is from
 // https://www.youtube.com/watch?v=DHvZLI7Db8E
