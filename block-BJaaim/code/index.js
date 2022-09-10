let root = document.querySelector("main");
let ul = document.createElement("ul");
let form = document.createElement("form");
let span = document.createElement("span");
let h3 = document.createElement("h3");

class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrect(answer) {
    if (answer == this.correctAnswer) {
      span.innerText = "Your Answer is Correct!";
    } else {
      span.innerText = "Your Answer is Wrong!";
    }
    return answer == this.correctAnswer;
  }
  getCorrectAnswer() {
    return this.correctAnswer;
  }
  createUI() {
    ul.innerHTML = "";
    let li = document.createElement("li");
    let h2 = document.createElement("h2");
    h2.innerText = this.title;
    for (let i = 0; i <= 3; i++) {
      let div = document.createElement("div");
      let input = document.createElement("input");
      input.type = "radio";
      input.name = "option";
      input.id = `id-${i}`;
      input.value = this.options[i];
      let label = document.createElement("label");
      label.htmlFor = `id-${i}`;
      label.innerText = this.options[i];
      div.append(input, label);
      form.append(div);
    }

    let p = document.createElement("p");
    let a = document.createElement("a");
    let span = document.createElement("span");

    a.href = "#";
    a.innerText = "View Answer";
    a.addEventListener("click", () => {
      p.innerText = `Correct Answer is : ${this.getCorrectAnswer()}`;
    });
    li.append(h2, form, span, a, p);
    ul.append(li);
  }
}

class Quiz {
  constructor(allQuestions = [], activeIndex = 0, score = 0) {
    this.allQuestions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;
  }
  nextQuestion() {
    return this.allQuestions[this.activeIndex + 1];
  }
  createUI(title, options, correctAnswer) {
    let newQuestion = new Question(title, options, correctAnswer);
    this.allQuestions.push(newQuestion);
    let button = document.createElement("button");
    button.innerText = "Next Question";
    button.addEventListener("click", () => {
      this.nextQuestion();
    });
    newQuestion.createUI();
    let submitbtn = document.createElement("input");
    submitbtn.type = "submit";
    submitbtn.value = "submit";
    form.addEventListener("submit", this.handleSubmit.bind(this));

    form.append(submitbtn);

    root.append(h3, ul, button);
  }
  updateScore() {
    return (this.score += 1);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.allQuestions.forEach((question) => {
      if (question.isCorrect(form.elements.option.value)) {
        this.updateScore();
        h3.innerText = `Your Score is: ${this.score}`;
        this.nextQuestion();
        question.createUI();
      }
    });
  }
}
let questionBank = new Quiz();
questionBank.createUI("who", [1, 2, 3, 4], 2);
questionBank.createUI("what", [10, 20, 30, 40], 20);
