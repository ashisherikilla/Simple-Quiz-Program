const questions = [
    {
        ques: "SQL Query: SELECT COUNT(*) FROM Students WHERE age > 18;",
        options: ["Total students", "Students > 18", "Sum of ages", "Error"],
        ans: 1
    },
    {
        ques: "Which keyword is used for a constant variable?",
        options: ["let", "var", "const", "int"],
        ans: 2
    },
    {
        ques: "What will be the output of the following Java code?\nint x = 5; System.out.println(x++ * ++x);",
        options: [30, 25, 35, 36],
        ans: 2
    },
    {
        ques: "Time complexity of search in a balanced BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        ans: 1
    },
    {
        ques: "What describes the MERN stack?",
        options: ["Frontend framework", "DBMS tool", "Full-stack JS framework", "Cloud service"],
        ans: 2
    }
];

let currentQuestIndex = 0;
let score = 0;

const box = document.querySelector(".box");

function loadQuest() {
    const currentQuestion = questions[currentQuestIndex];

    box.innerHTML = `
        <p class="question">${currentQuestion.ques}</p>
        <div class="options">
            ${currentQuestion.options.map(
                (opt, index) => `
                <label>
                    <input type="radio" name="answer" value="${index}">
                    ${opt}
                </label>
            `).join("")}
        </div>
    `;
}

function prev() {
    if (currentQuestIndex > 0) {
        currentQuestIndex--;
        loadQuest();
    }
}

function submit() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        if (parseInt(selectedOption.value) === questions[currentQuestIndex].ans) {
            score++;
        }
        next();
    }
}

function next() {
    if (currentQuestIndex < questions.length - 1) {
        currentQuestIndex++;
        loadQuest();
    } else {
        box.innerHTML = `<h2>Quiz Completed!</h2><p>Score: ${score}/${questions.length}</p>`;
    }
}

window.addEventListener("load", loadQuest);

  
