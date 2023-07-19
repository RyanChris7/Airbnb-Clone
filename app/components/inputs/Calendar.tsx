"use client";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disableDates?: Date[];
}

const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  disableDates,
}) => {
  return <DateRange />;
};

export default Calendar;
