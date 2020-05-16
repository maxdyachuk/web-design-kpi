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
                    ${this.numbersToHtml(this.contactModel.numbers)}
                </td>
                <td>
                    <button data-id="${this.contactModel.id}" class="add-number-button">Add number</button>
                    <button data-id="${this.contactModel.id}" class="edit-button">Edit</button>    
                    <button data-id="${this.contactModel.id}" class="delete-button">Delete</button>
                </td>
            </tr>`;
    }

    numbersToHtml(numbers) {
        return Array.prototype.join.call(numbers, "<br>");
    }
}