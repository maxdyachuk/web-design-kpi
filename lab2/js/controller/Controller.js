import Contact from "../model/Contact.js";

export default class Controller {
    constructor(contactListModel, contactListView) {
        this.contactListModel = contactListModel;
        this.contactListView = contactListView;
        this.contactListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.contactListView.setControllerOnAddContact(this.addContact);
        this.contactListView.setControllerOnDeleteContact(this.deleteContact);
        this.contactListView.setControllerOnEditContact(this.editContact);
        this.contactListView.setControllerOnAddNumber(this.addNumber);
        this.initOnModelChange();
        document.querySelector('#add-contact').addEventListener('click', (e)=>contactListView.onAddContact(e));
    }

    onChangeCallback() {
        document.querySelector('#contacts').innerHTML = this.contactListView.toHtml();
    }

    addContact(name, number) {
        const contact = new Contact(name, number);
        this.contactListModel.add(contact);
    }

    deleteContact(id) { 
        this.contactListModel.delete(id);
    }

    editContact(id, name, number) { 
        this.contactListModel.update(id, name, number);
    }

    addNumber(id, number) {
        this.contactListModel.addNumber(id, number);
    }

    initOnModelChange() {
        let handler = {
            set: (obj, prop, val) => {
                obj[prop] = val;
                document.querySelector('#contacts').innerHTML = this.contactListView.toHtml();
                return true;
            }
        }
        this.contactListModel.contacts = new Proxy(this.contactListModel.contacts, handler);
    }
}