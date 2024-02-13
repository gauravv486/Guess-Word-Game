const wordElement = document.getElementById('word-name');
const letterinput = document.getElementById('letterinput');
const guessbtn = document.getElementById('btn');
const gameresponse = document.getElementById("game-response-value");
const guesscount = document.getElementById("guess-count-value");
const guessedwords = document.getElementById("live-guess-letters");
const gameover = document.getElementById("gameover");
const restartbtn = document.getElementById("btn2");
const gameloose = document.getElementById("gameloose");
const restartbtn2 = document.getElementById("btn3")
const gamecontent = document.getElementById("game-content");



const words=["block","chair","demon","lover","house","angel","wings","unity","table","joker","zebra","giant","magic","whale","books","lemon","right","wrong"];

const randomIndex = Math.floor(Math.random() * words.length);
let str = words[randomIndex].toUpperCase();

let wordindex1 = Math.floor(Math.random() * str.length);
let wordindex2 = Math.floor(Math.random() * str.length);
while (wordindex1 === wordindex2) {
    wordindex2 = Math.floor(Math.random() * str.length);
}

console.log(wordindex1);
console.log(wordindex2);

let hiddenWord = '';
for (let i = 0; i < str.length; i++) {
    if (i === wordindex1 || i === wordindex2) {
        hiddenWord += '_';
    } else {
        hiddenWord += str[i];
    }
}
wordElement.textContent = hiddenWord;

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        guessbtn.click();
    }
})


guessbtn.addEventListener('click', function () {

    if (letterinput.value.trim() === "") {
        alert("Input field is empty. Please enter a letter.");
    } else {
        let lettervalue = letterinput.value.toUpperCase();
        checkletter(lettervalue);
    }

})

var count = 10;
function checkletter(element) {
    guessedwords.innerText += element + " ";
    let newHiddenWord = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === element) {
            newHiddenWord += element;
            // gameresponse.textContent = "Good guess! The Word has letter   " + element + ":)";
         
        } else {
            newHiddenWord += hiddenWord[i];
            // gameresponse.textContent="Aww!! your " +element+ " guess is wrong :("
           
        }
    }


    if(str[wordindex1]===element || str[wordindex2]===element){
        gameresponse.textContent = "Good guess! The Word has letter   " + element + " :)";
       
    }
    else{
        gameresponse.textContent="Aww!! your " +element+ " guess is wrong :("
    }


    hiddenWord = newHiddenWord;
    wordElement.textContent = hiddenWord;

    letterinput.value = "";
    count--;
    guesscount.textContent = "you only have " + count + " guesses left"
    letterinput.focus();

    if (hiddenWord === str) {
        gamecontent.style.display = "none";
        gameover.style.display = "inline";

    }

    if (count === 0) {
        guesscount.textContent = "Guesses are over GAME OVER:("
        gamecontent.style.display = 'none';
        gameloose.style.display = "inline";

    }
}

restartbtn.addEventListener("click", () => {
    location.reload();
})

restartbtn2.addEventListener("click", () => {
    location.reload();
})