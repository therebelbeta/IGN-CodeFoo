$(document).ready(function(){
	homeContent();
	sizing();
	prettyPrint();
	$('.logo').click(function(){
		homeContent();
		sizing();
		prettyPrint();
	});
	$('.nav span').click(function(){
		var page = $(this).attr('class');
		if (page == 'bus'){
			schoolbusContent();
			sizing();
			prettyPrint();
		}
		else if (page == 'fluid'){
			fluidContent();
			sizing();
			prettyPrint();
		}
		else if (page == 'plates'){
			window.location = "/lp.html";
		}
		else if (page == 'conn4'){
			conn4Content();
			sizing();
			prettyPrint();
		}
		
	});	
	
});