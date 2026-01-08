

import { RegularTicket, VIPTicket } from "./ticketsClass.js"


export class Flight {
    regularticketprice = 100
    VIPticketprice = 200


    constructor (flightName, airline, flightNumber, maximumNumberOfPassengers){
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maximumNumberOfPassengers = maximumNumberOfPassengers
        this.sumRegularTicket = parseInt(this.maximumNumberOfPassengers * 0.9)
        this.sumVIPTicket = parseInt(this.maximumNumberOfPassengers * 0.1)
        this.ticketsList = []
    }

    creadedTickets(){
        for(let i = 0; i < this.sumRegularTicket; i++){
            let ticket = new RegularTicket(this.regularticketprice, (i+1))
            this.ticketsList.push(ticket)
        }
        for(let i = 0; i < this.sumVIPTicket; i++){
            let ticket = new VIPTicket((i+1), this.VIPticketprice)
            this.ticketsList.push(ticket)
        }
        return this.ticketsList


    }



}