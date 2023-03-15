import { Component, Inject, inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Meta } from '@angular/platform-browser';
import { CustomersService } from './../services/customers.service';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  title = 'orderManagementSystem';

  customersData: [] = [];

  constructor(private customersService: CustomersService, private metaService: Meta, private deviceService: DeviceService) {
  }

  async ngOnInit() {
    this.deviceService.getCurrentDevice();
    // const device = await this.deviceService.getCurrentDevice();
    // debugger
    // console.log(device);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // if (environment.prod) {
    //   // 因目前 API 非 https，所以需要這段 CSP，假裝
    //   this.metaService.addTag({ httpEquiv: 'Content-Security-Policy', content: "upgrade-insecure-requests" });
    // }

    // this.customersService.getCustomers('20230306').subscribe(res => this.customersData = res);

  }
}
