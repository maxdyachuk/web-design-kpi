export default class Contact {

    constructor(name, number) {
        this.id = Math.round(Math.random() * 100000).toString();
        this.name = name;
        this.numbers = [number];

        this.onChangeCallback = null;
        return this.initOnModelChange();
    }

    addNumber(number) {
        this.numbers.push(number);
        this.numbers = this.numbers;
    }
    
    setOnChangeCallback() {
        this.onChangeCallback = onChangeCallback;
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                if (this.onChangeCallback) this.onChangeCallback(this);
                return true;
            }
        }
        return new Proxy(this, handler);
    }
}