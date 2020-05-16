export default class ContactListModel {

    constructor() {
        this.contacts = [];
        this.onChangeCallback = null;
    }

    add(contact) {
        contact.onChangeCallback = this.onChangeCallback;
        this.contacts.push(contact);
        this.sort();
    }

    delete(contactId) {
        const contactIndex = this.contacts.findIndex( (contact) => contact.id === contactId); 
        this.contacts.splice(contactIndex, 1);
    }

    update(contactId, name, number) {
        const contactIndex = this.contacts.findIndex( (contact) => contact.id === contactId);
        this.contacts[contactIndex].name = name;
        this.contacts[contactIndex].numbers = [number];
        this.sort();
    }

    addNumber(contactId, number) {
        const contactIndex = this.contacts.findIndex( (contact) => contact.id === contactId);
        this.contacts[contactIndex].addNumber(number);
    }

    sort() {
        this.contacts = this.contacts.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        });
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
}