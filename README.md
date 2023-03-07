# JSDevTools

Just a few tools that makes life as a javascript developer a bit easier.<br>
CDN <script src="https://cdn.jsdelivr.net/gh/wbojczuk/JSDevTools/jsdev.min.js"></script>
All of the functions are indepenent so you can copy one into your script without any errors.

<h2>String Prototypes</h2>
<br>
    <strong>string.wordCount();</strong> Returns an integer representing the amount of words in a string.<br>
    <br>
    <strong>string.wordsToUpperCase();</strong> Returns the string with every word's first letter capitalized.<br>
    <br>
            
<h2>Array Prototypes</h2>
            <br>
            <strong>array.sortRandom();</strong> returns array randomly sorted.<br><br>
            
<h2>Element Prototypes</h2>
            <br>
            <strong>element.elemStyles("display: block; width: 100%;");</strong> Extends the element prototype as a shorthand version of element.style<br>
            <br>
            
<h2>POSTing Data</h2>
            <br>
            <strong>postData(formVals, formAction, formMethod);</strong><br>
            &bull; <strong>formVals: </strong> This argument takes an array of objects like so [{name: "YourName", value: YourValue}, {name: "YourName", value: YourValue}]. The name field in the object will be used as the value's name once the data is submitted, and the value field is the value tied to that name.<br>
            &bull; <strong>formAction: </strong> This argument takes a string, usually a url. This is what is executed upon data submittal.<br>
            &bull; <strong>formMethod (Optional): </strong> This argument takes a string and sets the method of submitting data, (GET, POST). The default value is POST.
            
<h2>Other Useful functions/prototypes</h2><br>
            <strong>value.isObject();</strong> Returns a boolean depicting whether or not target value is an object.<br>
            <br>
            <strong>randInt(min, max);</strong> returns a random integer in the min/max range<br>
            <br>
            <strong>randFloat(min, max)</strong> returns a random number (including decimals) in the range min/max<br>
            <br>
            
