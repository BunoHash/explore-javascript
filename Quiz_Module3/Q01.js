function getWeekDay(date){
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}
const today = new Date();
console.log(getWeekDay(today))
