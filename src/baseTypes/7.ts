/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.SUN || day === WeekDay.SAT;
}