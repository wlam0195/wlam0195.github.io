$(document).ready(function(){
	$(".east").mouseenter(function(){
		$(".displayeastinfo").addClass("show");
	});

	$(".east").mouseleave(function(){
		$(".displayeastinfo").removeClass("show");
	});

	$(".south").mouseenter(function(){
		$(".displaysouthinfo").addClass("show");
	});

	$(".south").mouseleave(function(){
		$(".displaysouthinfo").removeClass("show");
	});


	$(".west").mouseenter(function(){
		$(".displaywestinfo").addClass("show");
	});

	$(".west").mouseleave(function(){
		$(".displaywestinfo").removeClass("show");
	});

	$(".southeast").mouseenter(function(){
		$(".displaysoutheastinfo").addClass("show");
	});

	$(".southeast").mouseleave(function(){
		$(".displaysoutheastinfo").removeClass("show");
	});


	$(".central").mouseenter(function(){
		$(".displaycentralinfo").addClass("show");
	});

	$(".central").mouseleave(function(){
		$(".displaycentralinfo").removeClass("show");
	});

});