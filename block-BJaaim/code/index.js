(function main() {
  let root = document.querySelector(".root");
  let next = document.createElement("button");
  next.classList.add("next");
  next.innerText = "Next question";

  let prev = document.createElement("button");
  prev.classList.add("prev");
  prev.innerText = "Previous question";

  let result = document.createElement("button");
  result.classList.add("result");
  result.innerText = "Show Result";

  class Question {
    constructor(title, options, correctAnswerIndex) {
      this.title = title;
      this.options = options;
      this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer) {
      return answer == this.options[this.correctAnswerIndex];
    }
    getCorrectAnswer() {
      return this.options[this.correctAnswerIndex];
    }
  }
  class Quiz {
    constructor(allQuestions = [], score = 0) {
      this.allQuestions = allQuestions;
      this.activeIndex = 0;
      this.score = score;
    }
    addQuestion(title, options, correctAnswerIndex) {
      let newQuestion = new Question(title, options, correctAnswerIndex);
      this.allQuestions.push(newQuestion);
    }
    nextQuestion() {
      this.activeIndex += 1;
      this.createUI();
    }
    prevQuestion() {
      this.activeIndex -= 1;
      this.createUI();
    }
    updateScore() {
      return (this.score += 1);
    }
    createUI() {
      root.innerHTML = "";

      let h3 = document.createElement("h3");
      h3.innerText = `Total Question: ${this.allQuestions.length}`;

      let p = document.createElement("p");
      p.innerText = `Question no. ${this.activeIndex + 1}`;
      let activeQuestion = this.allQuestions[this.activeIndex];

      let h2 = document.createElement("h2");
      h2.innerText = `${activeQuestion.title}`;

      let form = document.createElement("form");

      activeQuestion.options.forEach((option, index) => {
        let div = document.createElement("div");

        let input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.id = `id-${index}`;
        input.value = option;

        let label = document.createElement("label");
        label.htmlFor = `id-${index}`;
        label.innerText = option;

        div.append(input, label);
        form.append(div);
      });

      let submitbtn = document.createElement("input");
      submitbtn.type = "submit";
      submitbtn.value = "submit";

      form.append(submitbtn);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (activeQuestion.isCorrect(form.option.value)) {
          this.updateScore();
        }
      });

      this.handleButtons();

      root.append(h3, p, h2, form, prev, result, next);
    }
    handleButtons() {
      if (this.activeIndex === 0) {
        prev.style.visibility = "hidden";
        result.style.visibility = "hidden";
        next.style.visibility = "visible";
      } else if (this.activeIndex === this.allQuestions.length - 1) {
        next.style.visibility = "hidden";
        result.style.visibility = "visible";
      } else {
        prev.style.visibility = "visible";
        next.style.visibility = "visible";
        result.style.visibility = "hidden";
      }
    }
  }

  (function init() {
    let questionBank = new Quiz();
    questionCollection.forEach((question) => {
      questionBank.addQuestion(
        question.title,
        question.options,
        question.answerIndex
      );
    });
    questionBank.createUI();

    prev.addEventListener("click", () => {
      questionBank.prevQuestion();
    });
    next.addEventListener("click", () => {
      questionBank.nextQuestion();
    });
    result.addEventListener("click", () => {
      alert(`Your Score is: ${questionBank.score}`);
    });
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
      location.reload();
    });
  })();
})();
