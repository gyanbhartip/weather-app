/*Calculations for the Date-Time display*/
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateTime = new Date();

let hour = dateTime.getHours();

const tt = hour > 12 ? 'PM' : 'AM';

if (hour > 12) {
    hour = hour - 12;
}

const minute = dateTime.getMinutes();

const dayNum = dateTime.getDay();
const day = days[dayNum];
const date = dateTime.getDate();

const monthNum = dateTime.getMonth();
const month = months[monthNum];

const year = dateTime.getFullYear();

export const customDateTime = { hour, minute, tt, day, date, month, year };

/*List of tasks to be shown in the to-do widget*/
export const TaskList = [
    {
        'id': 1,
        'time': '8:00',
        'task': "Get the kids"
    },
    {
        'id': 2,
        'time': '12:00',
        'task': 'Get ready'
    },
    {
        'id': 3,
        'time': '16:00',
        'task': 'Take the car to the garage'
    }
];