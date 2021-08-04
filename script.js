const quizData =[
    {    question:'why does the flag have 13 stripes?',
        a:'because there were 13 original colonies',
        b: 'because there were 13 orginal state',
        c: 'because ther were 13 goverment',
        d: 'a and b are the correct answer',
        correct:'a'
    },{
        question: 'What is the best programming language',
        a:'java',
        b:'javascript',
        c:'python',
        d: 'c++',
        correct:'b'


    } ,{
        question:"who is the U.S. president now? ",
        a:'Florin Plp',
        b:'Doland Trump',
        c: 'Ivan Saldano',
        d:'Joe Biden',
        correct: 'd'
    },{
        question:"What does HTML stand for? ",
        a:'Hypertext Markup Language',
        b:'Cascading style sheet',
        c: 'Jason Object Notation',
        d:'Helicopters Terminals Motorboats Lamborginis',    
    correct: 'a'
    },{
        question:"What year was JavaScript Launched? ",
        a:'1966',
        b:'1996',
        c: '1994',
        d:'None of the above',
        correct: 'd'
    },{
        question:"why the colonists fight the British? ",
        a:'because of high taxes',
        b:'because the Brithish army stayed in their houses',
        c: "because they didn't have self-government",
        d:'All the answer is correct',
        correct: 'd'
    }



]
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
