function initialize(){
	github = document.getElementById("github");
	linked = document.getElementById("linkedin");
	gp = document.getElementById("gp");
	gm = document.getElementById("gm");
}

function clickedGithub(){
	github.src = "images/Github/clicked.png";
}

function unclickedGithub(){
	github.src = "images/Github/unclicked.png";
}

function clickedLinkedin(){
	linked.src = "images/LinkedIn/clicked.png";
}

function unclickedLinkedin(){
	linked.src = "images/LinkedIn/unclicked.png";
}

function fadeGp()
{
	gp.style.opacity = 0.5;
}

function fadeGm()
{
	gm.style.opacity = 0.5;
}

function fillGp()
{
	gp.style.opacity = 1;
}

function fillGm()
{
	gm.style.opacity = 1;
}

// $(document).ready(function(){
// 	var w = $('#htmlIcon').css('width');
// 	var h = $('#htmlIcon').css('height');
// 	$('.skillIcons').css('width', w);
// 	$('.skillIcons').css('height', h);
// });

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});
