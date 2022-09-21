// JAVASCRIPT DEVELOPER TOOLS

"use strict";

function randInt(min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

// STRING PROTOTYPES

// Word Count
String.prototype.wordCount = function(){
    const str = this;
    return str.match(/[\w]{1,}/gi).length;
};

String.prototype.wordsToUpperCase = function(){
    const str = this;
    return(str.replace(/[a-z]{1,}(?!\w)/gi, (match)=>{
        let tempStr = match.slice(1);
        let tempUp = match.charAt(0).toUpperCase();
        return tempUp + tempStr;
    }));
    
};

// PARSE STRING TO ARRAY (SUPPORTS NUMERIC/STRING VALUES) USEFUL FOR DATA ATTRIBUTES
String.prototype.parseArray = function() {
    const str = this;
    if(/(?<=\[)[^\]\[]*(?=\])/.test(str)){
    
    const arrayRegEx = /(?<=\[)[^\]\[]*(?=\])/;
    const match = str.match(arrayRegEx)[0];
    const newArray = match.split(/([\de]*\.[\de]*|[\de]{1,}|"[^"]{1,}"|'[^']{1,}')(?=[,]*)|(?<=[,]*[ ]*)([\de]{1,}|"[^"]{1,}"|'[^']{1,}')/g);
    
    let loopAmt = newArray.length;
    // STRING/Numeric Conversion
    for(let i = 0; i < loopAmt; i++){
        if(/((?<=')[^']*(?=')|(?<=")[^"]*(?="))/.test(newArray[i])){
            newArray[i] = newArray[i].match(/((?<=')[^']*(?=')|(?<=")[^"]*(?="))/)[0];
            
        }else if(!isNaN(parseFloat(newArray[i]))){
            newArray[i] = parseFloat(newArray[i]);
        }
    }
        // FILTER
         loopAmt = newArray.length;
        for(let i = 0; i < loopAmt; i++){
            if(!/^['"]*[ ]*[^,\s]/gi.test(newArray[i])){
                newArray.splice(i,1);
                i = 0;
                loopAmt = newArray.length;
            }else if(newArray[i] == null){
                newArray.splice(i,1);
                i=0;
                loopAmt = newArray.length;
            }
        }
    
    return newArray;
    } else{
        console.log("parseArray Error: No Array Deteted");
    }
};


// ARRAY PROTOTYPES

// SORT TARGET ARRAY IN A RANDOM ORDER
Array.prototype.sortRandom = function(){
    const targetArray = this;
    const arrayLength = targetArray.length;
    const arrayRefs = [];
    const outputArray = [];

    for(let i = 0; i < arrayLength; i++){
        arrayRefs.push(i);
    }
    for(let i = 0; i < arrayLength; i++){
        const currentNum = Math.floor(Math.random() * (arrayRefs.length - 0) + 0);
        outputArray.push(targetArray[arrayRefs[currentNum]]);
        arrayRefs.splice(currentNum, 1);
    }
    return outputArray;
};


// ECHO TO HTML BODY ELEM
function echo(...args){
    let output = "";
    for(let i = 0; i < args.length; i++){
        output += args[i];
    }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", `<div>${output}</div>`);
}