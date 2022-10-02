// JAVASCRIPT DEVELOPER TOOLS

"use strict";

function randInt(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
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

// PARSE STRING TO ARRAY (SUPPORTS NUMERIC/STRING VALUES) USEFUL FOR DATA ATTRIBUTES
String.prototype.parseArray = function() {
    const str = this;
    if(/(?<=\[).*(?=\])/.test(str)){
    const arrayRegEx = /((?<!\[).*(?<=\[))[^\]\[]*((?=\]).*(?!\]))/;
    const match = str.match(arrayRegEx)[0];
    const nArr = match.split(/([\de]*\.[\de]*|[\de]{1,}|"[^"]{1,}"|'[^']{1,}'|`[^`]{1,}`)(?=[,]*)|(?<=[,]*[ ]*)([\de]{1,}|"[^"]{1,}"|'[^']{1,}'|`[^`]{1,}`|true|false)/gi);
    nArr.splice(0,1);
    nArr.splice(nArr.length - 1, 1);
    let loopAmt = nArr.length;
    // STRING/Numeric Conversion
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
            if(!/^[,'"]*[ ]*[^,\s]/gi.test(nArr[i])){
                nArr.splice(i,1);
                i = 0;
                loopAmt = nArr.length;
            }else if(nArr[i] == null){
                nArr.splice(i,1);
                i=0;
                loopAmt = nArr.length;
            }
        }
    
    return nArr;
    } else{
        console.log("parseArray Error: No Array Detected");
    }
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


// ECHO TO HTML BODY ELEM
function echo(...args){
    let output = "";
    for(let i = 0; i < args.length; i++){
        output += args[i];
    }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `<div>${output}</div>`);
}
