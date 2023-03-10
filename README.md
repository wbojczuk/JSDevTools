# JSDevTools

Just a few tools that makes life as a javascript developer a bit easier.<br>
CDN <script src="https://cdn.jsdelivr.net/gh/wbojczuk/JSDevTools/jsdev.min.js"></script>
Most of the functions are indepenent so you can copy one into your script without any errors, though it is recommended to included the whole package as some functions are dependent on others in the package.

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
            &bull; <strong>container (Optional): </strong> This argument takes any valid css selectors or element references. These/This element(s) will be the container(s) whoes input elements will be listened. The default value is the body element<br>
            &bull; <strong>inputs (Optional): </strong> This argument also takes any valid css selectors or element references and determines the inputs that will be listened to. Default is any input other than disabled, type of submit, type of reset, and it includes textarea elements.<br><br>
            <strong>jsdev.unsavedChanges.destroy(); : </strong> Stops listening for changes and removes any event listeners.<br><br>
            
<h2>Get Element Refs</h2>
<br>
<strong>jsdev.getElementRefs(refs, settings)</strong><br>
&bull; <strong>refs : </strong>Takes either valid css selectors as a string or element refs. function will determine the difference and act accordingly.<br>
&bull; <strong>settings (Optional): </strong>This is an object like such with the following defaults {container: document, multiple = true}. container will be where the script searches for elements if a css selector is provided. multiple determines whether or not multiple element references will be returned, if multiple is set to true but a singular reference is given, it will be returned as an array. This is useful when your script is made to work with only one element, or only multiple.<br>

<h2>Lazy Load Images</h2>
<br>
<strong>jsdev.lazyLoad(elems, settings)</strong><br>
&bull; <strong>elems : </strong>Takes either valid css selectors as a string or element refs.<br>
&bull; <strong>settings (Optional): </strong>This is an object like such with the following defaults <strong>{threshold: 0.1, tempSrcAttribute: "data-src", targetSrcAttribute: "src"}</strong>. <br>
<strong>threshold</strong> determines the amount an element must be in the viewport before loading, with 1 being 100%, default is 10%/0.1.<br> <strong>tempSrcAttribute</strong> is the attribute that will store the actual src value that will be used when loaded. <br>
<strong>targetSrcAttribute</strong> is the attribute that tempSrcAttribute will be applied to when loaded. <br>
<strong>container</strong> Takes either a valid css selector as a string or an element ref. This is the element that will act as the viewport to the elements that are to be loaded <br>
<strong>checkImages</strong> Will only set src once image has loaded, fires settings.onLoad() when loaded and setting.onError() when the image runs into an error<br>
<strong>onError();</strong> Only fires if checkImages is set to true and an error has occurred<br>
<strong>onLoad();</strong> Fires on each image load<br>
            
<h2>Other Useful functions/prototypes</h2><br>
            <strong>value.isElement();</strong> Returns a boolean depicting whether or not target value is an element. Will detect, elements, NodeLists, and arrays of elements.<br>
            <br>
            <strong>value.isObject();</strong> Returns a boolean depicting whether or not target value is an object.<br>
            <br>
            <strong>jsdev.randInt(min, max);</strong> returns a random integer in the min/max range<br>
            <br>
            <strong>jsdev.randFloat(min, max)</strong> returns a random number (including decimals) in the range min/max<br>
            <br>
            
