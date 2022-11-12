/**
 *  Can you extend classes and intefaces that are generic? Of course you can, you have two methods of proceeding
 */


class Generic<T>{
    constructor(private value:T){}
}

class NotSpecific<T> extends Generic<T>{}

class Specific extends Generic<string>{}

interface Generic2<T>{
    name:T
}

interface NotSpecific2<T> extends Generic2<T>{}

interface Specific2 extends Generic2<string>{}