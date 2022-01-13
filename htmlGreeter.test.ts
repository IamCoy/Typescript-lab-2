import {HtmlGreeter} from './htmlGreeter';
    
    
    test("new HtmlGreeter is Hiii name is everyone" , () =>{
        const hello = new HtmlGreeter("Hiii", "div");
        
        expect(hello.greet("everyone")).toBe("<div> hiii, everyone! <div>")
    });

    test("new HtmlGreeter is Well hello name is JaCoyia" , () =>{
        const well = new HtmlGreeter("Well hello");
        
        expect(well.greet("JaCoyia")).toBe("<h1> Well hello, JaCoyia! <h1>")
    });