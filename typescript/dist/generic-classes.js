"use strict";
/**
 * Generic classes are used to specify the type of a memeber of the class at instantiation time
 */
//only one placeholder
class KeyToValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyToValue("1", "value");
//more than one  placeholder
class KeyToValueTwo {
    constructor(key, value) {
        this.key = key;
    }
}
let pair2 = new KeyToValueTwo(1, "ciao");
