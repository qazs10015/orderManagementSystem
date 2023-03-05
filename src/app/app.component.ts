import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orderManagementSystem';

  customersData: [] = [];

  constructor(private customersService: CustomersService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.customersService.getCustomers('20230306').subscribe(res => this.customersData = res);

  }
}
