// challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// // 2
// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...player1, player2];
// console.log(allPlayers);

// // 4
// const players1Final = [...player1, 'thiago', 'countino', 'periscic'];

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, team2, draw);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 1 is more likely to win');

// challenge 2

// // 1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal ${i + 1}: ${player}`);
// }

// // 2
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;

// average /= odds.length;
// console.log(average);

// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd of ${teamStr} ${odd}`);
// }

// challenge 3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2

// gameEvents.delete(64);

// // 3
// // bonus
// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `an events happend, on average , every ${time / gameEvents.size} minutes`
// );

// // 4

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'first' : 'second';
//   console.log(`[${half}HALF ] ${min} : ${event}`);
// }

// challenge 4

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(40)} ${'✅'.repeat(i + 1)}`);
  }
});
