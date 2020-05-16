export default class ContactListModel {

    constructor() {
        this.contacts = [];
        this.onChangeCallback = null;
    }

    add(contact) {
        contact.onChangeCallback = this.onChangeCallback;
        this.contacts.push(contact);
    }

    delete(contactId) {
        const contactIndex = this.contacts.findIndex( (contact) => contact.id === contactId); 
        this.contacts.splice(contactIndex, 1);
    }

    update(contactId, name, number) {
        const contactIndex = this.contacts.findIndex( (contact) => contact.id === contactId);
        this.contacts[contactIndex].name = name;
        this.contacts[contactIndex].number = number;
    }

    setOnChangeCallback(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
}