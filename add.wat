(module
  (func $i (import "imports" "log_via_wasm") (param i32))
  (func (export "add") (param $v1 i32) (param $v2 i32) 
    local.get $v1
    local.get $v2
    i32.add
    call $i))