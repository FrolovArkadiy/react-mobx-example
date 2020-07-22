import {action, observable} from "mobx";

class CounterStore {
    @observable counter = 0;

    @action.bound inc() {
        this.counter++;
    }

    @action.bound dec() {
        this.counter--;
    }
}

export default CounterStore