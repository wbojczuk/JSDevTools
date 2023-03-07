// JAVASCRIPT DEVELOPER TOOLS

"use strict";
var jsdev = {
    randInt: (min, max)=>{
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    },

    randFloat: (min, max)=>{
        return Math.random() * (max - min) + min;
    },

    postData: (formVals, formAction, formMethod = "POST")=>{
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
        },
    
        unsavedChanges: {
            listen: (container = "body", inputTypes = "input:not([type='submit']):not([type='reset']):not([disabled]), textarea:not([disabled])")=>{
                let unSavedChanges = false;
                window.onbeforeunload = checkSaved;
                document.querySelectorAll(container).forEach((elem)=>{
                    elem.querySelectorAll(inputTypes).forEach((elem)=>{
                        elem.addEventListener("input", ()=>{
                            unSavedChanges = true;
                        });
                    });
                })
                
                
                function checkSaved(){
                    if(unSavedChanges){
                        return "There are unsaved changes on this page, are you sure you want to exit?";
                    }
                }
            },
            destroyListener: ()=>{
                window.onbeforeunload = "";
            }
        }
};

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