const add = function(value_1, value_2){
    return value_1 + value_2;
};

const sub = function(value_1, value_2){
    return value_1 - value_2;
};

const div = function(value_1, value_2){
    return value_1 / value_2;
};

const mul = function(value_1, value_2){
    return value_1 * value_2;
};

let module_name = 'Arithmetic Calculations';

module.exports = {add, sub, div, mul};
