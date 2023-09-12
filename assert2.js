let assert = require("assert");
function joinArray(inputArr1, inputArr2){
    return inputArr1.concat(inputArr2);
}
let actual = joinArray([1, 2, 3], [4, 5]);
assert.deepStrictEqual(actual, [1, 2, 3, 4, 5], "Error");