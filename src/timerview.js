class TimerView {
    constructor() {
        let className = 'timer';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        this.element.id = 'timer-div';

        let timerHeader = document.createElement('h1');
        timerHeader.setAttribute('class', className);
        timerHeader.innerHTML = '4:30';

        let startButton = document.createElement('input');
        startButton.setAttribute('type', 'button');
        startButton.setAttribute('value', 'Start');

        let resetButton = document.createElement('input');
        resetButton.setAttribute('type', 'button');
        resetButton.setAttribute('value', 'Reset');

        this.element.appendChild(timerHeader);
        this.element.appendChild(startButton);
        this.element.appendChild(resetButton);
    }
}

export { TimerView };