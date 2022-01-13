import { Greeter } from "./greeter";

export class JavaScriptGreeter extends Greeter {
    greet(name:string){
        return `console.log('${this.greeting}, ${name}!')`
    }
}

// let greeting = new JavaScriptGreeter('What up doe')
// console.log(greeting.greet('JaCoyia'))