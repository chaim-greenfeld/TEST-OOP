



class Tickets {

    constructor(price, ownerName ){

    this.price = price
    this.ownerName = ownerName
}

}

export class RegularTicket extends Tickets{


    constructor(price, tickrtNumber,ownerName = null){
        super(price, ownerName)
        this.ticketNumber = tickrtNumber

    }

}


export class VIPTicket extends Tickets {
    benefitsList = ["Free alcohol", "Free food", "Hot towels"]
    constructor (ticketNumber, price, ownerName = null){
        super(price, ownerName)
        this.ticketNumber = ticketNumber

    }
}
