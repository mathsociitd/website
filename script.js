
// $("header").load("./partials/header.html");
var mode = localStorage['mode'] || 'light';
localStorage['mode'] = mode;

if (mode == 'dark'){
	$("body").addClass("dark");
	$("#mode-toggler").html("Switch to light mode");
}


$.ajax({
	type: "GET",
	url: "./partials/header.html",
	success: function(data){
		$('header').css("display", "none");
	    $('header').html(data);
	    hash_checker();
	}
});


function hash_checker(){
	var hash = window.location.hash;
	var page_set = ['home','about','events','team','contact'];
	var res = hash.split('/');
	val = (page_set.indexOf(res[1]) > -1) ? res[1] : page_set[0];
	page_switch(val);
}

function page_switch(val){
	$('ul.navbar-nav>li').removeClass('active');
		$.ajax({
			type: "GET",
			url: "./partials/"+val+".html",
			cache: false, //(val == 'events'),
			success: function(data){
				$('main').fadeOut("fast",function(){
					$("main").html("");
					if (val == "home")
						$('header').fadeOut("fast");
					else
						$('header').fadeIn("fast");
					$("main").html(data);
				    $("title").html(val.charAt(0).toUpperCase() + val.slice(1)+" | Mathematics Society, IIT Delhi");
				    
				    if ($("#mode-toggler-switch").length > 0){
				    	if ($("body").hasClass("dark")){
				    		$("#mode-toggler-switch>input").prop("checked",true);
				    		$(".for-light-text").css("display","block");
				    		$(".for-dark-text").css("display", "none");
				    	}
				    	else{
				    		$(".for-light-text").css("display","none");
				    		$(".for-dark-text").css("display", "block");
				    	}
				    }


				    $('main').fadeIn();
				    //$('main>*').fadeOut();
				    history.replaceState(undefined, undefined, "#/"+val+'/');
				    $('ul.navbar-nav>li#nav-'+val).addClass('active');
				});
			}

		//$("main").load(""); 
	});
	
}



/*
$(".nav-link").click(function() {
	res = $(this).attr("href").split('/')[1];
	$('#'+res).fadeOut();
	//alert(res);
	//update hash
})
*/


		$(window).on("scroll",function() {    
			var scroll = $(window).scrollTop();
			
			if (scroll >= 10) {
				$("header>div.navigation-wrap").removeClass('start-style').addClass("scroll-on");
			} else {
				$("header>div.navigation-wrap").removeClass("scroll-on").addClass('start-style');
			}
		});
		

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	// Close Nav in mobile after click

	$('header').on('click','.nav-link',function(){
		if ($('.navbar-toggler').css("display") != "none"){
			$('.navbar-toggler').trigger('click');
		}
	})


	//Switch light/dark

	function mode_toggler(){
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	}
	
		
	$("body").on("click","#mode-toggler",function(){
		if ($("#mode-toggler-switch").length > 0)
			$("#mode-toggler-switch>input").trigger("change");
		else{

			if ($("body").hasClass("dark")) {
				$("body").removeClass("dark");
				$("#mode-toggler").html("Switch to dark mode");
				localStorage['mode'] = 'light';
			}
			else {
				$("body").addClass("dark");
				$("#mode-toggler").html("Switch to light mode");
				localStorage['mode'] = 'dark';
			}
		}
	});

	$("body").on("change","#mode-toggler-switch>input",function(){
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#mode-toggler-switch>input").prop("checked",false);
			$("#mode-toggler").html("Switch to dark mode");
			$(".for-light-text").fadeOut("fast",function(){
				$(".for-dark-text").fadeIn();
			});
			localStorage['mode'] = 'light';
			
		}
		else {
			$("body").addClass("dark");
			$("#mode-toggler-switch>input").prop("checked",true);
			$("#mode-toggler").html("Switch to light mode");
			$(".for-dark-text").fadeOut("fast",function(){
				$(".for-light-text").fadeIn();
			});
			localStorage['mode'] = 'dark';
		}
	})	


