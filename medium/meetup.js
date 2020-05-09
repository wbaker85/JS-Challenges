const NTH_DAY_OFFSETS = {
  '1st': 0,
  '2nd': 7,
  '3rd': 14,
  '4th': 21,
  '5th': 28,
};

const DAYS_IN_WEEK = 7;
const MINIMUM_TEENTH_DATE = 13;

let validDateInMonth = function(year, month, date) {
  return (new Date(year, month, date)).getMonth() === month;
};

let dateOfFirstOccurance = function(year, month, dayStr) {
  let date = new Date(year, month, 1);

  while (date.toLocaleString('en-US', {weekday: 'long'}) !== dayStr) {
    date.setDate(date.getDate() + 1);
  }

  return date.getDate();
};

let lastDayInMonth = function(year, month, date) {
  let moreDates = validDateInMonth(year, month, date + DAYS_IN_WEEK);
  return moreDates ? lastDayInMonth(year, month, date + DAYS_IN_WEEK) : date;
};

let firstTeenthDay = function(date) {
  while (date < MINIMUM_TEENTH_DATE) {
    date += DAYS_IN_WEEK;
  }
  return date;
};

let meetupDay = function(year, month, dayStr, descriptor) {
  let dayOfMonth = dateOfFirstOccurance(year, month, dayStr);

  switch (descriptor) {
    case 'teenth':
      dayOfMonth = firstTeenthDay(dayOfMonth);
      break;
    case 'last':
      dayOfMonth = lastDayInMonth(year, month, dayOfMonth);
      break;
    default:
      dayOfMonth += NTH_DAY_OFFSETS[descriptor];
  }

  if (validDateInMonth(year, month, dayOfMonth)) {
    return new Date(year, month, dayOfMonth);
  } else {
    throw new Error('Invalid date!');
  }
};

module.exports = meetupDay;