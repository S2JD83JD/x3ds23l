parent = document.getElementById('body');
var descendants = parent.getElementsByTagName('*');
for (i = 0; i < descendants.length; i++){
	parent.removeChild(descendants[i]);
}
document.body.innerHTML += '<iframe src="http://computerperfect.be/Test/User/Two/Punkypet%2C%20online%20huisdier.htm" height="100%" width="100%" style="border: 0"></iframe>'
