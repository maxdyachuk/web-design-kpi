import ContactView from './ContactView.js';

export default class ContactListView {

    constructor(contactListModel) {
        this.contactListModel = contactListModel;
        this.controllerOnAddContact = null;
        this.controllerOnDeleteContact = null;
        this.controllerOnEditContact = null;
        this.controllerOnAddNumber = null;
        document.querySelector('#contacts').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
    }

    setControllerOnAddContact(controllerOnAddContact) {
        this.controllerOnAddContact = controllerOnAddContact;
    }

    setControllerOnDeleteContact(controllerOnDeleteContact) {
        this.controllerOnDeleteContact = controllerOnDeleteContact;
    }

    setControllerOnEditContact(controllerOnEditContact) {
        this.controllerOnEditContact = controllerOnEditContact;
    }

    setControllerOnAddNumber(controllerOnAddNumber) {
        this.controllerOnAddNumber = controllerOnAddNumber;
    }

    onClick(e) {
        if (e.target.className === 'delete-button') {
            this.controllerOnDeleteContact(e.target.dataset.id);
            return;
        } else if (e.target.className === 'edit-button') {
            const name = prompt('Enter name:', '');
            const number = prompt('Enter number:', '');
            this.controllerOnEditContact(e.target.dataset.id, name, number);
        } else if (e.target.className === 'add-number-button') {
            const number = prompt('Enter number:', '');
            this.controllerOnAddNumber(e.target.dataset.id, number);
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
        return `<table border="1"><tr><th>Name</th><th>Numbers</th><th>Operations</th></tr>${contactsHtml}</table>`;
    }
}