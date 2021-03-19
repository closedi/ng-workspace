const ws = require('ws');

const https = require('https');
const usersUrl = 'https://jsonplaceholder.typicode.com/users';
let users;

const request = new Promise((resolve, reject) => {
  let usersArray;
  https.get(usersUrl, (response) => {
    let data = '';

    response.on("data", (chunk => data += chunk))

    response.on("end", () => {
    resolve(JSON.parse(data))
   })

    response.on("error", () => reject('error'))
  });
});

request
  .then((value) => {
  users = value;
})
  .catch(err => console.log(err))
  .then(() => webSocket())

const wss = new ws.Server({port: 8333});

const SAMUEL_JACKSON_RESPONSES = [
  'You Are On This Council, But We Do Not Grant You The Rank Of Master.',
  'We\'re All Gonna Be Like Three Little Fonzies Here.',
  'The Idea Was To Bring Together A Group Of Remarkable People, See If They Could Become Something More.',
  'Yes, They Deserved To Die, And I Hope They Burn In Hell!',
  'They Called Me Mr. Glass.',
  'Where Is My Super Suit?',
  'Given That It\'s A Stupid-Ass Decision, I\'ve Elected To Ignore It.',
  'I Never Did One Thing Right In My Life, You Know That? Not One. That Takes Skill.',
  'Hold On To Your Butts.',
  'English, Motherf*Cker, Do You Speak It?',
  'Everyone Knows That When You Make An Assumption, You Make An Ass Out Of \'U\' And \'Umption.\'',
  'You Know Me. It\'s My Duty To Please That Booty.',
  'Mankind Is The Virus And I\'m The Cure.',
  'I Have Had It With These Motherf*Cking Snakes On This Motherf*Cking Plane!',
  'And You Will Know My Name Is The Lord When I Lay My Vengeance Upon You!'
];

const CUSTOMER_SAYS = [
  'I have a problem with my car',
  'Please help!! Everything is on fire!!',
  'Could u specify it?',
  'It\'s all, thanks',
]

function randomAnswer(of_times) {
  return CUSTOMER_SAYS[Math.round(Math.random() * of_times)]
}

function currentMessages() {
  users.map((user) => {
    user.messages = [{type: 'RECEIVED', name: user.name, message: randomAnswer(3), time: Date.now()}];
  })
  return JSON.stringify(users);
}

function webSocket() {
  wss.on('connection', ws => {
    ws.send(currentMessages());
    ws.on('message', processMessage);
    ws.on('close', () => {
      ws.off('message', processMessage);
    });
    function processMessage(message) {
      const messageParsed = JSON.parse(message);
      const responseMessage = JSON.stringify({type: 'RECEIVED', name: messageParsed.name, message: randomAnswer(3), time: Date.now()})
      ws.send(responseMessage);
    }
  });
}


