
const getAge = async () => {
   const response = await fetch('https://api.agify.io?name=leslie')
   const data = await response.json();
    console.log(data)

    return data.age
}

let guessedAge = 0;
const getGuessedAge = async () => {
    const response = await fetch('https://api.agify.io?name=leslie');
    const data = await response.json();
    return data.age;
}

const displayGuessedAge = async () =>{
    const guessedAgeSpan = document.getElementById('guessedAge');
    const isCorrectSpan = document.getElementById('isGuessRight')

    guessedAge = await getGuessedAge();
    guessedAgeSpan.textContent = guessedAge;

    if(guessedAge!== 25){
        isCorrectSpan.textContent = 'incorrecto'
    }else{
        isCorrectSpan.textContent = 'correcto'
    }

}


displayGuessedAge();