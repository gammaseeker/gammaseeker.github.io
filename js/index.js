function initialize(){
	github = document.getElementById("github");
	linked = document.getElementById("linkedin");
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

$(document).ready(function(){
	var w = $('#htmlIcon').css('width');
	var h = $('#htmlIcon').css('height');
	$('.skillIcons').css('width', w);
	$('.skillIcons').css('height', h);
});

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});
