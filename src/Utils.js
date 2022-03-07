/*Calculations for the Date-Time display*/
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateTime = new Date();

let hour = dateTime.getHours();
const tt = hour > 12 ? 'PM' : 'AM';
hour > 12 ? hour -= 12 : hour;
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


//https://eu1.locationiq.com/v1/reverse.php?format=json&lat=13.1&lon=77.64&key=pk.06f76a97a564d42a54cd28dcb9a80559