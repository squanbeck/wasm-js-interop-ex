var importObject = {
  imports: { log_via_wasm: arg => console.log(arg) }
};

function go(input1, input2) {
  WebAssembly.instantiateStreaming(fetch('add.wasm'), importObject)
  .then(obj => {
    obj.instance.exports.add(input1, input2);
  });
}