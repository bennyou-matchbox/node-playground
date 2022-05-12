function add(number1, number2) {
    var list = [];
    list.push(number1);
    list.push(number2);
    return list.reduce((partialSum, x) => partialSum + x, 0);
}

function subtract(number1, number2) {
    return number1 - number2;
}

function sayHelloWorld() {
    return "Hello world!"; 
}

//the function swaps the 2 character with the last character in a string 
function swap(str) {
    index_of_second_character = 1;
    index_of_last_character = str.length - 1;
    original_character_at_2_position = str[index_of_second_character];
    original_character_at_last_position = str[index_of_last_character];
    swapped_str = "";
    
    for(i=0; i<str.length; i++)
    {
        if(i === index_of_second_character){
            swapped_str.concat(original_character_at_last_position); //this put the last character at the second position
        } else if(i === index_of_last_character){
            swapped_str.concat(original_character_at_2_position) //this put the last character at the second position
        } else{
            swapped_str.concat(str[i]);
        }

    }
    return swapped_str
}

exports.add = add;
exports.subtract = subtract;
exports.sayHelloWorld = sayHelloWorld;
exports.swap = swap;