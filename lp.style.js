function styling(){
	var winWidth = parseFloat($(window).width());
	
	var contenth1Width = (winWidth/100)*50;
		var contenth1FontSize = (contenth1Width*5)/31;
	
	$('.content h1').css({
		'display' : 'block',
		'width' : '100%',
		'font-size' : contenth1FontSize,
		'text-align' : 'center',
		'margin' : '0px',
		'margin-top' : '20px',
	});
	var contenth2Width = (winWidth/100)*50;
		var contenth2FontSize = (contenth2Width*5)/95;
	$('.content h2').css({
		'display' : 'block',
		'width' : '50%',
		'margin' : 'auto',
		'font-size' : contenth2FontSize,
		'text-align' : 'center'
	});
	var contentNameTitleWidth = (winWidth/100)*50;
		var contentNameTitleFontSize = (contentNameTitleWidth*5)/95;
	var contentNameTitleMarginTop = (winWidth/100)*5;
	$('.content .nameTitle').css({
		'display' : 'block',
		'width' : '80%',
		'margin' : 'auto',
		'margin-top' : contentNameTitleMarginTop,
		'font-size' : contentNameTitleFontSize,
		'text-align' : 'center'
	});
	var contentPopTitleWidth = (winWidth/100)*50;
		var contentPopTitleFontSize = (contentPopTitleWidth*5)/50;
	var contentPopMarginTop = (winWidth/100)*2;
	$('.content .popTitle').css({
		'display' : 'block',
		'width' : '80%',
		'margin' : 'auto',
		'margin-top' : contentPopMarginTop,
		'font-size' : contentPopTitleFontSize,
		'text-align' : 'center'
	});
	var contentInputWidth = (winWidth/100)*50;
		var contentInputFontSize = (contentInputWidth*5)/95;
	var contentInputHeight = (contentInputWidth*5)/50;
	$('.content input').css({
		'display' : 'block',
		'width' : contentInputWidth,
		'height' : contentInputHeight,
		'margin' : 'auto',
		'font-size' : contentInputFontSize,
		'text-align' : 'center'
	});
	var contentButtonWidth = (winWidth/100)*45;
		var contentButtonFontSize = (contentButtonWidth*5)/95;
	var contentButtonHeight = (contentButtonWidth*5)/50;
	var contentButtonMarginTop = (winWidth/100)*1;
	$('.content Button').css({
		'display' : 'block',
		'width' : contentButtonWidth,
		'height' : contentButtonHeight,
		'margin' : 'auto',
		'margin-top' : contentButtonMarginTop,
		'font-size' : contentButtonFontSize,
		'text-align' : 'center'
	});
	var contentQpWidth = (winWidth/100)*60;
		var contentQpFontSize = (contentQpWidth*18)/767;
	var contentQpMarginTop = (winWidth/100)*1;
	$('.content .qp').css({
		'display' : 'block',
		'width' : '80%',
		'margin' : 'auto',
		'margin-top' : contentQpMarginTop,
		'font-size' : contentQpFontSize,
		'text-align' : 'center'
	});
	var contentOtWidth = (winWidth/100)*60;
		var contentOtFontSize = (contentOtWidth*18)/767;
	var contentOtMarginTop = (winWidth/100)*1;
	$('.outputText').css({
		'display' : 'block',
		'width' : '80%',
		'margin-left' : '10%',
		'margin-right' : '10%',
		'margin-top' : contentOtMarginTop,
		'font-size' : contentOtFontSize,
		'text-align' : 'center'
	});

	
	var contentOutputPlateWidth = (winWidth/100)*40;
	/*250 : 127*/
	var contentOutputPlateHeight = (contentOutputPlateWidth*127)/250;
	var contentOutputPlateMarginTop = (winWidth/100)*1;
	$('.output .plate').css({
		'display' : 'block',
		'width' : contentOutputPlateWidth,
		'height' : contentOutputPlateHeight,
		'margin' : 'auto',
		'margin-top' : contentOutputPlateMarginTop
	});
	var contentPossPlateWidth = (winWidth/100)*20;
	/*250 : 127*/
	var contentPossPlateHeight = (contentPossPlateWidth*127)/250;
	var contentPossPlateMarginTop = (winWidth/100)*1;
	$('.possible .plate').css({
		'display' : 'block',
		'width' : contentPossPlateWidth,
		'height' : contentPossPlateHeight,
		'float' : 'left',
		'margin' : 'auto',
		'margin-top' : contentPossPlateMarginTop
	});
	
};
/*Styling for License Name Size*/
$.fn.plateSize = function(){
	var thisPlateWidth = $(this).width();
	var thisPlateHeight = $(this).height();
	
	var thisPlateName = $(this).children('.plateName');
	var thisLicense = $(this).children('.plateMain');
	
	var thisPlateNameWidth = (thisPlateWidth/100)*50;
	/*127 : 15 */
	var thisPlateNameFontSize = (thisPlateWidth*9)/127;
	var thisPlateNamePaddingTop = (thisPlateWidth/100)*8;
	
	thisPlateName.css({
		'font-size' : thisPlateNameFontSize,
		'padding-top' : thisPlateNamePaddingTop
	});
	
	/*Check against plate width*/
		/*if larger, resize*/
	
	if (thisPlateName.html() == ''){
		thisPlateName.html('Test Name');
	}
	
	var thisLicenseFontSize = (thisPlateWidth)/5;
	/*50 - 3*/
	thisLicense.css({
		'font-size' : thisLicenseFontSize
	});
	
};