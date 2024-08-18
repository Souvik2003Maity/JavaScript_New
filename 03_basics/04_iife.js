// Immediately Invoked Function Expression(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
})();

((name) =>{
    console.log(`DB Connected Two ${name}`);
})("souvik");