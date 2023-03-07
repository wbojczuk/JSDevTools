// JAVASCRIPT DEVELOPER TOOLS

"use strict";

function randInt(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}
function randFloat(min, max){
    return Math.random() * (max - min) + min;
}

// STRING PROTOTYPES

// Word Count
String.prototype.wordCount = function(){
    if(/[0-9a-z]{1,}/gi.test(this)){
        return this.match(/[0-9a-z]{1,}/gi).length;
    }else{
        return 0;
    }
    
};

String.prototype.wordsToUpperCase = function(){
    return(this.replace(/[a-z]{1,}(?!\w)/gi, (match)=>{
        let tempStr = match.slice(1);
        let tempUp = match.charAt(0).toUpperCase();
        return tempUp + tempStr;
    }));
    
};

// ARRAY PROTOTYPES

// SORT TARGET ARRAY IN A RANDOM ORDER
Array.prototype.sortRandom = function(){
    const arrayLength = this.length;
    const arrayRefs = [];
    const outputArray = [];
    for(let i = 0; i < arrayLength; i++){
        arrayRefs.push(i);
    }
    for(let i = 0; i < arrayLength; i++){
        const currentNum = Math.floor(Math.random() * (arrayRefs.length - 0) + 0);
        outputArray.push(this[arrayRefs[currentNum]]);
        arrayRefs.splice(currentNum, 1);
    }
    return outputArray;
};

// OBJECT PROTOTYPES
Object.prototype.isObject = function(){
    return (Object.prototype.toString.call(this) == "[object Object]")? true : false ;
};

// ELEMENT METHODS/PROTOTYPES
const titleElem = {
    // Interval Speed in MS
    intervalSpeed: 3000,
    set: (...args)=>{
        const DOMTitle = document.getElementsByTagName("title")[0];
        if(args[1] != null && args[1] === true){
            const titles = [DOMTitle.textContent, args[0]];
            let selected = 0;
            changeTitle();
            setInterval(changeTitle, titleElem.intervalSpeed);
            function changeTitle(){
                DOMTitle.textContent = titles[selected];
                if(selected == 1){
                    selected = 0;
                }else{
                    ++selected;
                }
            }
        }else{
            DOMTitle.textContent = args[0];
        }
    }
};

// Add multiple styles to a element's style tag
Element.prototype.elemStyles = function(addStyles){
    const elem = this;
    const tempStyles = addStyles.split(";");
    tempStyles.pop();
    const allStyles = [];
    tempStyles.forEach((style)=>{
        const tempStyles = style.split(":");
        if(/-/gi.test(tempStyles[0])){
            const tempStyle = tempStyles[0].split("-");
            let tempStr = tempStyle[1].slice(1);
            tempStyles[0] = tempStyle[0] + tempStyle[1].charAt(0).toUpperCase() + tempStr;
        }
        allStyles[allStyles.length] = [tempStyles[0].trim(), tempStyles[1].trim()];
    });
    allStyles.forEach((style)=>{
        elem.style[style[0]] = style[1];
    });
    
};

function postData(formVals, formAction, formMethod = "POST"){
// formVals = [{name: "STRING", val: any}, {name: "STRING", val: any}].
// formAction = url usually.
// (Optional) formMethod = "POST" or "GET".
const postForm = document.createElement("form");
postForm.method = formMethod;
const valsLength = formVals.length;
const mainInput = document.createElement("input");
for(let i = 0; i < valsLength; ++i){
const tempInput = mainInput.cloneNode(false);
tempInput.name = formVals[i].name;
tempInput.value = formVals[i].value
postForm.append(tempInput);
}
postForm.action = formAction;
document.getElementsByTagName("body")[0].append(postForm);
postForm.submit();
}

String.prototype.parseArray = function() {
    const str = this;
    if(/((?<=\[).*(?=\])|(.{1,}))/.test(str)){
    const arrayRegEx = /(((?<!\[).*(?<=\[))[^\]\[]*((?=\]).*(?!\]))|.{1,})/;
    const match = str.match(arrayRegEx)[0];
    const nArr = match.split(/([-\de+]*\.[-\de+]*|[-\de+]{1,}|"[^"]{1,}"|'[^']{1,}'|`[^`]{1,}`)(?=[,]*)|(?<=[,]*[ ]*)([\de]{1,}|"[^"]{1,}"|'[^']{1,}'|`[^`]{1,}`|true|false|undefined|null)/gi);
    nArr.splice(0,1);
    nArr.splice(nArr.length - 1, 1);
    let loopAmt = nArr.length;
    // STRING/Numeric/Bool Conversion
    for(let i = 0; i < loopAmt; i++){
        if(/((?<=')[^']*(?=')|(?<=")[^"]*(?=")|(?<=`)[^`]*(?=`))/.test(nArr[i])){
            nArr[i] = nArr[i].match(/((?<=')[^']*(?=')|(?<=")[^"]*(?=")|(?<=`)[^`]*(?=`))/)[0];
        }else if(!isNaN(parseFloat(nArr[i]))){
            nArr[i] = parseFloat(nArr[i]);
        } else if(/true|false/gi.test(nArr[i])){
            nArr[i] = ((`${nArr[i]}`).toLowerCase() == "true") ? true : false;
        }
    }
        // FILTER
         loopAmt = nArr.length;
        for(let i = 0; i < loopAmt; i++){
            if((!/^[,'`"]*[ ]*[^'`",\s]/gi.test(nArr[i]))||(nArr[i] == undefined)){
                nArr.splice(i,1);
                i--;
                loopAmt--;
            }else if(/undefined/gi.test(nArr[i])){
                nArr[i] = undefined;
            }else if(/null/gi.test(nArr[i])){
                nArr[i] = null;
            }
        }
    return nArr;
    } else{
        console.log("parseArray Error: No Array Detected");
    }
};

//Parses an array object into a string that is readable by String.parseArray();
Array.prototype.parseString = function(){
    const arrLength = this.length;
    let nStr = "";
    for(let i = 0; i < arrLength; i++){
        if(typeof this[i] == "string"){
            this[i] = "\`" + this[i] + "\`";
        }
        if(i == arrLength - 1){
            nStr += this[i];
        }else{
            nStr += `${this[i]}, `;
        }  
    }
    return (`[${nStr}]`);
};
