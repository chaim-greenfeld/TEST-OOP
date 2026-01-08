import { AirPort } from "./models/airportClass.js"
import { Student, Regular } from "./models/passenger.js"
import { Flight } from "./models/flightClass.js"
import { RegularTicket, VIPTicket } from "./models/ticketsClass.js"



let aa =new AirPort()
// console.log(aa)


let student = new Student('haim', 2, 100, 'haaliza')
let regular = new Regular('barak', 1, 200, 'IDF', false)


aa.buyTicket(aa.flight1, student)
aa.buyTicket(aa.flight1, regular)
console.log(aa.flight1.ticketsList)