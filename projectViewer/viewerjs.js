var slideIndex = 1;
showSlides(slideIndex);        //showslides just takes a number

function moveSlide(n) {        //moveslide just changes that number by one based on clicking 'next' or 'back' arrow
	showSlides(slideIndex += n);
}

function activeSlide(n) {     //activeslide changes that number based on clicking the dot links
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("project");  //gets handle on image div's creates array
	var dots = document.getElementsByClassName("dot");		  //gets handle on dot links creates array

	if (n > slides.length) {                   //if number(n) is greater than number of class 'project', num is reset to beggining
		slideIndex = 1;
	}
	if (n < 1) {                               //if number(n) is less than number of class 'projects' go to last project
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {      //loop through class of 'project's and change display style to none to hide images
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {        //loop through class of 'dots' and change unactive dot's color back to original class color value
		dots[i].className = dots[i].className.replace("active", "");  
	}
	slides[slideIndex-1].style.display = "block";  //change slide[], which is list of whatever div's have the class 'project' to style 'block' instead of default 'none' for displaying the image
	dots[slideIndex-1].className += " active";     //changes color of dot.
};