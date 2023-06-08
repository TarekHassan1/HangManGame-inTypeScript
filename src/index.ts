const DrawElements = document.querySelectorAll(".mainDiv>.draw>div") as NodeListOf<HTMLElement>;

const lettersContainer: HTMLElement | null = document.querySelector<HTMLElement>(".letters");

const WordType: HTMLElement | null = document.querySelector<HTMLElement>(".type");
const Inputs: HTMLElement | null = document.querySelector<HTMLElement>(".inputs");

const GameOver: HTMLElement | null = document.querySelector<HTMLElement>(".gameover");
const RestartBtn: HTMLElement | null = document.querySelector<HTMLElement>(".gameover button");
const textGameOver: HTMLElement | null = document.querySelector<HTMLElement>(".gameover span");

const letters = "abcdefghijklmnopqrstuvwxyz";

RestartBtn?.addEventListener("click", () => {
  location.reload();
})
let num = 0;
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
 
 const keys:string[] = Object.keys(words);
    const RandomProperty:number = Math.floor(Math.random() * keys.length);
    const wordsKey: string = keys[RandomProperty];
   const word: string[] = words[wordsKey as keyof typeof words];

const randomWord = word[Math.floor(Math.random() * word.length)]
const arrRandomWord = Array.from(randomWord);
    console.log(arrRandomWord);
    
   if (WordType) {
  WordType.textContent = wordsKey;
}
    randomWord.split("").forEach((e) => {
        
        const input: HTMLElement | null = document.createElement("input");
        Inputs?.append(input); 
    })
// 
function checkAllInputsHaveValue() {
  const InputElements = document.querySelectorAll(".inputs>input") as NodeListOf<HTMLInputElement>;
  const allInputsHaveValue = Array.from(InputElements).every((inputElement) => inputElement.value !== "");
  return allInputsHaveValue;
}
letters.split("").forEach(element => {
  let parEl: HTMLParagraphElement | null = document.createElement("p");
  parEl.textContent = element;
  lettersContainer?.append(parEl);

  parEl?.addEventListener("click", () => {
    parEl?.classList.add("disabled");
      const InputElements = document.querySelectorAll(".inputs>input") as NodeListOf<HTMLInputElement>;
      const allInputsHaveValue = Array.from(InputElements).every((inputElement) => inputElement.value !== "");

    if (num < DrawElements.length  && arrRandomWord.every(e=>e.toLowerCase()!==(parEl?.textContent)?.toLowerCase())) {
      DrawElements[num].style.opacity = "1";
      num++;
    } else {

      InputElements.forEach((inputElement, index) => {
        if (randomWord[index].toLowerCase() === (parEl?.textContent)?.toLowerCase()) {
          inputElement.value = parEl?.textContent ?? "";
      }
    })
    }
    
 if (checkAllInputsHaveValue()) {
      const allInputsHaveValue = checkAllInputsHaveValue();
      if (allInputsHaveValue) {
        if (textGameOver) {
          textGameOver.textContent = "You Won!";
        }
        GameOver?.classList.add("show");
        return;
      }
    }
    
    if (DrawElements.length === num) {
      if (textGameOver) {
        textGameOver.textContent= `GameOver Word Was : ${randomWord}`;
      }
      GameOver?.classList.add("show");
    return;
  }


  });
});


console.log(42424);
