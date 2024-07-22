import { NavBarView } from './navbarview.js';
import { IssuesView } from './issuesview.js';
import { GoalsView } from './goalsview.js';
import { TimerView } from './timerview.js';
import { IssuesModel } from './issuesmodel.js';
import { Issue } from './issuesmodel.js';

class Model {
    constructor() {
        this.issuesModel = new IssuesModel();
    }

    // TODO: remove test code
    testModel() {
        this.issuesModel.clearIssues();
        this.issuesModel.addIssue(new Issue('do work'));
        this.issuesModel.addIssue(new Issue('cute girls'));
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

        this.model.issuesModel.onUpdate = (data) => {this.view.issuesView.renderIssues(data)};
    }
};

export { App }