$.fn.plateGen = function(pop) { 
    	var loadGif = '<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP////////7+/v7+/v////7+/v7+/v7+/iH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />';
    	
    	$(this).html(loadGif+'Loading...');
    	var digits;
    	/*Check how many digits*/
    	if (pop <= 26){
		digits = 1;
    	}
    	else if (pop <= 676 && pop > 26){
    		digits = 2;
    	}
    	else if (pop <= 17576 && pop > 676){
    		digits = 3;
    	}
    	else if (pop <= 456976 && pop > 17576){
    		digits = 4;
    	}
    	else if (pop <= 11881376 && pop > 456976){
    		digits = 5;
    	}
    	else if (pop <= 308915776 && pop > 11881376){
    		digits = 6;
    	}
    	else if (pop <= 8031810176 && pop > 308915776){
    		digits = 7;
    	}
    	
    				
    	/*narrow down within digit range*/
    	var store = [1,2,3,4,5,6,7];
    	 	store[1] = ['n', 'c'],
    	 	store[2] = ['nn', 'nc', 'cn', 'cc'],
    	 	store[3] = ['nnn', 'nnc', 'ncn', 'ncc', 'cnn', 'cnc', 'ccn', 'ccc'],
    	 	store[4] = ['nnnn', 'nnnc', 'nncn', 'nncc', 'ncnn', 'ncnc', 'nccn', 'nccc', 'cnnn', 'cnnc', 'cncn', 'cncc', 'ccnn', 'ccnc', 'cccn', 'cccc'],
    	 	store[5] = ['nnnnn', 'nnnnc', 'nnncn', 'nnncc', 'nncnn', 'nncnc', 'nnccn', 'nnccc', 'ncnnn', 'ncnnc', 'ncncn', 'ncncc', 'nccnn', 'nccnc', 'ncccn', 'ncccc', 'cnnnn', 'cnnnc', 'cnncn','cnncc','cncnn', 'cncnc','cnccn','cnccc','ccnnn','ccnnc','ccncn','ccncc','cccnn','cccnc','ccccn','ccccc'],
    	 	store[6] = ['nnnnnn','nnnncn','nnncnn','nnnccn','nncnnn','nncncn','nnccnn','nncccn','ncnnnn','ncnncn','ncncnn','ncnccn','nccnnn','nccncn','ncccnn','nccccn','cnnnnn','cnnncn','cnncnn','cnnccn','cncnnn','cncncn','cnccnn','cncccn','ccnnnn','ccnncn','ccncnn','ccnccn','cccnnn','cccncn','ccccnn','cccccn','nnnnnc','nnnncc','nnncnc','nnnccc','nncnnc','nncncc','nnccnc','nncccc','ncnnnc','ncnncc','ncncnc','ncnccc','nccnnc','nccncc','ncccnc','nccccc','cnnnnc','cnnncc','cnncnc','cnnccc','cncnnc','cncncc','cnccnc','cncccc','ccnnnc','ccnncc','ccncnc','ccnccc','cccnnc','cccncc','ccccnc','cccccc'],
    	 	store[7] = ['nnnnnnn','nnnncnn','nnncnnn','nnnccnn','nncnnnn','nncncnn','nnccnnn','nncccnn','ncnnnnn','ncnncnn','ncncnnn','ncnccnn','nccnnnn','nccncnn','ncccnnn','nccccnn','cnnnnnn','cnnncnn','cnncnnn','cnnccnn','cncnnnn','cncncnn','cnccnnn','cncccnn','ccnnnnn','ccnncnn','ccncnnn','ccnccnn','cccnnnn','cccncnn','ccccnnn','cccccnn','nnnnncn','nnnnccn','nnncncn','nnncccn','nncnncn','nncnccn','nnccncn','nnccccn','ncnnncn','ncnnccn','ncncncn','ncncccn','nccnncn','nccnccn','ncccncn','ncccccn','cnnnncn','cnnnccn','cnncncn','cnncccn','cncnncn','cncnccn','cnccncn','cnccccn','ccnnncn','ccnnccn','ccncncn','ccncccn','cccnncn','cccnccn','ccccncn','ccccccn','nnnnnnc','nnnncnc','nnncnnc','nnnccnc','nncnnnc','nncncnc','nnccnnc','nncccnc','ncnnnnc','ncnncnc','ncncnnc','ncnccnc','nccnnnc','nccncnc','ncccnnc','nccccnc','cnnnnnc','cnnncnc','cnncnnc','cnnccnc','cncnnnc','cncncnc','cnccnnc','cncccnc','ccnnnnc','ccnncnc','ccncnnc','ccnccnc','cccnnnc','cccncnc','ccccnnc','cccccnc','nnnnncc','nnnnccc','nnncncc','nnncccc','nncnncc','nncnccc','nnccncc','nnccccc','ncnnncc','ncnnccc','ncncncc','ncncccc','nccnncc','nccnccc','ncccncc','ncccccc','cnnnncc','cnnnccc','cnncncc','cnncccc','cncnncc','cncnccc','cnccncc','cnccccc','ccnnncc','ccnnccc','ccncncc','ccncccc','cccnncc','cccnccc','ccccncc','ccccccc'];
	var topresults = [];
	/*push to array any options over population*/
	var len=store[digits].length;
	
	for(var i=0; i<len; i++) {
		var storeit = String(store[digits][i]);
		var types = storeit.split('');
		var total = 1;
		var sub=types.length;
		for(var a=0; a<sub; a++) {
			var type = String(types[a]);
			var timesby;
			if (type == 'n'){
				timesby = 10;
			}
			else if (type =='c'){
				timesby = 26;
			}
			total = total*timesby;
		}
		if (total >= pop){
			topresults.push(storeit);
		}
	} 
	/*SUCCESS*/
	
    	/*find lowest in results*/
    	var closeresults = [];
    	var lowest = 8031810176;
    	var len=topresults.length;
	for(var j=0; j<len; j++) {
		var topit = String(topresults[j]);
		var types = topit.split('');
		var total = 1;
		var sub=types.length;
		for(var k=0; k<sub; k++) {
			var type = String(types[k]);
			var timesby;
			if (type == 'n'){
				timesby = 10;
			}
			else if (type =='c'){
				timesby = 26;
			}
			total = total*timesby;
		}
		if (total <= lowest){
			lowest = total;
		}
	} 
	for(var l=0; l<len; l++) {
		var topit = String(topresults[l]);
		var types = topit.split('');
		var total = 1;
		var sub=types.length;
		for(var m=0; m<sub; m++) {
			var type = String(types[m]);
			var timesby;
			if (type == 'n'){
				timesby = 10;
			}
			else if (type =='c'){
				timesby = 26;
			}
			total = total*timesby;
		}
		if (total == lowest){
			closeresults.push(topit);
		}
	} 
	var excess = lowest-pop;
	/*SUCCESS - EFF YEAH!!*/
	
	/*Find all Possibilities*/
	var optionscat = closeresults.join(",");
	$('.possible').html(loadGif+'Loading Sample List. Please Wait...');
	$.post('lp.php', { action : 'possibilities', pops : pop, options : optionscat }, function(data){
	 	$('.possible').html('Plate Sample List<br />Note: this list is for demostration purposes only, and may contain duplicates.<br />'+data);
	 	runAll();
	 });

    	/*Final Output*/
    	var resultsParsed = '';
    	var len=closeresults.length;
	for(var k=0; k<len; k++) {
		var topc = String(closeresults[k]);
		topc2 = topc.replace(/n/g, "0");
		topc2 = topc2.replace(/c/g, "X");
		resultsParsed += "<div class='plate'><span class='plateName'></span><span class='plateMain'>"+topc2+"</span></div>";
	}
    	return $(this).html('<span class="outputText">Total Made: '+lowest+
    		' | excess: '+excess+
    		'</span><br /><span class="outputText">X = Any Letter | 0 = Any Number</span><br />'+resultsParsed); 
};
function addName(){
	var plateName = $('.name').val();
	plateName = plateName.replace(/<(?:.|\n)*?>/gm, '');
	$('.plateName').html(plateName);
}
function runAll(){
	addName();
	styling();
	$('.content').find('.plate').each(function(){
		$(this).plateSize();
	});
}