function combine(input1, input2, resulttobe) {
    var res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resulttobe === 'as-number') {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine(34, 9, 'as-number'));
var combineAges = combine('34', '9', 'as-number');
var combineNames = combine('max', 'ana', 'as-text');
console.log(combineAges, combineNames);
