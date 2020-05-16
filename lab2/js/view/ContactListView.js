import ContactView from './ContactView.js';

export default class ContactListView {

    constructor(contactListModel) {
        this.contactListModel = contactListModel;
        this.controllerOnAddContact = null;
        this.controllerOnDelContact = null;
        this.controllerOnEditContact = null;
        document.querySelector('#contacts').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
    }

    setControllerOnAddContact(controllerOnAddContact) {
        this.controllerOnAddContact = controllerOnAddContact;
    }

    setControllerOnDelContact(controllerOnDelContact) {
        this.controllerOnDelContact = controllerOnDelContact;
    }

    setControllerOnEditContact(controllerOnEditContact) {
        this.controllerOnEditContact = controllerOnEditContact;
    }

    onClick(e) {
        if (e.target.className === 'del-button') {
            this.controllerOnDelContact(e.target.dataset.id);
            return;
        } 
        if (e.target.className === 'edit-button') {
            const name = prompt('Enter name:', '');
            const number = prompt('Enter number:', '');
            this.controllerOnEditContact(e.target.dataset.id, name, number);
        }
    }

    onAddContact(e) {
        const name = prompt('Enter name:', '');
        const number = prompt('Enter number:', '');
        this.controllerOnAddContact(name, number);
    }

    toHtml() {
        const contactsHtml = this.contactListModel.contacts.map( (contact) => {
            const contactView = new ContactView(contact);
            return contactView.toHtml();
        }).join("");
        return `<table border="1"><tr><th>Name</th><th>Number</th><th>Operations</th></tr>${contactsHtml}</table>`;
    }
}