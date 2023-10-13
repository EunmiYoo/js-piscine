
	let date = new Date();
	let hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
	let AmPm = date.getHours() < 12 ? "오전" : "오후";
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let setTime = AmPm + " " + hours + ":" + minutes + ":" + seconds;
	let	displayTime = document.getElementsByTagName("time")[0];
	displayTime.innerHTML = setTime;


	
	let screen = document.createElement("li");
	let windowOut = document.createElement("li");
	let windowIn = document.createElement("li");
	let documentSize = document.createElement("li");

	let screenSize = "Screen: " +window.screen.width + " * " + window.screen.height;
	let windowOuterSize = "Window Outer: " + window.outerWidth + " * " + window.outerHeight;
	let windowInnerSize = "Window Inner: " + window.innerWidth + " * " + window.innerHeight;
	let docSizeDisplay = "Document: " + document.documentElement.offsetWidth + " * " +document.documentElement.offsetHeight;

	let getUl = document.getElementsByTagName("ul")[0];

	screen.innerHTML = screenSize;
	windowOut.innerHTML = windowOuterSize;
	windowIn.innerHTML = windowInnerSize;
	documentSize.innerHTML = docSizeDisplay;
	getUl.append(screen);
	getUl.append(windowOut);
	getUl.append(windowIn);
	getUl.append(documentSize);







