type Point= {x:number, y:number}

type P = keyof Point;

function test(key:P){
    console.log(key);
}

test("x");

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
//A will be of type number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//M will be of type string
