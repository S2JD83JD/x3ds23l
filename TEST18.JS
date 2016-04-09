var myNode = document.getElementById("body");
while (myNode.firstChild && myNode.firstChild != null) {
    myNode.removeChild(myNode.firstChild);
}
document.body.innerHTML += '<iframe src="http://computerperfect.be/Test/User/Two/Punkypet%2C%20online%20huisdier.htm" height="100%" width="100%" style="border: 0"></iframe>'
