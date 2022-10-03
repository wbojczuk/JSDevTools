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
    <strong>Syntax</strong>: "string" can contain open and closing brackets [ ] but does not have to eg: "[1,2,3]" or "1,2,3".<br>
    <strong>Data Types Supported</strong>: Boolean true/false, Numerical values (10, 50.5, 99e10), and strings ('string', "string", `string`).<br>
    <strong>Example</strong>: <br>
            &nbsp;&nbsp; const strArray = `["string ${var}", 10, true]`;<br>
          &nbsp;&nbsp;  const newArray = strArray.parseArray();<br>
            
<h2>Array Prototypes</h2>
            <br>
            <strong>array.parseString();</strong> Parses an array object into a string that is readable by string.parseArray(); and returns it.
            <br>
            <strong>array.sortRandom();</strong> returns array randomly sorted.<br><br>
            
<h2>Object Prototypes</h2><br>
            <strong>object.isObject();</strong> Returns a boolean depecting whether or not target element is an object.
