import { IActivity, IAttendee } from "../../models/activity";
import { IUser } from "../../models/user";

export const combineDateAndTime = (date: Date, time: Date) => {
  const getTimeString = time.getHours() + ":" + time.getMinutes() + ":00";
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const getDateString = `${year}-${month}-${day}`;

  return new Date(getDateString + " " + getTimeString);
};

export const setActivityProps = (value : IActivity , user : IUser) => {
  value.date = new Date(value.date!);
  value.isGoing = value.attendees.some((a) => a.username === user?.username);
  value.isHost = value.attendees.some((a) => a.username === user?.username && a.isHost);

  return value;
}

export const createAttendee = (user : IUser) : IAttendee => {
return {
  displayName : user.displayName,
  isHost: false,
  username: user.username,
  image: user.image!
}
} 