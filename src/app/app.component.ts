import { environment } from './../environments/environment';
import { CustomersService } from './../services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'orderManagementSystem';

  customersData: [] = [];

  constructor(private customersService: CustomersService, private metaService: Meta) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (environment.prod) {
      // 因目前 API 非 https，所以需要這段 CSP，假裝
      this.metaService.addTag({ httpEquiv: 'Content-Security-Policy', content: "upgrade-insecure-requests" });
    }

    this.customersService.getCustomers('20230306').subscribe(res => this.customersData = res);

  }
}
