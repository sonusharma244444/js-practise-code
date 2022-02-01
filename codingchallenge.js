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
