import { MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from './../services/dialog.service';

import { Component, inject, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { CustomInfoComponent } from '../dialogs/custom-info/custom-info.component';

export const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

// moment.updateLocale('zh-tw', {
//   week: {
//     dow: DAYS_OF_WEEK.MONDAY,
//   },

//   weekdays: [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//   ],
//   weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// });


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  activeDayIsOpen = false;

  locale: string = 'zh-tw';

  events: CalendarEvent[] = [
    {
      title: 'Click me',
      color: colors.yellow,
      start: new Date(),
    },
    {
      title: 'Or click me',
      color: colors.blue,
      start: new Date(),
    },
  ];

  dialog = inject(DialogService);

  ngOnInit(): void {


  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    const data = {
      "data": {
        "id": "4007323949",
        "customer": "李 偉慈 ",
        "status": 5,
        "repairTime": "2023-03-20 08:00:00",
        "SN": "PC1SAWMP",
        "MTM": "20T1S07K00",
        "productDescription": "NB TP T14s G1 I7 32G 1T 10P",
        "case": "KLTWWRT 相機無畫面",
        "problemDescription": "相機無畫面",
        "diagnosticNote": "",
        "repairNote": "",
        "companyName": "斯維特資訊",
        "address": "新竹市東區忠孝路182號1F\r\nEast Dist., Hsinchu City 300",
        "mobilePhone": "0919420119",
        "businessPhone": "0",
        "extension": "",
        "note": ""
      },
      "message": 1
    }

    const config: MatDialogConfig = {
      data,
      minWidth: '375px'
    };
    this.dialog.openDialog(CustomInfoComponent, config);

    // if (isSameMonth(date, this.viewDate)) {
    //   if (
    //     (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
    //     events.length === 0
    //   ) {
    //     this.activeDayIsOpen = false;
    //   } else {
    //     this.activeDayIsOpen = true;
    //   }
    //   this.viewDate = date;
    // }
  }
}
