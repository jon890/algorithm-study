// const fs = require('fs');
// const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdoutout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(input);
  process(exit);
});
