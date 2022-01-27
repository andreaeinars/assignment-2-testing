import { DATE_UNIT_TYPES } from "../constants";
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } from "../dateUtils";

describe("Date Utils", () => {
  // Add your tests here

  test('Current year should be 2022', () => {
    var result : number = getCurrentYear()
    expect(result).toBe(2022);
  })

  test('Current year should not be 2021', () => {
    var result : number = getCurrentYear()
    expect(result).not.toBe(2021);
  })

  test('Adding 5 days to 24.12.2020 should be 29.12.2020', () => {
    const d : Date = new Date(2020, 11, 24);
    var result : Date = add(d, 5);
    const expected : Date = new Date(2020, 11, 29);
    expect(result).toEqual(expected);
  })

  test('Adding 2 months to 24.12.2020 should be 24.02.2021', () => {
    const d : Date = new Date(2020, 11, 24);
    var result : Date = add(d, 2, DATE_UNIT_TYPES.MONTHS);
    const expected : Date = new Date(2021, 1, 24);
    expect(result).toEqual(expected);
  })

  test('Adding 3000 minutes to 24.12.2020 at 8:00 should be 24.02.2021 at 10:00', () => {
    const d : Date = new Date(2020, 11, 24, 8);
    var result : Date = add(d, 3000, DATE_UNIT_TYPES.MINUTES);
    const expected : Date = new Date(2020, 11, 26, 10);
    expect(result).toEqual(expected);
  })

  test('Date 25.05.2021 should be between 24.05.2021 and 26.05.2021', () => {
    const date_1 : Date = new Date(2021, 4, 25);
    const date_2 : Date = new Date(2021, 4, 24);
    const date_3 : Date = new Date(2021, 4, 26);
    var result : boolean = isWithinRange(date_1, date_2, date_3);
    expect(result).toEqual(true);
  })

  test('Date 25.05.2021 at 15:15:15 should be between 25.05.2021 at 15:15:00 and 26.05.2021 at 15:15:27', () => {
    const date_1 : Date = new Date(2021, 4, 25, 15, 15, 15);
    const date_2 : Date = new Date(2021, 4, 25, 15, 15);
    const date_3 : Date = new Date(2021, 4, 25, 15, 15, 27);
    var result : boolean = isWithinRange(date_1, date_2, date_3);
    expect(result).toEqual(true);
  })

  test('Date 25.05.2021 should not be between 21.05.2021 and 24.05.2021', () => {
    const date_1 : Date = new Date(2021, 4, 25);
    const date_2 : Date = new Date(2021, 4, 21);
    const date_3 : Date = new Date(2021, 4, 24);
    var result : boolean = isWithinRange(date_1, date_2, date_3);
    expect(result).toEqual(false);
  })

  test('Date 25.05.2021 should be before 26.05.2021', () => {
    const date_1 : Date = new Date(2021, 4, 25);
    const date_2 : Date = new Date(2021, 4, 26);
    var result : boolean = isDateBefore(date_1, date_2);
    expect(result).toEqual(true);
  })

  test('Date 25.05.2021 at 20:00 should be before 27.05.2021 at 20:00:01', () => {
    const date_1 : Date = new Date(2021, 4, 25, 20);
    const date_2 : Date = new Date(2021, 4, 25, 20, 0, 1);
    var result : boolean = isDateBefore(date_1, date_2);
    expect(result).toEqual(true);
  })

  test('Date 25.05.2021 at 09:00 should not be before 25.05.2020 at 08:59', () => {
    const date_1 : Date = new Date(2021, 4, 25, 9);
    const date_2 : Date = new Date(2020, 4, 25, 8, 59);
    var result : boolean = isDateBefore(date_1, date_2);
    expect(result).toEqual(false);
  })

  test('Date 25.05.2021 should be same as 25.05.2021', () => {
    const date_1 : Date = new Date(2021, 4, 25);
    const date_2 : Date = new Date(2021, 4, 25);
    var result : boolean = isSameDay(date_1, date_2);
    expect(result).toEqual(true);
  })

  test('Date 20.05.2021 at 19:19:19 should be same as 20.05.2021 at 19:19:19 ', () => {
    const date_1 : Date = new Date(2021, 4, 20, 19, 19, 19);
    const date_2 : Date = new Date(2021, 4, 20, 19, 19, 19);
    var result : boolean = isSameDay(date_1, date_2);
    expect(result).toEqual(true);
  })

  test('Date 25.05.2021 should not be same as 26.05.2021', () => {
    const date_1 : Date = new Date(2021, 4, 25);
    const date_2 : Date = new Date(2021, 4, 26);
    var result : boolean = isSameDay(date_1, date_2);
    expect(result).toEqual(false);
  })

});
