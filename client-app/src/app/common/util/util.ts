export const combineDateAndTime = (date: Date, time: Date) => {
  const getTimeString = time.getHours() + ":" + time.getMinutes() + ":00";
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const getDateString = `${year}-${month}-${day}`;

  return new Date(getDateString + " " + getTimeString);
};
