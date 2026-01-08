

class human {
    constructor(name, idNumber, amountOfMoney){
        this.name = name
        this.idNumber = idNumber
        this.amountOfMoney = amountOfMoney
    }
}

export class Student extends human {
    constructor(name, idNumber, amountOfMoney, scholl){
        super(name, idNumber, amountOfMoney)
        this.scholl = scholl
    }
}

export class Regular extends human {
    constructor(name, idNumber, amountOfMoney, workPlace, airportEmployee){
        super(name, idNumber, amountOfMoney)
        this.workPlace = workPlace
        this.airportEmployee = airportEmployee
    }
}

