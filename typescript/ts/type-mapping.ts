interface Properties{
    name:string,
    email:string
}

type ReadOnlyProperties = {
    readonly [PropertiesKeys in keyof Properties]:Properties[PropertiesKeys]
}

let product: ReadOnlyProperties = {name:"Simone",email:"email"}

//product.name="ciao"; //This will be an error because now is readonly

type Two = {
    [key:string|number]:any
}

let obj:Two = {
    "alla":"catalla",
    3:true
}


type Test = {
    [P in keyof Two]: Two[P]
}

let testing:Test = {
    "alla":"catalla"
}