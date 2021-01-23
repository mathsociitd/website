
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


$.ajax({
	type: "GET",
	url: "./partials/header.html",
	success: function(data){
		$('header').css("display", "none");
	    $('header').html(data);
	    hash_checker();
	}
});

function show_loader(){
	if ($(".loader").css("display") == "none")
		$(".loader").css("display","block");
}

function hide_loader(){
	$(".loader").css("display","none");
}

function hash_checker(){
	var hash = window.location.hash;
	var page_set = ['home','about','events','team','contact'];
	var res = hash.split('/');
	val = (page_set.indexOf(res[1]) > -1) ? res[1] : page_set[0];
	page_switch(val);
}

function alert_offline(){
	history.replaceState(null, null, "#/"+$('ul.navbar-nav>li.active').attr('id').substr(4,)+"/"); // revert hash
	var err_msg = "<div style='font-size:1.075em;'><strong>You are Offline!</strong></div><div style='line-height:1.3'>No network available. Check your internet connection and try again!</div>"; // error message in alert box
	
	$(`<div class="alert-offline alert alert-danger alert-dismissible fade show" role="alert">
		  ` + err_msg + `
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		    <span aria-hidden="true">&times;</span>
		  </button>
		</div>`)
	    .appendTo('body')
	    .delay(7500)
	    .queue(function() {
	        $(this).alert('close');
	    });
}

function page_switch(val){
	if (!navigator.onLine){
		alert_offline();
		return;
	}
	$(".alert-offline").alert('close');

	$('ul.navbar-nav>li').removeClass('active');
	show_loader();
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

				    		$('meta[name="theme-color"]').attr("content","#000");
				    		$('meta[name="msapplication-navbutton-color"]').attr("content","#000");
				    		$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#000");
				    	}
				    	else{
				    		$(".for-light-text").css("display","none");
				    		$(".for-dark-text").css("display", "block");

				    		$('meta[name="theme-color"]').attr("content","#fff");
				    		$('meta[name="msapplication-navbutton-color"]').attr("content","#fff");
				    		$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#fff");
				    	}
				    }

				    $(window).scrollTop(0);
				    $('main').fadeIn();
				    //$('main>*').fadeOut();
				    history.replaceState(undefined, undefined, "#/"+val+'/');
				    hide_loader();
				    $('ul.navbar-nav>li#nav-'+val).addClass('active');
				});
			}
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
	
		
	$("body").on("click","#mode-toggler",function(){
		if ($("#mode-toggler-switch").length > 0)
			$("#mode-toggler-switch>input").trigger("change");
		else{

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

			$('meta[name="theme-color"]').attr("content","#fff");
			$('meta[name="msapplication-navbutton-color"]').attr("content","#fff");
			$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#fff");
			
		}
		else {
			$("body").addClass("dark");
			$("#mode-toggler-switch>input").prop("checked",true);
			$("#mode-toggler").html("Switch to light mode");
			$(".for-dark-text").fadeOut("fast",function(){
				$(".for-light-text").fadeIn();
			});
			localStorage['mode'] = 'dark';

			$('meta[name="theme-color"]').attr("content","#000");
			$('meta[name="msapplication-navbutton-color"]').attr("content","#000");
			$('meta[name="apple-mobile-web-app-status-bar-style"]').attr("content","#000");
		}
	})	


