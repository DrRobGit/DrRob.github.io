const myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/thick-sheep-color.png") {
		myImage.setAttribute("src", "images/Sheep.jpg");
	} else {
		myImage.setAttribute("src", "images/thick-sheep-color.png");
	}
})