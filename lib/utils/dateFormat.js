import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return date ? formatInTimeZone(date, "America/New_York", "dd MMM yyyy") : null;
};

export default dateFormat;
