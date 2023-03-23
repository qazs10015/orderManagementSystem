import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, inject, LOCALE_ID, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Meta } from '@angular/platform-browser';
import { CustomersService } from './../services/customers.service';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  title = 'orderManagementSystem';

  customersData: [] = [];

  drawerMode = 'side';

  customersService = inject(CustomersService);

  deviceService = inject(DeviceService);

  constructor() {
  }


  ngOnInit() {

    this.deviceService.getCurrentDevice().subscribe(result => {
      const currentScreenSize = Object.keys(result.breakpoints).find(query => (result.breakpoints[query]))!;
      // const screenSizeName = this.deviceService.getScreenSizeName(currentScreenSize);
      // console.log(screenSizeName);

      switch (currentScreenSize) {
        case Breakpoints.XSmall:
        case Breakpoints.Small:
        case Breakpoints.Medium:
          this.drawer.mode = 'over';
          this.drawer.opened = false;
          break;
        default:
          this.drawer.mode = 'side';
          this.drawer.opened = true;
          break;
      }

      // this.drawer.toggle();

      // for (const query of Object.keys(result.breakpoints)) {
      //   if (result.breakpoints[query]) {
      //     this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
      //     // console.log(this.currentScreenSize);
      //   }
      // }
    });
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

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
