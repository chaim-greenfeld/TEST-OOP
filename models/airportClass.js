
import { Flight } from "./flightClass.js";
import { RegularTicket, VIPTicket } from "./ticketsClass.js";
import { Student, Regular } from "./passenger.js";



export class AirPort {
    flight1
    flight2
    flight3
    constructor(){
        this.createFlights()
        this.createTickets(this.flight1, this.flight2, this.flight3)
    }


    createFlights(){
    this.flight1 = new Flight('BC246', 'elal', "BC246", 10)
    this.flight2 = new Flight('DG453','wizz', "DG453", 10)
    this.flight3 = new Flight('SI6290', 'israir', 'SI6290', 10)

    return this.flight1, this.flight2 ,this.flight3
}   createTickets(flight1, flight2, flight3){

    flight1.creadedTickets()
    flight2.creadedTickets()
    flight3.creadedTickets()
}
    buyTicket(flightName,passenger){
        const student = passenger instanceof Student
        console.log(student)
        if(student){
            if(passenger.amountOfMoney < (flightName.regularticketprice)*0.9){
                return 'you not have a need money'
                
            }

            console.log(flightName.ticketsList[0])
            for(let i = 0 ; i < flightName.ticketsList.length; i++){
                if(flightName.ticketsList[i].ownerName === null){
                    flightName.ticketsList[i].ownerName = passenger.name
                    console.log(flightName.ticketsList[i].ownerName)
                    passenger.amountOfMoney -= (flightName.regularticketprice)*0.9
                    break
                }
            }

        }
        const regular = passenger instanceof Regular
        if(regular){

            if((passenger.amountOfMoney -= flightName.regularticketprice) < 0) return 'you not have a need money'
            if(passenger.airportEmployee === true){
                for(let i = 0 ; i < flightName.ticketsList.length; i++){
                if(flightName.ticketsList[i].ownerName === null){
                   flightName.ticketsList[i].ownerName = passenger.name
                    passenger.amountOfMoney -= (flightName.regularticketprice) * 0.8
                    break

            }
        }

    }
    if(passenger.airportEmployee === false){
                for(let i = 0 ; i < flightName.ticketsList.length; i++){
                if(flightName.ticketsList[i].ownerName){
                    flightName.ticketsList[i].ownerName = passenger.name
                    passenger.amountOfMoney -= flightName.regularticketprice
                    break}}}
}
else{
    return 'Cannot buy tickets'
}


}
}
