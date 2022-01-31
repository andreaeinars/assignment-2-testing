import {getYear, isBefore, isAfter, isSameDay as isSame, addSeconds, addMinutes, addDays, addWeeks, addYears, addMonths} from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() : number {
  return getYear(new Date());
}

export function add(date: Date, number: number, type = DATE_UNIT_TYPES.DAYS) : Date{
  if (type == DATE_UNIT_TYPES.SECONDS) {
    return addSeconds(date, number);
  }
  else if (type == DATE_UNIT_TYPES.MINUTES) {
    return addMinutes(date, number);
  }
  else if (type == DATE_UNIT_TYPES.DAYS) {
    return addDays(date, number);
  }
  else if (type == DATE_UNIT_TYPES.WEEKS) {
    return addWeeks(date, number);
  }
  else if (type == DATE_UNIT_TYPES.MONTHS) {
    return addMonths(date, number);
  }
  else if (type == DATE_UNIT_TYPES.YEARS) {
    return addYears(date, number);
  }
}

export function isWithinRange(date: Date, from: Date, to: Date) : boolean {
  return (isAfter(date, from) && isBefore(date, to));
}

export function isDateBefore(date: Date, compareDate: Date) : boolean{
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date) : boolean{
  return isSame(date, compareDate);
}
