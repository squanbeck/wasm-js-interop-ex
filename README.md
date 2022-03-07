# wasm-js-interop-ex
This is a very simple example to demonstrate the ability to call JavaScript from WebAssembly and vice versa.

In the example, the user can insert two numbers into input text boxes on the index.html page. 
When those are submitted, the html calls a JavaScript function, which in turn calls a wasm 
function. This wasm function adds the two numbers together and using an imported JavaScript
function, outputs the result to the console.
