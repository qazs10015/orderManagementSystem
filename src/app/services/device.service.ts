import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  destroyed = new Subject<void>();
  currentScreenSize: string = '';

  private displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) { }

  async getCurrentDevice() {
    // const state: BreakpointState = await firstValueFrom(this.breakpointObserver
    //   .observe(Array.from(this.displayNameMap.keys())));

    // const deviceSize = Object.keys(state.breakpoints).find(query => state.breakpoints[query] === true) ?? '';
    // return this.displayNameMap.get(deviceSize);

    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            console.log(this.currentScreenSize);
          }
        }
      });
  }
}
