import { NavBarView } from './navbarview.js';
import { IssuesView } from './issuesview.js';
import { GoalsView } from './goalsview.js';
import { TimerView } from './timerview.js';
import { IssuesModel } from './issuesmodel.js';
import { Issue } from './issue.js';

class Model {
    constructor() {
        this.issuesModel = new IssuesModel();
    }
};

class View {
    constructor() {
        this.navBarView = new NavBarView();
        this.issuesView = new IssuesView();
        this.goalsView = new GoalsView();
        this.timerView = new TimerView();

        const root = document.getElementById('root');
        
        root.append(this.navBarView.element);
        root.append(this.issuesView.element);
        root.append(this.goalsView.element);
        root.append(this.timerView.element);
    }
};

class App {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.model.issuesModel.onUpdate = (issues) => {
            for(let iter in issues) {
                let issue = JSON.parse(issues[iter]);

                this.view.issuesView.resetIssues();
                this.view.issuesView.addIssue(issue.title, issue.completed);
            }
        };
        this.view.issuesView.addIssueListener = (title) => {
            let newIssue = new Issue(title);
            this.model.issuesModel.addIssue(newIssue);
        };
    }
};

export { App }