/** @babel */
import EventEmitter from 'events';

export class Command extends EventEmitter {

    constructor({name = '', execute = null} = {}) {
        super();
        this.name = name;
        if (execute !== null) {
            this.execute = execute;
        }
        this.params = {};
    }

    cancel() {

    }

    execute(...options) {
    }

    get(key) {
        return this.params[key];
    }

    getName() {
        return this.name;
    }

    put(key, value) {
        this.params[key] = value;
    }

    set(params) {
        this.params = params;
    }

}

