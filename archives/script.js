
// $("header").load("./partials/header.html");
var mode = localStorage['mode'] || 'light';
localStorage['mode'] = mode;

if (mode == 'dark'){
	$("body").addClass("dark");
	$("#mode-toggler").html("Switch to light mode");

	$('meta[name="theme-color"]').attr("content","#000");
	$('meta[name="msapplication-navbutton-color"]').attr("content","#000");
	$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#000");
	}


function show_loader(){
	if ($(".loader").css("display") == "none")
		$(".loader").css("display","block");
}

function hide_loader(){
	$(".loader").css("display","none");
}
	
		
$("body").on("click","#mode-toggler",function(){
	if ($("body").hasClass("dark")) {
		$("body").removeClass("dark");
		$("#mode-toggler").html("Switch to dark mode");
		localStorage['mode'] = 'light';

		$('meta[name="theme-color"]').attr("content","#fff");
		$('meta[name="msapplication-navbutton-color"]').attr("content","#fff");
		$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#fff");
	}
	else {
		$("body").addClass("dark");
		$("#mode-toggler").html("Switch to light mode");
		localStorage['mode'] = 'dark';

		$('meta[name="theme-color"]').attr("content","#000");
		$('meta[name="msapplication-navbutton-color"]').attr("content","#000");
		$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#000");
	}
});

hide_loader();