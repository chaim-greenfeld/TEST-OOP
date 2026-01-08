import { Flight } from "../models/flightClass.js";
import {describe, test} from "node:test"
import assert  from "node:assert";


describe('class Flight', () => {
    test('method createtickets', () => {
        const fkight = new Flight('haim', 123, 456, 5)
        assert.deepStrictEqual( fkight.creadedTickets(), [
  { price: 100, ownerName: null, ticketNumber: 1 },
{ price: 100, ownerName: null, ticketNumber: 2 },
  { price: 100, ownerName: null, ticketNumber: 3 },
  { price: 100, ownerName: null, ticketNumber: 4 },
  { price: 100, ownerName: null, ticketNumber: 5 },
  { price: 100, ownerName: null, ticketNumber: 6 },
  { price: 100, ownerName: null, ticketNumber: 7 },
  { price: 100, ownerName: null, ticketNumber: 8 },
  { price: 100, ownerName: null, ticketNumber: 9 },
  {
    price: 200,
    ownerName: null,
    benefitsList: [ 'Free alcohol', 'Free food', 'Hot towels' ],
    ticketNumber: 1
  }
]
)})})
//     })
// })


const aa = new Flight('haim', 123, 456, 10)
aa.creadedTickets()
console.log(aa.ticketsList)