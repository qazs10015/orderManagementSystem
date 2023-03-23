import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { formatDate } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import '@angular/common/locales/global/zh';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarDateFormatter, CalendarModule, DateAdapter, DateFormatterParams } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { AuthInterceptor } from 'src/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShareModule } from './share/share.module';
import { CustomInfoComponent } from './dialogs/custom-info/custom-info.component';

class CustomDateFormatter extends CalendarDateFormatter {
  public override monthViewColumnHeader({ date }: DateFormatterParams): string {

    return formatDate(date, 'E', 'zh-tw').substring(1);
  }

  // public override monthViewTitle({ date, locale }: DateFormatterParams): string {
  //   return formatDate(date, 'y年M月', 'zh-tw');
  // }
}

export function momentAdapterFactory() {

  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DashboardComponent,
    NavbarComponent,
    CustomInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ShareModule,
    AppRoutingModule,
    HttpClientModule,
    ShareModule,
    CalendarModule.forRoot(
      { provide: DateAdapter, useFactory: momentAdapterFactory },
    ),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
