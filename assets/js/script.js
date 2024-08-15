/*******************************
 ********* VARIABLES ***********
 *******************************/

let currentExcerpt = null;
const typingText = document.querySelector(".typing-text p");
const typingInput = document.getElementById('typing-input');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.querySelector('.wpm span');
const accuracyDisplay = document.querySelector('.accuracy span');
const errorsDisplay = document.querySelector('.error span');
const totalWordsDisplay = document.querySelector('.total-words span');
let timerInterval = null;
let correctChars = 0;
let totalKeystrokes = 0;
let errors = 0;
let timerRunning = false;

/*******************************
 ********* FUNCTIONS ***********
 *******************************/

function loadRandomExcerpt() {

    // reset results stats
    correctChars = 0;
    totalKeystrokes = 0;
    errors = 0;

    // clear the current content
    typingText.innerHTML = '';

    // generate pseudo-random integer to allow us to select a book excerpt at random
    let randomIndex = Math.floor(Math.random() * excerpts.length);


    // store the selected excerpt for later use
    currentExcerpt = excerpts[randomIndex];

    // split string into spans, each containing one character
    const spanContent = currentExcerpt.text.split('').map(char => {
    return char === ' ' ? `<span class="space">${char}</span>` : `<span>${char}</span>`;
    }).join('');

    // add the content to the typing text element
    typingText.innerHTML = spanContent;

    // activate the cursor at the start
    typingText.querySelector('span').classList.add('active');

}

function showResults() {
    const totalWordsTyped = typingInput.value.trim().split(/\s+/).filter(word => word).length;
    const wpm = correctChars / 5 / 1; // 
    const accuracy = (correctChars / totalKeystrokes) * 100 || 0;

    wpmDisplay.innerText = wpm.toFixed(0);
    accuracyDisplay.innerText = accuracy.toFixed(0) + '%';
    errorsDisplay.innerText = errors;
    totalWordsDisplay.innerText = totalWordsTyped;

    // show alert with the book title and author
    if (currentExcerpt) {
        alert(`You have been typing an excerpt from...\n 
        "${currentExcerpt.title}" by ${currentExcerpt.author}`);
    }
}

// function to check scroll position within container
function checkScroll() {
    const typingTextElement = document.querySelector(".typing-text");
    const activeSpan = typingTextElement.querySelector('span.active');

    if (activeSpan) {
        const containerRect = typingTextElement.getBoundingClientRect();
        const activeSpanRect = activeSpan.getBoundingClientRect();

        if (activeSpanRect.bottom > containerRect.bottom) {
            typingTextElement.scrollTop += activeSpanRect.bottom - containerRect.bottom;
        }
    }
}

// function to check users typing against the excerpt text
function checkTyping() {
    const inputArray = typingInput.value.split("");
    correctChars = 0;
    errors = 0;

    let spans = typingText.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (index < inputArray.length) {
            let char = inputArray[index];

            if (char === span.innerText) {
                span.classList.add('correct');
                span.classList.remove('incorrect');
                correctChars++;
            } else {
                span.classList.add('incorrect');
                span.classList.remove('correct');
                errors++;
            }
        } else {
            span.classList.remove('correct', 'incorrect');
        }

        // handle cursor
        if (index === inputArray.length) {
        span.classList.add('active');
        checkScroll();
        } else {
        span.classList.remove('active');
        }

    });

    // calculate total characters typed
    totalKeystrokes = inputArray.length;

    if (timerDisplay.innerText === '00:00') {
        // disable input
        typingInput.disabled = true;
        showResults();
    }
}

//sets the timer countdown increments of one second
function startTimer(duration, display) {

    let timer = duration,
        minutes, seconds;

    // clear existing timer interval before starting new one
    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        //stop the countdown once the timer hits 00:00
        if (timer <= 0) {
            clearInterval(timerInterval);
            typingInput.disabled = true;
            display.textContent = "00:00";
            typingInput.blur();
            // display results when time is up
            showResults();

        }

        timer--;
    }, 1000);
}

// function to start the timer on the first keydown event
function startOnKeydown() {
    if (!timerRunning) {
        const countdownTime = 60; // 60 seconds
        startTimer(countdownTime, timerDisplay);
        timerRunning = true;
    }
}

// function to reset the test
function resetTest() {

    // text input reset & random excerpt reload
    typingInput.value = '';
    typingInput.disabled = false; // Ensure input is enabled
    typingInput.placeholder = 'Start typing here...';
    loadRandomExcerpt();

    // reset timer & interval
    clearInterval(timerInterval);
    timerDisplay.textContent = "01:00";
    timerRunning = false; // Reset timer flag

    // reset test results
    wpmDisplay.innerText = '0';
    accuracyDisplay.innerText = '0%';
    errorsDisplay.innerText = '0';
    totalWordsDisplay.innerText = '0';

    // focus on the input box to ensure the cursor appears
    typingInput.focus();

    // reattach the event handler for starting the timer on the first keydown event
    document.removeEventListener('keydown', startOnKeydown);
    document.addEventListener('keydown', startOnKeydown, {
        once: true
    });
}

/*******************************
 ****** EVENT LISTENERS ********
 *******************************/

//activates countdown to start when user presses a keyboard key
document.addEventListener('keydown', function () {
    const countdownTime = 60; // 60 seconds
    const display = document.querySelector('#timer');
    startTimer(countdownTime, display);
    // ensure the event listener is only triggered once
}, {
    once: true
});

// listen for input in the typing box
typingInput.addEventListener('input', checkTyping);

// remove placeholder text when input box is clicked
typingInput.addEventListener('focus', function () {
    typingInput.placeholder = '';
});

// restore placeholder text when the input box is empty
typingInput.addEventListener('blur', function () {
    if (typingInput.value === '') {
        typingInput.placeholder = 'Start typing here...';
    }
});

document.getElementById('reset-button').addEventListener('click', resetTest);


/*******************************
 ******* EVENT HANDLERS ********
 *******************************/

window.onload = loadRandomExcerpt;