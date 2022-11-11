let number= 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level; //any -> This can change type
let lesslevel: number; //Empty number ->  This can not change type
let numbers: number[] = [1,2,3]
let user:[number,string] = [1,'Simone']

enum Size { Small = 1, Medium = 2, Large = 3};
let mySize: Size = Size.Medium;

function foo(numero:number = 50):number{
    if(numero < 10 )
        return 10;
    return 100;
}

type AA = {
    talk:()=>void
};

type BB = {
    listen:()=>void
}

type CC = AA & BB;

let cC:CC = {
    talk:()=>{},
    listen:()=>{}
}

type Student = {
    readonly id: number,
    name: string,
    fax?: string,
    foo: (date:Date)=>boolean
}

let student: Student= { 
    id: 1, 
    name:'',
    foo: (date:Date)=> {
        return true;
    }
}

let what:number|string = "ciao";
what = 1;


function KgToVolume (weight:number|string){
    if(typeof weight === 'number'){
        weight = weight.toString()+" kg";
    }
    console.log(typeof weight);
}

KgToVolume(10);


type Weight = 50 | 100 | 150 | 200;

let weight: Weight;
weight = 50;


//Example of class
class Account {
    readonly id:number;
    owner: string;
    balance: number;
    faxNumber?: string;

    constructor(id:number, owner:string, balance:number){
        this.balance = balance;
        this.owner = owner;
        this.id = id;
    }

    deposit (amount:number):Number{
        if(amount<0){
            throw new Error('Invalid Amount');
        }
        this.balance+=amount;
        return this.balance;
    }
}

let account = new Account(1,'Simone',1_000_000_000_000);

class Account2{
    faxNumber?: string;
    constructor(
        private readonly _id:number, 
        public owner: string, 
        private _balance: number){

    }

    get balance(): number{
        return this._balance;
    }

    set balance(amount:number){
        if(amount>0)
            this._balance = amount;
    }
}

let account2 = new Account2(1,"Simone",1_000_000_000_000);
console.log(account2.balance);

//Index Signature
class SeatAssignment{
    [seatNumber:string]:string;
}

let seats = new SeatAssignment;
seats.A1= 'Simone';

//Static Members - property is shared between obj of the same class.
class Ride{
    static activeRides: number = 0;
    start() { Ride.activeRides++};
    stop() {Ride.activeRides--};
}

let ride1 = new Ride();
let ride2 = new Ride();

ride1.start();
ride2.start();

console.log(Ride.activeRides);

//Class inheritance
class Person{
    constructor(public name:string,public surname:string,public email:string){
    }

    get fullName(){
        return this.surname+' '+this.name;
    }
}

class Teacher extends Person{
    constructor(private Id:number, name:string, surname:string, email:string){
        super(name,surname,email);
    }

    override get fullName(): string {
        return 'Professor '+super.fullName;
    }
}

//Abstract class and methods
abstract class Shape {
    constructor(public nLines:number) {
    }

    getNLines():number{
        return this.nLines;
    }

    abstract render():void;
}

class Square extends Shape{
    constructor(nLines:number){
        super(nLines);
    }

    render(): void { //This MUST be implemented
        console.log("[]");
    }
}

interface Ideas{
    name:string;
    getIdea(idea:string):void;
    evalueIdea():void;
}

class thought implements Ideas{
    public idea?:string;
    constructor(public name:string){
    }

    getIdea(idea:string): void {
        this.idea = idea;
    }

    evalueIdea(): void {
        console.log("Eh.... so so");
    }
}