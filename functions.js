function toggleInfo(){
	let x = document.activeElement;
	let y = x.previousElementSibling;

	// alert(x.height);
	if (y.style.height != "150px") {
		y.style.height = "150px";
		y.style.overflowY = "scroll";
		x.innerHTML = "&#61544;";
	} 
	else { 
		y.style.height = "0px";
		x.innerHTML = "&#61543;";
	}
}



function myFunction() {

	var area = document.getElementById("areas").value.replace(/\s/g,"");
	
	for (let el of document.querySelectorAll('.hikeContainer')) 
	el.style.display = 'none';

	for (let el of document.querySelectorAll('.hikeContainer' + "."+ area)) 
	el.style.display = 'flex';
}

