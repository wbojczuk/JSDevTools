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
            <strong>jsdev.postData(settings);</strong><br>
             &bull; <strong>settings: </strong>settings is an object that takes the properties mentioned below<br>
            &bull; <strong>settings.POST: </strong> This argument takes an array of objects like so [{name: "YourName", value: YourValue}, {name: "YourName", value: YourValue}]. The name field in the object will be used as the value's name once the data is submitted, and the value field is the value tied to that name. This data will be sent with the POST method<br>
            &bull; <strong>settings.GET (Optional): </strong> Same as settings.POST but the data is sent via the GET method<br>
            &bull; <strong>settings.action: </strong> This argument takes a string, usually a url. This is what is executed upon data submittal.<br>
            
            
<h2>Listening for unsaved changes</h2>
<br>
<strong>jsdev.unsavedChanges.listen(settings)</strong><br>
            &bull; <strong>settings (Optional): </strong> settings is an object that can take three properties as listed below<br>
            &bull; <strong>containers: </strong> This argument takes any valid css selectors or element references. These/This element(s) will be the container(s) whoes input elements will be listened. The default value is the body element<br>
            &bull; <strong>inputTypes: </strong> This argument also takes any valid css selectors or element references and determines the inputs that will be listened to. Default is any input other than disabled, type of submit, type of reset, and it includes textarea elements.<br>
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
&bull; <strong>settings (Optional): </strong>This is an object like such with the following defaults<br>
<strong>{threshold: 0.1, tempSrcAttribute: "data-src", targetSrcAttribute: "src", container: null, checkImages: false, onError: func(), onLoad:  func()}</strong>. <br>
<strong>threshold</strong> determines the amount an element must be in the viewport before loading, with 1 being 100%, default is 10%/0.1.<br> <strong>tempSrcAttribute</strong> is the attribute that will store the actual src value that will be used when loaded. <br>
<strong>targetSrcAttribute</strong> is the attribute that tempSrcAttribute will be applied to when loaded. <br>
<strong>container</strong> Takes either a valid css selector as a string or an element ref. This is the element that will act as the viewport to the elements that are to be loaded <br>
<strong>checkImages</strong> Will only set src once image has loaded, fires settings.onLoad() when loaded and setting.onError() when the image runs into an error<br>
<strong>onError();</strong> Only fires if checkImages is set to true and an error has occurred, this function is passed a reference to the target element<br>
<strong>onLoad();</strong> Fires on each image load, this function is passed a reference to the target element<br>
<br>

<h2>Setting An Intersection Trigger</h2>
<br>
<strong>jsdev.intersectionTrigger(elems, settings)</strong><br>
&bull; <strong>elems : </strong>Takes either valid css selectors as a string or element refs.<br>
&bull; <strong>settings (Optional): </strong>This is an object like such with the following defaults<br>
<strong>{thresholdIn: 0.5, thresholdOut: 0.1, onTrigger: function(), onExit: function(), container: null}</strong>. <br>
<strong>thresholdIn</strong> determines the amount an element must be in the viewport before triggering onTrigger(), with 1 being 100%, default is 10%/0.1.<br> 
<strong>thresholdOut</strong> determines the amount an element must be in the viewport before triggering onExit(), with 1 being 100%, default is 10%/0.1.<br> 
<strong>onTrigger();</strong> For you to use lol, this function is passed a reference to the target element<br>
<strong>onExit();</strong> For you to use , this function is passed a reference to the target element<br>
<strong>container</strong> Takes either a valid css selector as a string or an element ref. This is the element that will act as the viewport to the elements that are to be loaded. Default is the browser window. <br>
            
<h2>GETting Data from the URL</h2>
<br><strong>jsdev.GETValues();</strong> Returns an object with the corresponding keys/values from a GET request.
            
<h2>Other Useful functions/prototypes</h2><br>
            <strong>value.isElement();</strong> Returns a boolean depicting whether or not target value is an element. Will detect, elements, NodeLists, and arrays of elements.<br>
            <br>
            <strong>value.isObject();</strong> Returns a boolean depicting whether or not target value is an object.<br>
            <br>
            <strong>jsdev.randInt(min, max);</strong> returns a random integer in the min/max range<br>
            <br>
            <strong>jsdev.randFloat(min, max)</strong> returns a random number (including decimals) in the range min/max<br>
            <br>
            
