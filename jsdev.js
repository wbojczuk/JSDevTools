// JAVASCRIPT DEVELOPER TOOLS

"use strict";
var jsdev = {
    getElementRefs: (refs, settings)=>{
        const curSettings = {
            container : document,
            multiple : true,
            ...settings
        }
        if(typeof refs == "string"){
            return (curSettings.multiple == true) ? curSettings.container.querySelectorAll(refs) : curSettings.container.querySelector(refs);
        }else if(refs.isElement && (refs instanceof NodeList || (Array.isArray(refs))) ){
            return (curSettings.multiple == true) ? refs : refs[0];
        }else if(refs.isElement){
            return (curSettings.multiple == true) ? [refs] : refs;
        }
    },

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
    unSavedChanges: false,
    elemRefs: [],
    setUnsaved: ()=>{
        jsdev.unsavedChanges.unSavedChanges = true;
    },

    listen: (container = "body", inputTypes = "input:not([type='submit']):not([type='reset']):not([disabled]), textarea:not([disabled])")=>{
            window.addEventListener("beforeunload",jsdev.unsavedChanges.checkSaved );
        
        
        jsdev.getElementRefs(container).forEach((elem)=>{
            jsdev.getElementRefs(inputTypes, {container: elem}).forEach((elem)=>{
                elem.addEventListener("input", jsdev.unsavedChanges.setUnsaved);
                jsdev.unsavedChanges.elemRefs.push(elem);
            });
        })

        
        
        
    },
    checkSaved: (evt)=>{
        evt.preventDefault();
        if(jsdev.unsavedChanges.unSavedChanges){
            evt.returnValue = "There are unsaved changes on this page, are you sure you want to exit?";
            return "There are unsaved changes on this page, are you sure you want to exit?";
        }
    },
    destroy: ()=>{
        window.removeEventListener("beforeunload", jsdev.unsavedChanges.checkSaved);
        jsdev.unsavedChanges.unSavedChanges = false;
        jsdev.unsavedChanges.elemRefs.forEach((elem)=>{
            elem.removeEventListener("input", jsdev.unsavedChanges.setUnsaved);
        })
        jsdev.unsavedChanges.elemRefs.length = 0;
    }
},

lazyLoad: (elems, settings)=>{
    const curSettings = {
        threshold: 0.1,
        tempSrcAttribute: "data-src",
        targetSrcAttribute: "src",
        checkImage: false,
        container: "body",
        onLoad: ()=>{},
        onError: ()=>{},
        ...settings
    };
    const lazyObserver = new IntersectionObserver((obsElems)=>{
        obsElems.forEach((elem)=>{
            if(elem.isIntersecting){
                lazyObserver.unobserve(elem.target);
                if(curSettings.checkImage){
                    // check if img exisits
                const testImg = new Image();
                testImg.src = (elem.target).getAttribute(curSettings.tempSrcAttribute);
                 // If image doesn't exist, remove the image element
                testImg.onerror = ()=>{
                    curSettings.onError();
                };
                if(testImg.complete){
                    (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                    curSettings.onLoad();
                }else{
                testImg.onload = ()=>{
                    (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                    curSettings.onLoad();
                };
           
        }
                }else{
                    (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                    (elem.target).onload = ()=>{
                        curSettings.onLoad();
                    }
                   
                }
                
            }
        })
    },{threshold: curSettings.threshold, root: jsdev.getElementRefs(curSettings.container, {multiple: false})});
    (jsdev.getElementRefs(elems, {multiple: true})).forEach((elem)=>{
        lazyObserver.observe(elem);
    });
},

// Credit to https://stackoverflow.com/users/109538/broofa for this v4 uuid generator
 getUUID: ()=>{
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
  


};

Object.prototype.isElement = function(){
    let retval = false;
    function isElem(elemVar){
        if(elemVar instanceof Node || elemVar instanceof NodeList || elemVar instanceof HTMLElement || elemVar instanceof HTMLCollection){
            return true;
        }
    }
    if(isElem(this)){
        retval = true;
    }
    else if(Array.isArray(this) && isElem(this[0])){
        retval = true;
    }
    return retval;
}

// PROTOTYPES

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
