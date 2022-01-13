import {JavaScriptGreeter} from './javascriptGreeter';
    
    
    test("new JavaScriptGreeter is Hello name is Kobe" , () =>{
        const hello = new JavaScriptGreeter("Hello");
        
        expect(hello.greet("Kobe")).toBe("console.log('Hello, Kobe!')")
    });

    test("new JavaScriptGreeter is What up doe name is Detroit" , () =>{
        const DetHello = new JavaScriptGreeter("What up doe");
        
        expect(DetHello.greet("Detroit")).toBe("console.log('What up doe, Detroit!')")
    });