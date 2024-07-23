class NavBarView {
    constructor() {
        let className = 'navbar';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);

        let issuesButton = document.createElement('input');
        issuesButton.setAttribute('class', className);
        issuesButton.setAttribute('type', 'radio');
        issuesButton.id = 'issues-button';
        let issuesLabel = document.createElement('label');
        issuesLabel.setAttribute('class', className);
        issuesLabel.setAttribute('for', 'issues-button');
        issuesLabel.innerHTML = 'Issues';

        let goalsButton = document.createElement('input');
        goalsButton.setAttribute('class', className);
        goalsButton.setAttribute('type', 'radio');
        goalsButton.id = 'goals-button';
        let goalsLabel = document.createElement('label');
        goalsLabel.setAttribute('class', className);
        goalsLabel.setAttribute('for', 'goals-button');
        goalsLabel.innerHTML = 'Goals';

        let timerButton = document.createElement('input');
        timerButton.setAttribute('class', className);
        timerButton.setAttribute('type', 'radio');
        timerButton.id = 'timer-button';
        let timerLabel = document.createElement('label');
        timerLabel.setAttribute('class', className);
        timerLabel.setAttribute('for', 'timer-button');
        timerLabel.innerHTML = 'Timer';

        this.element.appendChild(issuesButton);
        this.element.appendChild(issuesLabel);
        this.element.appendChild(goalsButton);
        this.element.appendChild(goalsLabel);
        this.element.appendChild(timerButton);
        this.element.appendChild(timerLabel);

        issuesButton.addEventListener('click', () => {this.showTab('issues-div');});
        goalsButton.addEventListener('click', () => {this.showTab('goals-div');});
        timerButton.addEventListener('click', () => {this.showTab('timer-div');});
    }

    showTab(tab) {
        // TODO: this is not good........
        document.getElementById('goals-div').style.display = 'none';
        document.getElementById('issues-div').style.display = 'none';
        document.getElementById('timer-div').style.display = 'none';

        document.getElementById(tab).style.display = 'block';
        console.log(document.getElementById('goals-div'))
    }
};

export { NavBarView };