import {Greeter} from './greeter';


describe("Greeter", () => {

    test("new greeting is what's up name is coyia" , () =>{
        const whatUp = new Greeter("What's up");
        
        expect(whatUp.greet("coyia")).toBe("What's up, coyia!")
    })

    test("new greeting is Hidey ho name is neighbor" , () =>{
        const whatUp = new Greeter("Hidey ho");
        
        expect(whatUp.greet("neighbor")).toBe("Hidey ho, neighbor!")
    })
});




