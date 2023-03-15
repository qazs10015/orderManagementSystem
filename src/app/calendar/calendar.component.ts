
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import * as moment from 'moment';

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

  ngOnInit(): void {
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
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
