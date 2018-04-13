var moveEye = document.querySelectorAll('.pupil');
;
/*var moveEar = document.querySelector('.ear-left');

function pupMod() {
	for(var i = 0; i < moveEye.length; i++){
	var moveEyes = moveEye[i];
	moveEyes.addEventListener('mouseover', function(){
	moveEyes.className = 'pupilMod';
	});
}


moveEyes.addEventListener('mouseout', function(){
	moveEyes.className = 'pupil';
});
*/
moveEar.addEventListener('mouseover', function(){
	moveEar.classList.add('earLeftMod');
});

moveEar.addEventListener('mouseout', function(){
	moveEar.className = 'ear-left';
});

};
pupMod();