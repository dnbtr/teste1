/* const fs = require('fs')
fs.readFile('/etc/hosts', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

const assembleSortedNamesArray = (input: string): string[] => {
  const inputToString: string = readFileSync(input).toString('utf-8');
  const namesArray: string[] = inputToString.replace(/"/g, '').split(',');

  return namesArray.sort();
}

const findNameScore = (name: string): number => {
  let nameScore: number = 0;
  let nameArray: string[] = name.split('');

  nameArray.forEach(char => {
    nameScore += (parseInt(char, 36) - 9)
    return;
  });

  return nameScore;
}

const main = (): void => {
  const FILE_PATH: string = './data/p022_names.txt';

  let position: number;
  let finalScore: number = 0;

  console.time();
  const sortedNamesArray = assembleSortedNamesArray(FILE_PATH);

  for (let i = 0; i <= sortedNamesArray.length - 1; i++) {
    position = i + 1;
    finalScore += (position * findNameScore(sortedNamesArray[i]));
  }
  console.timeEnd();

  console.log(`Final score is ${finalScore}`);
}

main(); */