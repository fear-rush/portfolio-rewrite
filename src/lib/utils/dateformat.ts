type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
  date: string,
  dateStyle: DateStyle = "long",
  locales = "en-GB"
) {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return formatter.format(new Date(date));
}
