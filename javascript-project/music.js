
const likesMusic=true;
const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const likesMusicElement = document.querySelector('#likesMusic');

console.log('ELEMENTO name: ', nameElement );
console.log('Elemento age: ', ageElement);
console.log('Elemento likesMusic: ', likesMusicElement);

nameElement.innerHTML = "<div class='prueba'><span>Leslie</span></div>"
ageElement.innerHTML = "25";
likesMusicElement.innerHTML = 'claro, me gusta la musica';



const myNewElement = document.querySelector('body');
const newText = document.createElement('div');
newText.innerHTML = '<p style="color: white">Este es mi nuevo elemento </p>'


const addChild=()=>{
    myNewElement.appendChild(newText);
}


const removeChild=()=>{
   myNewElement.removeChild(newText); 
}

addChild();


if (likesMusic){
    likesMusicElement.textContent='me gusta la musica';
}else{
    removeChild();
    likesMusicElement.textContent='no me gusta la musica'
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

const playNote = (key)=> {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.play();
    
}


document.addEventListener('keydown', (e) => {
    if(e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
});


