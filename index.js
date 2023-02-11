const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (string) {
    let eachIt = string.split(' ')
    let newArr = []
    for (let i = 0; i < eachIt.length; i++) {
      let word = eachIt[i];
      let capitalFirst = word.charAt(0).toUpperCase()
      let restLower = word.slice(1)
      newArr.push(capitalFirst + restLower)
    } return newArr.join(' ')
  })
}

