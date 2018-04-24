let eightBall = [
'It is certain',
'It is decidedly so',
'Without a doubt',
'Yes, definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Outlook good',
'Yes',
'Signs point to yes',
'Reply hazy try again',
'Ask again later',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Dont count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful'
];

//8-ball random response
let randomIndex = (length) => {
  return Math.floor((Math.random() * length));
};

let i = randomIndex(eightBall.length);

console.log(eightBall[i]);

//Always return very first response
first = eightBall[0];

console.log(first);

//Always return very last response
last = eightBall[eightBall.length -1];

console.log(last);

// Return only positive responses
let positive = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes'
];

let p = randomIndex(positive.length);
console.log(positive[p]);

// Return only negative response
let negative = [
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Dont count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful'
];

let n = randomIndex(negative.length);
console.log(negative[n]);

//Delete two of the negative responses
eightBall.splice(11, 2);
console.log(eightBall);

//Reassign 'Ask again later' to beginning of the array
eightBall[0] = 'Ask again later';
console.log(eightBall[0]);

// Add 3 of your own responses to the list, one to beginning
// one to index 10, and one to the end

eightBall.unshift('You have a bright future!');
eightBall.splice(10, 0, 'You are a shmuck');
eightBall.push('You look homeless');
console.log(eightBall);
