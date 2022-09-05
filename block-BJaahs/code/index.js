//- Without Object
// let title = "Where is the capital of Jordan";
// let options = ["Tashkent", "Amaan", "Kuwait City", "Nairobi"];
// let correctIndex = 1;

// function isAnswerCorrect(index) {
//   if (index === correctIndex) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function getCorrectAnswer() {
//   return options[correctIndex];
// }

// //- Organize using object
// let question = {
//   title: "Where is the capital of Jordan",
//   options: ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   correctIndex: 1,
//   isAnswerCorrect(index) {
//     if (index === question.correctIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   getCorrectAnswer() {
//     return question.options[question.correctIndex];
//   },
// };

// //- Use a function to create object
// function createQuestion(title, optionsArr, correctIndex) {
//   let obj = {};
//   obj.title = title;
//   obj.options = optionsArr;
//   obj.correctIndex = correctIndex;
//   obj.isAnswerCorrect = function (index) {
//     if (index === obj.correctIndex) {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   obj.getCorrectAnswer = function () {
//     return obj.options[obj.correctIndex];
//   };
//   return obj;
// }
// const question1 = createQuestion(
//   "Where is the capital of Jordan",
//   ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
//   1
// );

//- Convert the function to use `this` keyword
function createQuestion(title, optionsArr, correctIndex) {
  let obj = {};
  obj.title = title;
  obj.options = optionsArr;
  obj.correctIndex = correctIndex;
  obj.isAnswerCorrect = function (index) {
    if (index === this.correctIndex) {
      return true;
    } else {
      return false;
    }
  };
  obj.getCorrectAnswer = function () {
    return this.options[this.correctIndex];
  };
  return obj;
}
const question1 = createQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
