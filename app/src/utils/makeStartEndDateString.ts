import dayjs from "dayjs";

export const makeStartEndDateString = (startAt: string, endAt: string) => {
  const start = dayjs(startAt).format("YYYY/MM/DD HH:mm");
  const end = dayjs(endAt).format("YYYY/MM/DD HH:mm");
  return `${start} - ${end}`;
};
