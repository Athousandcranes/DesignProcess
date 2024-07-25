import { Issue } from './issue.js'

class IssuesModel {
    constructor() {
        this.onUpdate = () => {};
    }

    getIssues() {
        let issues = [];

        for(let iter = 0; iter < localStorage.length; iter++) {
            issues.push(localStorage.getItem(localStorage.key(iter)));
        }

        return(issues);
    }

    addIssue(issue) {
        localStorage.setItem(issue.uuid, JSON.stringify(issue));

        this.onUpdate(this.getIssues());
    }

    removeIssue(uuid) {
        localStorage.removeItem(uuid);

        this.onUpdate(this.getIssues());
    }

    clearIssues() {
        localStorage.clear();

        this.onUpdate(this.getIssues());
    }
}

export { IssuesModel };