export function CountDown(milliseconds:number){
let rem:number = milliseconds
let days:number
let daysRem:number
let hours:number
let hoursRem:number
let minutes:number

     rem = rem - 60000
     days = rem/ (60 * 1000 * 60 * 24) - 1
     daysRem = rem % (60 * 1000 * 60 * 24)
hours = daysRem / (60 * 1000 * 60) - 1
hoursRem = daysRem % (60 * 1000 * 60)
minutes = hoursRem / (60 * 1000) - 1
return {days:days.toFixed(0),hours:hours.toFixed(0),minutes:minutes.toFixed(0)}

}