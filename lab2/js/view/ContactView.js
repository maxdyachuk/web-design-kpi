export default class ContactView {
    
    constructor(contactModel) {
        this.contactModel = contactModel;
    }

    toHtml() {
        return `
            <tr>
                <td>
                    ${this.contactModel.name}
                </td>
                <td>
                    ${this.contactModel.number}
                </td>
                <td>
                    <button data-id="${this.contactModel.id}" class="del-button">Delete</button>
                    <button data-id="${this.contactModel.id}" class="edit-button">Edit</button>
                </td>
            </tr>`;
    }
}