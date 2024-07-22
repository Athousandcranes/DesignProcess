class Issue {
    constructor(title) {
        this.uuid = this.uuidv4();
        this.title = title;
        this.completed = false;
    }

    // Copied from https://www.geeksforgeeks.org/how-to-create-a-guid-uuid-in-javascript/
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, 
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export { Issue };