function solution(tickets) {
  const answers = [];

  for (let i = 0; i < tickets.length; i++) {
    const [start, end] = tickets[i];
    const visited = new Array(tickets.length).fill(false);

    // ICN에서 출발
    if (start === 'ICN') {
      visited[i] = true;
      dfs(1, visited, [start, end], tickets, answers);
    }
  }

  answers.sort((a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) continue;
      return (a[i] > b[i]) - (a[i] < b[i]);
    }
  });

  console.log(answers);
  return answers[0];
}

function dfs(depth, visited, result, tickets, answers) {
  if (depth === tickets.length) {
    answers.push(result);
    return;
  }

  const prevEnd = result[result.length - 1];
  for (let i = 0; i < tickets.length; i++) {
    if (visited[i]) continue;

    const [currStart, currEnd] = tickets[i];
    if (currStart === prevEnd) {
      const newVisited = [...visited];
      newVisited[i] = true;
      dfs(depth + 1, newVisited, [...result, currEnd], tickets, answers);
    }
  }
}

// solution([
//   ['ICN', 'JFK'],
//   ['HND', 'IAD'],
//   ['JFK', 'HND'],
// ]);

// solution([
//   ['ICN', 'SFO'],
//   ['ICN', 'ATL'],
//   ['SFO', 'ATL'],
//   ['ATL', 'ICN'],
//   ['ATL', 'SFO'],
// ]);

// solution([
//   ['ICN', 'AOO'],
//   ['AOO', 'BOO'],
//   ['BOO', 'COO'],
//   ['COO', 'DOO'],
//   ['DOO', 'EOO'],
//   ['EOO', 'DOO'],
//   ['DOO', 'COO'],
//   ['COO', 'BOO'],
//   ['BOO', 'AOO'],
// ]);

// solution([
//   ['ICN', 'AOO'],
//   ['AOO', 'BOO'],
//   ['AOO', 'BOO'],
//   ['BOO', 'AOO'],
//   ['BOO', 'FOO'],
//   ['FOO', 'COO'],
//   ['COO', 'ZOO'],
// ]);

// solution([
//   ['ICN', 'AAA'],
//   ['ICN', 'AAA'],
//   ['ICN', 'AAA'],
//   ['AAA', 'ICN'],
//   ['AAA', 'ICN'],
// ]);

solution([
  ['ICN', 'BBB'],
  ['ICN', 'CCC'],
  ['BBB', 'CCC'],
  ['CCC', 'BBB'],
  ['CCC', 'ICN'],
]);
