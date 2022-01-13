export class Greeter {
    greeting:string;

    constructor(greeting:string){
        this.greeting  = greeting;
    }

    greet(name:string){
        return `${this.greeting}, ${name}!`
    }
}

// let greeting = new Greeter('What up doe')
// console.log(greeting.greet('JaCoyia'))