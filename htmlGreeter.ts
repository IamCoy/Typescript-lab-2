import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
    
    tagName:string = "h1"

    constructor(greeting:string, tagName?: string){
        super(greeting)
        this.tagName = tagName;
    }
    

    greet(name:string){
        return `<${this.tagName}> ${this.greeting}, ${name}! <${this.tagName}>`
    }
}

const hi = new HtmlGreeter("hiii", "h2")
console.log(hi.greet("JaCoyia"))