import { NavBarView } from './navbarview.js';
import { Issue } from './issue.js';
import { IssuesModel } from './issuesmodel.js';
import { IssuesView } from './issuesview.js';
import { TimerModel } from './timermodel.js';
import { TimerView } from './timerview.js';
import { GoalsView } from './goalsview.js';


class Model {
    constructor() {
        this.issuesModel = new IssuesModel();
        this.timerModel = new TimerModel();
    }
};

class View {
    constructor() {
        this.navBarView = new NavBarView();
        this.issuesView = new IssuesView();
        this.goalsView = new GoalsView();
        this.timerView = new TimerView();

        const root = document.getElementById('root');

        let designImage = document.createElement('img');
        designImage.setAttribute('src', 'src/design-cycle.webp');
        designImage.setAttribute('heigh', '500');
        designImage.setAttribute('width', '500');
        root.append(designImage);
        
        root.append(this.navBarView.element);
        root.append(this.issuesView.element);
        root.append(this.goalsView.element);
        root.append(this.timerView.element);

        this.navBarView.showTab('issues-div');
    }
};

class App {
    constructor() {
        this.model = new Model();
        this.view = new View();


        this.model.issuesModel.onUpdate = (issues) => {
            this.view.issuesView.resetIssues();

            for(let iter in issues) {
                let issue = JSON.parse(issues[iter]);
                this.view.issuesView.addIssue(issue.title, issue.completed, issue.uuid);
            }
        };
        this.view.issuesView.addIssueListener = (title) => {
            let newIssue = new Issue(title);
            this.model.issuesModel.addIssue(newIssue);
        };
        this.view.issuesView.deleteIssueListener = (uuid) => {
            this.model.issuesModel.removeIssue(uuid);
        }

        this.view.timerView.startTimerListener = () => {
            this.model.timerModel.startTimer();
        }
        this.view.timerView.resetTimerListener = () => {
            this.model.timerModel.stopTimer();
            // TODO: hardcoded test values
            // should get time from some kind of time selector...
            this.model.timerModel.setTimer(300000);
        }
        this.view.timerView.stopTimerListener = () => {
            this.model.timerModel.stopTimer();
        }
        this.model.timerModel.updateTimerCallback = (minutes, seconds) => {
            this.view.timerView.setTimer(minutes, seconds);
        }

        // Display timer from timerModel
        this.view.timerView.setTimer(this.model.timerModel.getMinutes(), this.model.timerModel.getSeconds());

        // Display issues from IndexedDB on load
        let issues = this.model.issuesModel.getIssues();
        this.view.issuesView.resetIssues();
        for(let iter in issues) {
            let issue = JSON.parse(issues[iter]);
            this.view.issuesView.addIssue(issue.title, issue.completed);
        }
    }
};

export { App }