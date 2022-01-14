import { LoudGreeter } from "./loudGreeter";


    test("new LoudGreeting is Hey name is you" , () =>{
        const excited = new LoudGreeter("Hey")
        excited.addVolume()
        
        expect(excited.greet("you")).toBe("Hey, you!!!!")
    })

    test("new LoudGreeting is OMG hey name is girl" , () =>{
        const superExcited = new LoudGreeter("OMG hey")
        superExcited.addVolume()
        superExcited.addVolume()
        
        expect(superExcited.greet("girl")).toBe("OMG hey, girl!!!!!")
    })