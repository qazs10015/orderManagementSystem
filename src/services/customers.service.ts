import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {



  constructor(private http: HttpClient) { }

  getCustomers(dateString: string) {

    return this.http.get<[]>(`/api/customers/${dateString}`);
  }
}
