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

// $(document).ready(function(){
//     $(".fade-in-up").on('load', function(){
//         $(".fade-in-up").slideUp();
//     });
// });

$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});
