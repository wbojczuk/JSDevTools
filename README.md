# JSDevTools

Just a few tools that makes life as a javascript developer a bit easier.<br>
CDN <script src="https://cdn.jsdelivr.net/gh/wbojczuk/JSDevTools/jsdev.min.js"></script>
All of the functions are indepenent so you can copy one into your script without any errors, though it is recommended to included the whole package.

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
            <strong>jsdev.postData(formVals, formAction, formMethod);</strong><br>
            &bull; <strong>formVals: </strong> This argument takes an array of objects like so [{name: "YourName", value: YourValue}, {name: "YourName", value: YourValue}]. The name field in the object will be used as the value's name once the data is submitted, and the value field is the value tied to that name.<br>
            &bull; <strong>formAction: </strong> This argument takes a string, usually a url. This is what is executed upon data submittal.<br>
            &bull; <strong>formMethod (Optional): </strong> This argument takes a string and sets the method of submitting data, (GET, POST). The default value is POST.<br>
            
<h2>Listening for unsaved changes</h2>
<br>
<strong>jsdev.unsavedChanges.listen(container, inputs)</strong><br>
            &bull; <strong>container (Optional): </strong> This argument takes any valid css selector as a string. These/This element(s) will be the container(s) whoes input elements will be listened. The default value is the body element<br>
            &bull; <strong>inputs (Optional): </strong> This argument also takes any valid css selectors and determines the inputs that will be listened to. Default is any input other than disabled, type of submit, type of reset, and it includes textarea elements.<br><br>
            <strong>jsdev.unsavedChanges.destroy(); : </strong> Stops listening for changes and removes any event listeners.<br><br>

            
<h2>Other Useful functions/prototypes</h2><br>
            <strong>value.isObject();</strong> Returns a boolean depicting whether or not target value is an object.<br>
            <br>
            <strong>jsdev.randInt(min, max);</strong> returns a random integer in the min/max range<br>
            <br>
            <strong>jsdev.randFloat(min, max)</strong> returns a random number (including decimals) in the range min/max<br>
            <br>
            
