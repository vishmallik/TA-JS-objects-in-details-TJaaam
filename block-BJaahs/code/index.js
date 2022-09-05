//- Without Object
let question1title =
  "Grand Central Terminal, Park Avenue, New York is the world's";
let question1Options = [
  "largest railway station",
  "highest railway station",
  "longest railway station",
  "None of the above",
];
let question1CorrectIndex = 0;

function isAnswerCorrect(index) {
  if (index === question1CorrectIndex) {
    return true;
  } else {
    return false;
  }
}
function getCorrectAnswer() {
  return question1CorrectIndex;
}
isAnswerCorrect(2);
