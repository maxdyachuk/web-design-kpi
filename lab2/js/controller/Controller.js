import Contact from "../model/Contact.js";

export default class Controller {
    constructor(contactListModel, contactListView) {
        this.contactListModel = contactListModel;
        this.contactListView = contactListView;
        this.contactListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
        this.contactListView.setControllerOnAddContact(this.addContact);
        this.contactListView.setControllerOnDelContact(this.delContact);
        this.contactListView.setControllerOnEditContact(this.editContact);
        this.initOnModelChange();
        document.querySelector('#add-contact').addEventListener('click', (e)=>contactListView.onAddContact(e));
    }

    onChangeCallback() {
        /* updates UI when a model has changed (title, done attributes) */
        document.querySelector('#contacts').innerHTML = this.contactListView.toHtml();
    }

    addContact(name, number) {
        const contact = new Contact(name, number);
        this.contactListModel.add(contact);
    }

    delContact(id) { 
        this.contactListModel.delete(id);
    }

    editContact(id, name, number) { 
        this.contactListModel.update(id, name, number);
    }

    initOnModelChange() {
        /* updates UI when a model list has changed (adds, deletes items) */
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