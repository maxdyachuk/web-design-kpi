import ContactListModel from './model/ContactListModel.js';
import ContactListView from './view/ContactListView.js';
import Controller from './controller/Controller.js';

let contactListModel = new ContactListModel();
let contactListView = new ContactListView(contactListModel);

let controller = new Controller(contactListModel, contactListView);

controller.addContact('John Smith', '1234');
controller.addContact('Adam Cooper', '5678');
