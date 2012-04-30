function sizeMe(){
	WinWidth = parseFloat($(window).width());
	WinHeight = parseFloat($(window).height());
	
	if (WinWidth >= 1680){
		sizing1680();	
	}
	else if (WinWidth <= 1680){
		sizing1024();	
	}
}
function sizing(){
	sizeMe();
	
	$(window).resize(function(){
		sizeMe();
	});
}
