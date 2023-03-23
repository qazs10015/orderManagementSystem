import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) { }

  getCurrentDevice() {
    // const state: BreakpointState = await firstValueFrom(this.breakpointObserver
    //   .observe(Array.from(this.displayNameMap.keys())));

    // const deviceSize = Object.keys(state.breakpoints).find(query => state.breakpoints[query] === true) ?? '';
    // return this.displayNameMap.get(deviceSize);

    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed));
  }

  getScreenSizeName(deviceSize: string) {
    return this.displayNameMap.get(deviceSize);
  }
}
