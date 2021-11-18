$(function(){ 

	// header-fixed
	const introHeight = $("#intro").innerHeight();
	let scrollOffset;
	fixedHeader();
 	$(window).on("scroll", function(){ 
 		fixedHeader();
	}); 
	function fixedHeader(){
		scrollOffset = $(this).scrollTop();
 		if (scrollOffset >= introHeight) $("#header").addClass("fixed")
 		else $("#header").removeClass("fixed")
	}
	
	$("nav li").on("click", function(){
		// nav-item active
		$("nav li").removeClass("active");
		$(this).addClass("active");

		// nav-toggle deactivate
		$("#nav-toggle").removeClass("active");
	});

	// nav-toggle active
	$("#nav-toggle").on("click", function(){
		$(this).toggleClass("active");
	});

	// accordion-item active
	$("#accordion dt").on("click", function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		}else{
			$("#accordion dt").removeClass("active");
			$(this).addClass("active");
		}		
	});


}); 