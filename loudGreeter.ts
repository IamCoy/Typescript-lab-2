import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {
    
    private extra:string = "!!"
    
    addVolume(): void{
        this.extra += "!"
    }

    greet(name:string){
        return `${this.greeting}, ${name}!${this.extra}`
    }
}


let greeting = new LoudGreeter('Wassup')
greeting.addVolume()
console.log(greeting.greet('JaCoyia'))