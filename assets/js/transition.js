$(document).ready(function(){
	$(".transition-about").click(function(){
		slideHeader();
		$(".container-projects").fadeOut();
		$(".container-contact").fadeOut();
		$(".container-about").delay("slow").fadeIn();
	});
	$(".transition-contact").click(function(){
		slideHeader();
		$(".container-projects").fadeOut();
		$(".container-about").fadeOut();
		$(".container-contact").delay("slow").fadeIn();
	});
	$(".transition-projects").click(function(){
		slideHeader();
		$(".container-contact").fadeOut();
		$(".container-about").fadeOut();
		$(".container-projects").delay("slow").fadeIn();
	});
	$("#home").click(function(){
		goHome();
		$(".container-contact").fadeOut();
		$(".container-about").fadeOut();
		$(".container-projects").fadeOut();
	});
});

function slideHeader() {
	$(".container-main .lead").slideUp();
	$(".headshot, .container-main .lead").animate({opacity: 0},200);
	$(".headshot").slideUp();
	$(".container-main").animate({top:"20pt"});
};

function goHome() {
	$(".container-main .lead").slideDown();
	$(".headshot, .container-main .lead").animate({opacity: 100},200);
	$(".headshot").slideDown();
	$(".container-main").animate({top:"20%"});
}