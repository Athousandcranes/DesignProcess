class IssuesView {
    constructor() {
        this.addIssueListener = () => {};
        this.deleteIssueListener = () => {};
        this.completeIssueListener = () => {};

        let className = 'issues';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        this.element.id = 'issues-div';
        
        this.issueList = document.createElement('ul');
        this.issueList.setAttribute('class', className);

        let issueText = document.createElement('input');
        issueText.setAttribute('type', 'text');
        issueText.id = 'issue-text';

        this.deselectIssues();

        let addIssueButton = document.createElement('input');
        addIssueButton.setAttribute('class', className);
        addIssueButton.setAttribute('type', 'button');
        addIssueButton.value = 'Add Issue';
        addIssueButton.addEventListener('click', () => {
            this.addIssueListener(document.getElementById('issue-text').value);
        });
        
        let completeIssueButton = document.createElement('input');
        completeIssueButton.setAttribute('class', className);
        completeIssueButton.setAttribute('type', 'button');
        completeIssueButton.value = 'Complete Issue';
        completeIssueButton.addEventListener('click', () => {
            // TODO: Fix complete button
            let issues = this.getSelected();

            for(let iter in issues) {
                this.toggleCompleted(issues[iter]);
                this.completeIssueListener(issues[iter].innerHTML);
                this.deselectIssues();
            }
        });

        let deleteIssueButton = document.createElement('input');
        deleteIssueButton.setAttribute('class', className);
        deleteIssueButton.setAttribute('type', 'button');
        deleteIssueButton.value = 'Delete Issue';
        deleteIssueButton.addEventListener('click', () => {
            // TODO: Fix delete button
            let issues = this.getSelected();

            for(let iter in issues) {
                // TODO: Remove test code
                console.log(issues)
                this.deleteIssueListener(issues[iter].id);
                this.deselectIssues();
            }
        });

        this.element.appendChild(this.issueList);
        this.element.appendChild(issueText);
        this.element.appendChild(addIssueButton);
        this.element.appendChild(completeIssueButton);
        this.element.appendChild(deleteIssueButton);
    }

    addIssue(title, completed, id) {
        let newListItem = document.createElement('li');
        // TODO: Fix setting class name to use class element
        newListItem.setAttribute('class', 'issues');
        newListItem.setAttribute('selected', 'false');
        newListItem.setAttribute('completed', completed);
        newListItem.id = id;
        newListItem.innerHTML = title;

        newListItem.addEventListener('click', (event) => {this.toggleSelected(event.target);});

        this.issueList.appendChild(newListItem);
    }

    getSelected() {
        let selectedIssues = [];
        var issue = this.issueList.firstChild;

        while(issue) {
            if(issue.getAttribute('selected') == 'true') {
                selectedIssues.push(issue);
            }
            issue = issue.nextSibling;
        }
        return selectedIssues;
    }

    resetIssues() {
        while( this.issueList.firstChild ){
            this.issueList.removeChild( this.issueList.firstChild );
        }
    }

    deselectIssues() {
        var issue = this.issueList.firstChild;
        while(issue) {
            issue.setAttribute('selected', 'false');
            issue = issue.nextSibling;
        }
    }

    selectIssue(element) {
        this.deselectIssues();
        element.setAttribute('selected', 'true');
    }

    toggleSelected(element) {
        if(element.getAttribute('selected') == 'true') {
            element.setAttribute('selected', 'false');
        } else {
            element.setAttribute('selected', 'true');
        }
    }

    toggleCompleted(element) {
        if(element.getAttribute('completed') == 'true') {
            element.setAttribute('completed', 'false');
        } else {
            element.setAttribute('completed', 'true');
        }
    }
}

export { IssuesView };