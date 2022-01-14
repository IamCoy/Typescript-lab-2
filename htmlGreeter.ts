import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
    
    tagName:string | undefined

    constructor(greeting:string, tagName: string = "h1"){
        super(greeting)
        this.tagName = tagName
    }
    

    greet(name:string){
        return `<${this.tagName}> ${this.greeting}, ${name}! <${this.tagName}>`
    }
}

const hi = new HtmlGreeter("hiii")
console.log(hi.greet("JaCoyia"))