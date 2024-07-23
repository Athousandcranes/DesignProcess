class GoalsView {
    constructor() {
        let className = 'goals';

        this.element = document.createElement('div');
        this.element.setAttribute('class', className);
        this.element.id = 'goals-div';
        
        this.goalsList = document.createElement('ul');
        this.goalsList.setAttribute('class', className);

        this.element.appendChild(this.goalsList);
    }

    addListItem(data) {
        let newListItem = document.createElement('li');
        // TODO: Fix setting class name to use class element
        newListItem.setAttribute('class', 'issues');
        newListItem.innerHTML = data;

        this.goalsList.appendChild(newListItem);
    }

    resetList() {
        while( this.goalsList.firstChild ){
            this.goalsList.removeChild( this.goalsList.firstChild );
        }
    }
}

export { GoalsView };