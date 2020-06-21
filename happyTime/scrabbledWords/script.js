const message = document.querySelector('.message');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWord = "";
let randWord = "";
let words = ['empowerment', 'feminism', 'science', 'math', 
            'women', 'awareness', 'confidence', 'creative', 'development', 
            'logical', 'success', 'empower', 'passion', 'imaginative', 
            'respect', 'brave', 'determined']

const generateWords = () => {
    let random = Math.floor(Math.random() * words.length);
    let newWord = words[random];
    return newWord;
}

const scrambleWords = (arr) => {
    for(let i = arr.length-1; i > 0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));

        arr[i] = arr[j]
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWord = generateWords();
        randWord = scrambleWords(newWord.split("")).join("");
        message.innerHTML = randWord;
    }
    else{
        let tempWord = guess.value;
        if(tempWord === newWord){
            play = false;
            message.innerHTML = `You got that right! It is ${tempWord}.`;
            btn.innerHTML = "Play again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else{
            message.innerHTML = `Oops! That's not right. It is ${newWord}`;
            btn.innerHTML = "Try again";
            play = false;
            guess.classList.toggle('hidden');
            guess.value = "";
        }
    }
})