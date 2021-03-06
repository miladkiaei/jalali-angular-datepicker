import {Moment} from 'moment/moment';
import {ICalendar} from '../common/models/calendar.model';
import {ECalendarSystem} from '../common/types/calendar-type-enum';

export interface ITimeSelectConfig extends ICalendar {
  hours12Format?: string;
  hours24Format?: string;
  maxTime?: Moment;
  meridiemFormat?: string;
  minTime?: Moment;
  minutesFormat?: string;
  minutesInterval?: number;
  secondsFormat?: string;
  secondsInterval?: number;
  showSeconds?: boolean;
  showTwentyFourHours?: boolean;
  timeSeparator?: string;
  calendarSystem?: ECalendarSystem;
}
