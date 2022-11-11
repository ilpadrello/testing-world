/**
 * Generic classes are used to specify the type of a memeber of the class at instantiation time
 */


//only one placeholder
class KeyToValue<T>{
    constructor(public key: T | number, public value:string){}
}

let pair = new KeyToValue<string>("1","value");

//more than one  placeholder
class KeyToValueTwo<TKey, Tvalue>{
    constructor(public key:TKey, value:Tvalue){}
}

let pair2 = new KeyToValueTwo<number,string>(1,"ciao");