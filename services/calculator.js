function add(number1, number2) {
    var list = [];
    list.push(number1);
    list.push(number2);
    return list.reduce((partialSum, x) => partialSum + x, 0);
}

function subtract(number1, number2) {
    return number1 - number2;
}

exports.add = add;
exports.subtract = subtract;
