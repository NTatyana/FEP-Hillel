const RIGHT_ANSWER = 10;
const WRONG_ANSWER = 0;

const arrQuesttoin = [
  {
    question: 'Сколько будет 2+2?',
    answer: '4',
    type: 'prompt',
  },
  {
    question: 'Солнце встает на востоке?',
    answer: 'true',
    type: 'confirm',

  },

  {
    question: 'Сколько будет 5 / 0?',
    answer: 'infinity',
    type: 'prompt',

  },

  {
    question: 'Какого цвета небо?',
    answer: 'голубого',
    type: 'prompt',

  },

  {
    question: 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого»',
    answer: '42',
    type: 'prompt',

  },

];

finalResult(arrQuesttoin);





function finalResult(ourQuestions) {
  let score = 0;



  ourQuestions.forEach( (question) => {
    if (getAnswer(question) === question.answer) {
      score = score + RIGHT_ANSWER;
    } else {
      score = score + WRONG_ANSWER;
    }
})

  showResult(score);
}

function getAnswer({ question, type }) {
  if (type === 'prompt') {
    return prompt(question);
  }
  if (type === 'confirm') {
    return confirm(question);
  }
}

function showResult(score) {
  alert(`Ваша оценка ${score}`);
}