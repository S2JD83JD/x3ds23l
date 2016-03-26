parent = document.getElementsByTagName('html')[0];
var descendants = parent.getElementsByTagName('head')[0];
parent.removeChild(descendants);
parent = document.getElementsByTagName('html')[0];
var descendants = parent.getElementsByTagName('body')[0];
parent.removeChild(descendants)
document.body.innerHTML = '';
