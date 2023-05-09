const INITIAL_TIME_IN_SECONDS = 25 * 60// 1500
let TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
let TIMER = null;

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

playButton.addEventListener('click', startCounter);
pauseButton.addEventListener('click', pauseCounter);
resetButton.addEventListener('click', resetCounter);

pauseButton.style.backgroundColor = '#daf4b0';
pauseButton.style.cursor = 'not-allowed';

resetButton.style.backgroundColor = '#fc8d8d';
resetButton.style.cursor = 'not-allowed';

updateDom();

function startCounter(){
    TIMER = setInterval( () =>{
        TIME_IN_SECONDS--;
        pauseButton.style.backgroundColor = 'greenyellow';
        pauseButton.style.cursor = 'cursor';
            
        playButton.style.backgroundColor = '#90EE90';
        playButton.style.cursor = 'not-allowed';

        resetButton.style.backgroundColor = 'brown';
        resetButton.style.cursor = 'pointer';
        updateDom();
    
    },1000)
} // startCounter

function pauseCounter(){
    clearInterval(TIMER);
    pauseButton.style.backgroundColor = '#daf4b0';

    playButton.removeAttribute('disabled');
    playButton.style.backgroundColor = 'green';
    playButton.style.cursor = 'pointer';

    resetButton.style.backgroundColor = 'brown';
    resetButton.style.cursor = 'pointer';
}

function resetCounter(){
    clearInterval(TIMER)
    TIME_IN_SECONDS = INITIAL_TIME_IN_SECONDS;
    updateDom();
}

function updateDom(){

   

    const minutes = Math.floor(TIME_IN_SECONDS / 60);
    document.getElementById('min').innerHTML = String(minutes).padStart(2,0);

    const seconds = TIME_IN_SECONDS % 60;
    document.getElementById('sec').innerHTML = String(seconds).padStart(2,0);


}