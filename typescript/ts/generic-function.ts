/**
 * Generic function, like generic classes are used to specify the type of a parameter when you call the function
 */


function wrapInArray<T>(value:T){
    return [value];
}

wrapInArray("ciao");

