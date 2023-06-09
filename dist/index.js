"use strict";
const DrawElements = document.querySelectorAll(".mainDiv>.draw>div");
const lettersContainer = document.querySelector(".letters");
const WordType = document.querySelector(".type");
const Inputs = document.querySelector(".inputs");
const GameOver = document.querySelector(".gameover");
const RestartBtn = document.querySelector(".gameover button");
const textGameOver = document.querySelector(".gameover span");
const letters = "abcdefghijklmnopqrstuvwxyz";
RestartBtn === null || RestartBtn === void 0 ? void 0 : RestartBtn.addEventListener("click", () => {
    location.reload();
});
let num = 0;
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
};
const keys = Object.keys(words);
const RandomProperty = Math.floor(Math.random() * keys.length);
const wordsKey = keys[RandomProperty];
const word = words[wordsKey];
const randomWord = word[Math.floor(Math.random() * word.length)];
const arrRandomWord = Array.from(randomWord);
if (WordType) {
    WordType.textContent = wordsKey;
}
randomWord.split("").forEach((e) => {
    const input = document.createElement("input");
    Inputs === null || Inputs === void 0 ? void 0 : Inputs.append(input);
});
// 
function checkAllInputsHaveValue() {
    const InputElements = document.querySelectorAll(".inputs>input");
    const allInputsHaveValue = Array.from(InputElements).every((inputElement) => inputElement.value !== "");
    return allInputsHaveValue;
}
letters.split("").forEach(element => {
    let parEl = document.createElement("p");
    parEl.textContent = element;
    lettersContainer === null || lettersContainer === void 0 ? void 0 : lettersContainer.append(parEl);
    parEl === null || parEl === void 0 ? void 0 : parEl.addEventListener("click", () => {
        parEl === null || parEl === void 0 ? void 0 : parEl.classList.add("disabled");
        const InputElements = document.querySelectorAll(".inputs>input");
        const allInputsHaveValue = Array.from(InputElements).every((inputElement) => inputElement.value !== "");
        if (num < DrawElements.length && arrRandomWord.every(e => { var _a; return e.toLowerCase() !== ((_a = (parEl === null || parEl === void 0 ? void 0 : parEl.textContent)) === null || _a === void 0 ? void 0 : _a.toLowerCase()); })) {
            DrawElements[num].style.opacity = "1";
            num++;
        }
        else {
            InputElements.forEach((inputElement, index) => {
                var _a, _b;
                if (randomWord[index].toLowerCase() === ((_a = (parEl === null || parEl === void 0 ? void 0 : parEl.textContent)) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
                    inputElement.value = (_b = parEl === null || parEl === void 0 ? void 0 : parEl.textContent) !== null && _b !== void 0 ? _b : "";
                }
            });
        }
        if (checkAllInputsHaveValue()) {
            const allInputsHaveValue = checkAllInputsHaveValue();
            if (allInputsHaveValue) {
                if (textGameOver) {
                    textGameOver.textContent = "You Won!";
                }
                GameOver === null || GameOver === void 0 ? void 0 : GameOver.classList.add("show");
                return;
            }
        }
        if (DrawElements.length === num) {
            if (textGameOver) {
                textGameOver.textContent = `GameOver Word Was : ${randomWord}`;
            }
            GameOver === null || GameOver === void 0 ? void 0 : GameOver.classList.add("show");
            return;
        }
    });
});
//# sourceMappingURL=index.js.map