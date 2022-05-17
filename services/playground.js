function say_hello_world() {
    return "Hello World";
}

function calculate_average(numberList) {
    let sum = 0;
    
    for (i = 0; i< numberList.length; i++){
        sum += numberList[i];
    }
    return sum/numberList.length;
}

//the function swaps the 2 character with the last character in a string 
function swap(str) {
    index_of_2nd_character = 1;
    index_of_last_character = str.length - 1;
    original_character_at_2nd_position = str[index_of_2nd_character];
    original_character_at_last_position = str[index_of_last_character];
    let swapped_str = "";
    
    for(let i=0; i < str.length; i++)
    {
        if(i === index_of_2nd_character){
            swapped_str = swapped_str + original_character_at_last_position; //this put the last character at the second position
        } else if(i === index_of_last_character){
            swapped_str = swapped_str + original_character_at_2nd_position; //this put the last character at the second position
        } else {
            swapped_str = swapped_str + (str[i]);        
        }
    }
    return swapped_str;
}

exports.say_hello_world = say_hello_world;
exports.calculate_average = calculate_average;
exports.swap = swap;
