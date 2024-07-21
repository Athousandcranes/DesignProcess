import { NavBarView } from './navbarview.js';

class Model {
    constructor() {
        
    }
};

class View {
    constructor() {
        this.navBarView = new NavBarView();

        const root = document.getElementById('root');
        
        root.append(this.navBarView.element);
    }
};

class App {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
};

export { App }