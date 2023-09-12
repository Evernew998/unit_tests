let assert = require("assert");
function minus(a, b){
    return (a - b);
}

let actual = minus(4, 1);

assert.strictEqual(actual, 6, "Error");