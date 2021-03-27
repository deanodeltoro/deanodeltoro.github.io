function toggleInfo(){
	let x = document.activeElement;
	let y = x.previousElementSibling;

	// alert(x.height);
	if (y.style.height != "400px") {
		y.style.height = "400px";
		y.style.overflowY = "scroll";
		x.innerHTML = "&#61544;";
	} 
	else { 
		y.style.height = "0px";
		x.innerHTML = "&#61543;";
	}
}



function myFunction() {

	var area = document.getElementById("areas").value;

	if (area == "all") {
		for (let el of document.querySelectorAll('.hikeContainer')) 
		el.style.display = 'flex';
	}
	
	else {
	for (let el of document.querySelectorAll('.hikeContainer')) 
	el.style.display = 'none';

	for (let el of document.querySelectorAll('.municipalityClass')) 
	el.style.display = 'none';

	for (let el of document.querySelectorAll('.hikeContainer' + "."+ area))
	el.style.display = 'flex';
	

	for (let el of document.querySelectorAll('.municipalityClass' + "."+ area))
	el.style.display = 'flex';
	}
}

