# JSDevTools

Just a few tools that makes life a bit easier.<br>
All of the functions are indepenent so you can copy one into your script without any errors.

<h2>String Prototypes</h2>
<br>
    string.wordCount(); Returns an integer representing the amount of words in a string.<br>
    <br>
    string.wordsToUpperCase(); Returns the string with every word's first letter capitalized.<br>
    <br>
    <strong>string.parseArray();</strong> Returns an array created with Regular Expressions.<br>
    Syntax: "string" must contain open and closing brackets [] eg: "[1,2,3]".<br>
    Data Types Supported: Boolean true/false, Numerical values (10, 50.5, 99e10), and strings ('string', "string", `string`).<br>
    Example: const strArray = '[`string ${var}`, 10, true]';
             const newArray = strArray.parseArray;
