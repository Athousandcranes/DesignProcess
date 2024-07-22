class IssuesView {
    constructor() {
        let className = 'issues';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        
        this.issueList = document.createElement('ul');
        this.issueList.setAttribute('class', className);

        this.element.appendChild(this.issueList);
    }

    addIssue(title, completed) {
        let newListItem = document.createElement('li');
        // TODO: Fix setting class name to use class element
        newListItem.setAttribute('class', 'issues');
        newListItem.innerHTML = title;

        this.issueList.appendChild(newListItem);
    }

    renderIssues(issues) {
        this.resetIssues();

        for(let iter in issues) {
            this.addIssue(issues[iter]);
        }
    }

    resetIssues() {
        while( this.issueList.firstChild ){
            this.issueList.removeChild( this.issueList.firstChild );
        }
    }
}

export { IssuesView };