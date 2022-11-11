/**
 *  In the generic series, we also have a generic interface, that let's you have a placeholder in an interface.
 */

//let's imagine that you will call an api and wait for the response. You don't know by default what the reposnse is so:
interface Result<T>{
    data : T | null,
    error: string | null
    
}

function fetch <T>(url:string): Result<T>{
    return {data: null, error: null}
}

interface User{
    username: string
}

interface Products{
    name:string
}

let result = fetch<Products>("url");
let result2 = fetch<User>("url");
 
result.data.name
result2.data.username
