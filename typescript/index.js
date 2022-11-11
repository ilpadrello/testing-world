"use strict";
let number = 123456789;
let course = 'TypeScript';
let is_published = true;
let level; //any -> This can change type
let lesslevel; //Empty number ->  This can not change type
let numbers = [1, 2, 3];
let user = [1, 'Simone'];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
function foo(numero = 50) {
    if (numero < 10)
        return 10;
    return 100;
}
let cC = {
    talk: () => { },
    listen: () => { }
};
let student = {
    id: 1,
    name: '',
    foo: (date) => {
        return true;
    }
};
let what = "ciao";
what = 1;
function KgToVolume(weight) {
    if (typeof weight === 'number') {
        weight = weight.toString() + " kg";
    }
    console.log(typeof weight);
}
KgToVolume(10);
let weight;
weight = 50;
//Example of class
class Account {
    constructor(id, owner, balance) {
        this.balance = balance;
        this.owner = owner;
        this.id = id;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error('Invalid Amount');
        }
        this.balance += amount;
        return this.balance;
    }
}
let account = new Account(1, 'Simone', 1000000000000);
class Account2 {
    constructor(_id, owner, _balance) {
        this._id = _id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount > 0)
            this._balance = amount;
    }
}
let account2 = new Account2(1, "Simone", 1000000000000);
console.log(account2.balance);
//Index Signature
class SeatAssignment {
}
let seats = new SeatAssignment;
seats.A1 = 'Simone';
//Static Members - property is shared between obj of the same class.
class Ride {
    start() { Ride.activeRides++; }
    ;
    stop() { Ride.activeRides--; }
    ;
}
Ride.activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
