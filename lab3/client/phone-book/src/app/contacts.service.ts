import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from './contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  baseUrl = 'http://localhost:8080/api/contacts/';

  constructor(private http: HttpClient) {
  }

  getAllSorted(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  create(dto: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, dto);
  }

  update(id: number, dto: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.baseUrl + id, dto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
