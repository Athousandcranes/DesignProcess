class TimerView {
    constructor() {
        let className = 'timer';

        this.startTimerListener = () => {};
        this.resetTimerListener = () => {};
        this.stopTimerListener = () => {};


        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        this.element.id = 'timer-div';

        let timerHeader = document.createElement('h1');
        timerHeader.id = 'timer-display'
        timerHeader.setAttribute('class', className);
        timerHeader.innerHTML = '4:30';

        let startButton = document.createElement('input');
        startButton.setAttribute('type', 'button');
        startButton.setAttribute('value', 'Start');
        startButton.addEventListener('click', () => {this.startTimerListener();});

        let resetButton = document.createElement('input');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('value', 'Reset');
        resetButton.addEventListener('click', () => {this.resetTimerListener();});

        let stopButton = document.createElement('input');
        stopButton.setAttribute('type', 'button');
        stopButton.setAttribute('value', 'Stop');
        stopButton.addEventListener('click', () => {this.stopTimerListener();});

        this.element.appendChild(timerHeader);
        this.element.appendChild(startButton);
        this.element.appendChild(stopButton);
        this.element.appendChild(resetButton);
    }

    setTimer(minutes, seconds) {
        let timerDisplay = document.getElementById('timer-display');

        timerDisplay.innerHTML = minutes + ':' + seconds;
    }
}

export { TimerView };