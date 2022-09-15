function countSundays(startYear, endYear) {
  const getWeekdayOfTheDate = (day, month, year) => {
    const createDateInformationObject = (day, month, year) => {
      const getAnchorDayOfTheCentury = (year) => {
        if (year >= 1900 && year <= 1999) return 3;
        if (year >= 2000 && year <= 2099) return 2;
      };
      const isLeapYear = (year) => {
        if (year % 4 === 0) {
          if (year % 100 === 0) {
            if (year % 400 === 0) return true;
          } else return true;
        }
        return false;
      };
      const getLastTwoDigitsOfTheYear = (year) => {
        year = String(year);
        return parseInt(year[year.length - 2] + year[year.length - 1]);
      };
      return {
        date: { day, month, year },
        datesOfDoomsdays: {
          1: isLeapYear(year) ? 4 : 3,
          2: isLeapYear(year) ? 29 : 28,
          3: 14,
          4: 4,
          5: 9,
          6: 6,
          7: 11,
          8: 8,
          9: 5,
          10: 10,
          11: 7,
          12: 12,
        },
        anchorDayOfTheCentury: getAnchorDayOfTheCentury(year),
        lastTwoDigitsOfTheYear: getLastTwoDigitsOfTheYear(year),
      };
    };
    const i = createDateInformationObject(day, month, year);

    const calcWeekdayOfTheDoomsdays = (info) =>
      (info.lastTwoDigitsOfTheYear +
        Math.floor(info.lastTwoDigitsOfTheYear / 4) +
        info.anchorDayOfTheCentury) %
      7;
    i.weekdayOfTheDoomsdays = calcWeekdayOfTheDoomsdays(i);

    i.doomsdayDateOfTheMonth = i.datesOfDoomsdays[month];

    return (day - i.doomsdayDateOfTheMonth + i.weekdayOfTheDoomsdays + 35) % 7;
  };
  let count = 0;
  for (let year = startYear; year < endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      if (getWeekdayOfTheDate(1, month, year) === 0) count++;
    }
  }
  return count;
}

console.log(countSundays(1901, 2001));
