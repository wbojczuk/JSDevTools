/*
 Program: jsdev.js
 Version: 1.1
 Creator: William Bojczuk (wiliambojczuk@gmail.com)
 License: BSD
 Github: https://github.com/wbojczuk
 Website: https://williambojczuk.com
 
 */

 "use strict";
 var jsdev = {
     isElement: (elem)=>{
         let retval = false;
         function isElem(elemVar){
             if(elemVar instanceof Node || elemVar instanceof NodeList || elemVar instanceof HTMLElement || elemVar instanceof HTMLCollection){
                 return true;
             }
         }
         if(isElem(elem)){
             retval = true;
         }
         else if(Array.isArray(elem) && isElem(elem[0])){
             retval = true;
         }
         return retval;
     },
     
     // OBJECT PROTOTYPES
      isObject: (elem)=>{
         return (Object.prototype.toString.call(elem) == "[object Object]")? true : false ;
     },
     getElementRefs: (refs, settings)=>{
         const curSettings = {
             container : document,
             multiple : true,
             ...settings
         }
         if(typeof refs == "string"){
             return (curSettings.multiple == true) ? curSettings.container.querySelectorAll(refs) : curSettings.container.querySelector(refs);
         }else if(jsdev.isElement(refs) && (refs instanceof NodeList || (Array.isArray(refs))) ){
             return (curSettings.multiple == true) ? refs : refs[0];
         }else if(jsdev.isElement(refs)){
             return (curSettings.multiple == true) ? [refs] : refs;
         }
     },
 
     randInt: (min, max)=>{
         return Math.floor(Math.random() * ((max + 1) - min) + min);
     },
 
     randFloat: (min, max)=>{
         return Math.random() * (max - min) + min;
     },

     postFormData: (settings)=>{
         const curSettings = {
             POST: [],
             GET: [],
             action: "",
             ...settings
         }
         const postForm = document.createElement("form");
         postForm.method = "POST";
         const postLength = curSettings.POST.length;
         const mainInput = document.createElement("input");
         for(let i = 0; i < postLength; ++i){
         const tempInput = mainInput.cloneNode(false);
         tempInput.name = curSettings.POST[i].name;
         tempInput.value = curSettings.POST[i].value
         postForm.append(tempInput);
         }
         let getStr = "";
         let getLength = curSettings.GET.length;
         for (let i = 0; i < getLength; i++) {
             if(i == 0){getStr += "?"}
             getStr += (i > 0) ? `&${curSettings.GET[i].name}=${curSettings.GET[i].value}` : `${curSettings.GET[i].name}=${curSettings.GET[i].value}`;
         }
         postForm.action = `${curSettings.action}${getStr}`;
         document.getElementsByTagName("body")[0].append(postForm);
         postForm.submit();
         },
     
 unsavedChanges: {
     unSavedChanges: false,
     elemRefs: [],
     setUnsaved: ()=>{
         jsdev.unsavedChanges.unSavedChanges = true;
     },
 
     listen: (settings)=>{
         const curSettings = {
             containers : "body",
             inputTypes: "input:not([type='submit']):not([type='reset']):not([disabled]), textarea:not([disabled])",
             ...settings
         }
             window.addEventListener("beforeunload",jsdev.unsavedChanges.checkSaved );
         
         
         jsdev.getElementRefs(curSettings.containers, {multiple: true}).forEach((elem)=>{
             jsdev.getElementRefs(curSettings.inputTypes, {container: elem, multiple: true}).forEach((elem)=>{
                 elem.addEventListener("input", jsdev.unsavedChanges.setUnsaved);
                 jsdev.unsavedChanges.elemRefs.push(elem);
             });
         })
 
     },
     checkSaved: (evt)=>{
         if(jsdev.unsavedChanges.unSavedChanges){
             evt.preventDefault();
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
 
 intersectionTrigger: (elems, settings)=>{
     const curSettings = {
         thresholdIn: 0.5,
         thresholdOut: 0.1, 
         repeat: true, //Set to FALSE to only trigger once
         container: null,
         onTrigger: ()=>{},
         onExit: ()=>{},
         ...settings
     }
     const triggerObserver = new IntersectionObserver((entries)=>{
         entries.forEach((entry)=>{
             if(entry.isIntersecting){
                 if(entry.target.dataset.is_triggered == "false"){
                     entry.target.setAttribute("data-is_triggered", "true");
                     curSettings.onTrigger(entry.target);
                 }
             }
         })
     }, {threshold: curSettings.thresholdIn});
     if(curSettings.thresholdOut != null){const exitObserver = new IntersectionObserver((entries)=>{
         entries.forEach((entry)=>{
             if(!entry.isIntersecting){
                 if(entry.target.dataset.is_triggered == "true"){
                     entry.target.setAttribute("data-is_triggered", "false");
                     curSettings.onExit(entry.target);
                     if(!curSettings.repeat){
                        exitObserver.unobserve(entry.target)
                        triggerObserver.unobserve(entry.target)
                     }
                 }
             }
         })
     }, {threshold: curSettings.thresholdOut});
     (jsdev.getElementRefs(elems, {multiple: true})).forEach((elem)=>{exitObserver.observe(elem) })
    }
     
 
     (jsdev.getElementRefs(elems, {multiple: true})).forEach((elem)=>{elem.setAttribute("data-is_triggered", "false");triggerObserver.observe(elem);})
 },
 
 lazyLoad: (elems, settings)=>{
     const curSettings = {
         threshold: 0.1,
         tempSrcAttribute: "data-src",
         targetSrcAttribute: "src",
         checkImages: true,
         container: null,
         onLoad: ()=>{},
         onError: ()=>{},
         ...settings
     };
     const lazyObserver = new IntersectionObserver((obsElems)=>{
         obsElems.forEach((elem)=>{
             if(elem.isIntersecting){
                 lazyObserver.unobserve(elem.target);
                 if(curSettings.checkImages){
                     // check if img exisits
                 const testImg = new Image();
                 testImg.src = (elem.target).getAttribute(curSettings.tempSrcAttribute);
                  // If image doesn't exist, remove the image element
                 if(testImg.complete){
                     (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                     curSettings.onLoad(elem.target);
                 }else{
                 testImg.onload = ()=>{
                     (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                     curSettings.onLoad(elem.target);
                 };
                 testImg.onerror = ()=>{
                     curSettings.onError(elem.target);
                 };
            
         }
                 }else{
                     (elem.target).setAttribute(curSettings.targetSrcAttribute, (elem.target).getAttribute(curSettings.tempSrcAttribute));
                     (elem.target).onload = ()=>{
                             curSettings.onLoad(elem.target);
                     }
                    
                 }
                 
             }
         })
     },{threshold: curSettings.threshold, root: (curSettings.container == null) ? null : jsdev.getElementRefs(curSettings.container, {multiple: false})});
     (jsdev.getElementRefs(elems, {multiple: true})).forEach((elem)=>{
         lazyObserver.observe(elem);
     });
 },
 
 // Credit to https://stackoverflow.com/users/109538/broofa for this v4 uuid generator
  getUUID: ()=>{
     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
     );
   },
 
   GETValues: ()=>{
     const searchParams = new URLSearchParams(window.location.search);
     const retval = {}
     for (const key of searchParams.keys()) {
         retval[key] = searchParams.get(key);
       }
       return retval;
   },
   
   // Add multiple styles to a element's style tag
 elemStyles : function(elem, addStyles){
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
    
},
wordCount: function(str){
    if(/[0-9a-z]{1,}/gi.test(str)){
        return str.match(/[0-9a-z]{1,}/gi).length;
    }else{
        return 0;
    }
    
},
wordsToUpperCase : function(str){
    return(str.replace(/[a-z]{1,}(?!\w)/gi, (match)=>{
        let tempStr = match.slice(1);
        let tempUp = match.charAt(0).toUpperCase();
        return tempUp + tempStr;
    }));
    
},
sortRandom : function(arr){
    const arrayLength = arr.length;
    const arrayRefs = [];
    const outputArray = [];
    for(let i = 0; i < arrayLength; i++){
        arrayRefs.push(i);
    }
    for(let i = 0; i < arrayLength; i++){
        const currentNum = Math.floor(Math.random() * (arrayRefs.length - 0) + 0);
        outputArray.push(arr[arrayRefs[currentNum]]);
        arrayRefs.splice(currentNum, 1);
    }
    return outputArray;
}
 
 };
 
 // ARRAY PROTOTYPES
 
 // SORT TARGET ARRAY IN A RANDOM ORDER
 
 
 
 