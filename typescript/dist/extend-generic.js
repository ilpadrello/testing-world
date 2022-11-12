"use strict";
/**
 *  Can you extend classes and intefaces that are generic? Of course you can, you have two methods of proceeding
 */
class Generic {
    constructor(value) {
        this.value = value;
    }
}
class NotSpecific extends Generic {
}
class Specific extends Generic {
}
