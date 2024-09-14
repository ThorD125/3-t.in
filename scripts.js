let questions = [];
let currentQuestionIndex = 0;

const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.btn');
const feedbackText = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const questionCounter = document.getElementById('question-counter');
const goodJobAnimation = document.getElementById('good-job-animation');
const quizContainer = document.getElementById('quiz-container');
const examSelection = document.getElementById('exam-selection');

// Load the available exams from "/exams.json" and populate the dropdown
fetch('/exams.json')  // Correct path to your exams file
  .then(response => response.json())
  .then(exams => {
    populateExamDropdown(exams);
  })
  .catch(error => console.error("Error loading exams:", error));

// Populate the exam dropdown with options from the JSON file
function populateExamDropdown(exams) {
  exams.forEach(exam => {
    const option = document.createElement('option');
    option.value = exam.file;  // Use the file name for value
    option.textContent = exam.title;  // Use the title for the display text
    examSelection.appendChild(option);
  });
}

// Automatically start the exam when an option is selected
examSelection.addEventListener('change', () => {
  const selectedExam = examSelection.value;
  if (selectedExam) {
    loadExam(`exam/${selectedExam}`);
  }
});

// Load the selected exam from the JSON file
function loadExam(examFile) {
  fetch(examFile)
    .then(response => response.json())
    .then(data => {
      questions = data;
      shuffleArray(questions); // Shuffle the questions at the start
      currentQuestionIndex = 0;
      updateQuestionCounter();
      setNextQuestion();
      quizContainer.style.display = 'block'; // Show quiz container after starting
    })
    .catch(error => console.error("Error loading exam:", error));
}

nextBtn.addEventListener('click', () => {
  feedbackText.textContent = '';
  feedbackText.style.color = ''; // Reset feedback color
  nextBtn.style.display = 'none';
  enableAnswerButtons(); // Re-enable the answer buttons for the new question
  resetButtonColors(); // Reset button colors to default

  updateQuestionCounter();
  setNextQuestion();
});

function setNextQuestion() {
  console.log(currentQuestionIndex, questions.length, questions)
  if (questions.length == 0) {
    showGoodJobAnimation(); // Show "Good Job" animation when all questions are done
    return;
  }

  let question = questions[currentQuestionIndex];
  if (!question) {
    // console.error("No question found for the current index.");
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    question = questions[currentQuestionIndex];
  }
  questionText.textContent = question.question;
  answerButtons.forEach(button => {
    const option = button.getAttribute('data-option');
    if (question.options[option] != undefined) {
      button.textContent = question.options[option];
      button.classList.remove("hidden")
    }
  });
}

answerButtons.forEach(button => {
  button.addEventListener('click', selectAnswer);
});

function selectAnswer(e) {
  const currentQuestion = questions[currentQuestionIndex]; // Ensure the current question is accessed correctly

  if (currentQuestion) {
    const selectedOption = e.target.getAttribute('data-option');

    // Disable buttons after selection
    disableAnswerButtons();

    // Highlight correct and incorrect answers
    if (selectedOption === currentQuestion.answer) {
      delete questions[currentQuestionIndex];
      questions = questions.filter(x => x != "empty")
      e.target.classList.add('correct'); // Correct button turns green
      feedbackText.textContent = `Correct! ${currentQuestion.reason}`;
      feedbackText.style.color = '#4CAF50'; // Green for correct
    } else {
      e.target.classList.add('wrong'); // Wrong button turns red
      feedbackText.textContent = `Wrong! ${currentQuestion.reason}`;
      feedbackText.style.color = '#f44336'; // Red for wrong

      // Highlight the correct button as well
      answerButtons.forEach(button => {
        if (button.getAttribute('data-option') === currentQuestion.answer) {
          button.classList.add('correct'); // Green for correct answer
        } else {
          button.classList.add('wrong')
        }
      });

      // Push the incorrect question to the end of the array
      questions.push(currentQuestion);
    }

    nextBtn.style.display = 'block';
    currentQuestionIndex++;
    updateQuestionCounter();
  } else {
    console.error("No question available to select an answer for.");
  }
}

// Disable answer buttons to prevent reclicking
function disableAnswerButtons() {
  answerButtons.forEach(button => {
    button.disabled = true;
  });
}

// Re-enable answer buttons for the next question
function enableAnswerButtons() {
  answerButtons.forEach(button => {
    button.disabled = false;
  });
}

// Reset the button colors to the default state
function resetButtonColors() {
  answerButtons.forEach(button => {
    button.classList.remove('correct', 'wrong');
    button.classList.add('hidden');
  });
}

// Shuffle questions for randomization
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Update question counter
function updateQuestionCounter() {
  const remainingQuestions = questions.length;
  questionCounter.textContent = `Questions left: ${remainingQuestions}`;
}

// Show the "Good Job" animation
function showGoodJobAnimation() {
  questionText.style.display = 'none';
  document.getElementById('answer-buttons').style.display = 'none';
  nextBtn.style.display = 'none';
  questionCounter.style.display = 'none';
  feedbackText.textContent = '';

  // Ensure good job animation is shown
  goodJobAnimation.classList.remove('hidden');
  goodJobAnimation.style.display = 'block';
}
