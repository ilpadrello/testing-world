function echo<T extends string | number >(value:T){
    return value;
}

//echo(true); //Not working
