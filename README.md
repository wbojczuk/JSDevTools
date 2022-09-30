# JSDevTools

Just a few tools that makes life a bit easier.<br>
All of the functions are indepenent so you can copy one into your script without any errors.

<h2>String Prototypes</h2>
<br>
    <strong>string.wordCount();</strong> Returns an integer representing the amount of words in a string.<br>
    <br>
    <strong>string.wordsToUpperCase();</strong> Returns the string with every word's first letter capitalized.<br>
    <br>
    <strong>string.parseArray();</strong> Returns an array created with Regular Expressions.<br>
    <strong>Syntax</strong>: "string" must contain open and closing brackets [] eg: "[1,2,3]".<br>
    <strong>Data Types Supported</strong>: Boolean true/false, Numerical values (10, 50.5, 99e10), and strings ('string', "string", `string`).<br>
    <strong>Example</strong>: const strArray = '[`string ${var}`, 10, true]';<br>
             const newArray = strArray.parseArray;
