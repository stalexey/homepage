function toggleMenu() {
	var x = document.getElementById("NavigaionBarID");
	if (x.className === "NavigationBar") {
		x.className += " Responsive";
	} else {
		x.className = "NavigationBar";
	}
}

function collapseMenu() {
	var x = document.getElementById("NavigaionBarID");
	x.className = "NavigationBar";
}