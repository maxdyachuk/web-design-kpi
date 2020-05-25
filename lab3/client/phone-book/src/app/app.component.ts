import {Component} from '@angular/core';
import {ContactsService} from './contacts.service';
import {Contact} from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
    contactsService.getAllSorted()
      .subscribe(data => this.contacts = data);
  }

  onAddContact() {
    const dto = new Contact();
    dto.name = prompt('Enter name: ');
    dto.numbers = [prompt('Enter number: ')];
    this.contactsService.create(dto)
      .subscribe(_ => this.contactsService.getAllSorted()
        .subscribe(data => this.contacts = data));
  }

  onAddNumber(dto: Contact) {
    const phoneNumber = prompt('Enter number: ');
    dto.numbers.push(phoneNumber);
    this.contactsService.update(dto.id, dto)
      .subscribe(_ => this.contactsService.getAllSorted()
        .subscribe(data => this.contacts = data));
  }

  onEdit(id: number) {
    const dto = new Contact();
    dto.name = prompt('Enter name: ');
    dto.numbers = [prompt('Enter number: ')];
    this.contactsService.update(id, dto)
      .subscribe(_ => this.contactsService.getAllSorted()
        .subscribe(data => this.contacts = data));
  }

  onDelete(id: number) {
    this.contactsService.delete(id)
      .subscribe(_ => this.contactsService.getAllSorted()
        .subscribe(data => this.contacts = data));
  }
}
