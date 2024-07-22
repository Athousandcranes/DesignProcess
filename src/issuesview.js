class IssuesView {
    constructor() {
        this.addIssueListener = () => {};

        let className = 'issues';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        
        this.issueList = document.createElement('ul');
        this.issueList.setAttribute('class', className);

        let issueText = document.createElement('input');
        issueText.setAttribute('type', 'text');
        issueText.id = 'issue-text';

        let addIssueButton = document.createElement('input');
        addIssueButton.setAttribute('class', className);
        addIssueButton.setAttribute('type', 'button');
        addIssueButton.value = 'Add Issue';
        addIssueButton.addEventListener('click', () => {
            this.addIssueListener(document.getElementById('issue-text').value);
        });

        this.element.appendChild(this.issueList);
        this.element.appendChild(issueText);
        this.element.appendChild(addIssueButton);
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