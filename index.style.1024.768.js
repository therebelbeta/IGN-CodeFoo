function sizing1024(){

	/*Sizing Functions*/
	headerHeight = (WinHeight/100)*20;
	headerLogoImgHeight = (WinHeight/100)*18;
	headerLogoImgMarginTop = WinHeight/100;
	headerLogoImgMarginBottom = WinHeight/100;
	headerNavPositionTop = (WinHeight/100)*16;
	headerNavSpanMargin = WinWidth/100;
	footerHeight = (WinHeight/100)*10;
	
	/*Sizing Applications*/
	
		$('.header').css({
			'display' : 'block', 
				'width' : '100%', 
				'height' : headerHeight,
			
			'position' : 'absolute', 
				'top' : '0px', 
				'left' : '0px',
			
			'margin' : '0px'
			
		});
			$('.logo').css({
				'display' : 'block', 
				
				'position' : 'absolute', 
					'top' : '0px', 
					'left' : '0px'

			});
				$('.logo img').css({
					'display' : 'block', 
					'position' : 'absolute', 
						'top' : '0px', 
						'left' : '0px',
						
						'height' : headerLogoImgHeight,

						'margin-top' : headerLogoImgMarginTop, 
						'margin-bottom' : headerLogoImgMarginBottom
					
				});
				headerLogoH1PositionLeft = $('.logo img').width();
				headerLogoH1PositionTop = (WinHeight/100)*4;
				headerLogoH1Width = (WinWidth/100)*30;
				headerLogoH1WordSpacing = (WinWidth/100)*2;
				headerLogoH1FontSize = (WinHeight/100)*5;
				headerLogoH1SpanFontSize = (WinHeight/100)*2.5;
				 
				$('.logo h1').css({
					'display' : 'inline', 
					'width' : headerLogoH1Width,
					'position' : 'absolute', 
						'top' : headerLogoH1PositionTop, 
						'left' : headerLogoH1PositionLeft, 
					
					'font-size' : headerLogoH1FontSize,
					'word-spacing' : headerLogoH1WordSpacing
				});
				$('.logo h1 span').css({
					'display' : 'inline', 

					
					'font-size' : headerLogoH1SpanFontSize,
					
					'vertical-align' : 'super'
				});
			$('.nav').css({
				'position' : 'absolute', 
					'top' : headerNavPositionTop, 
					'right' : '0px'
			});
			$('.nav span').css({
				
				'padding' : headerNavSpanMargin
				
			});
		contentHeight = WinHeight - headerHeight - footerHeight;
		
		$('.content').css({
			'display' : 'block', 
				'width' : '96%', 
				'height' : contentHeight,
			'position' : 'absolute', 
				'top' : headerHeight, 
				'left' : '0px', 
				
				'margin-left' : '2%', 
				'margin-right' : '2%'
			

		});
		contentColumn1Width = (WinWidth/100)*62;
		contentColumn1PaddingLeft = (WinWidth/100)*2;
		contentColumn1PaddingRight = (WinWidth/100)*2;
		contentColumn1BorderRadius = (WinWidth/100)*2;
			$('.column1').css({
				'display' : 'block', 
					'width' : contentColumn1Width, 
					'height' : contentHeight,
				'position' : 'absolute', 
					'top' : '0px', 
					'left' : '0px', 
					'padding-left' : contentColumn1PaddingLeft, 
					'padding-right' : contentColumn1PaddingRight, 
				
				
				'border-radius' : contentColumn1BorderRadius, 
					'-webkit-border-radius' : contentColumn1BorderRadius, 
					'-moz-border-radius' : contentColumn1BorderRadius
			});
			
			$('.column1 .bus').css({
				'display' : 'block', 
					'width' : contentColumn1Width
			});
			
			$('.column1 img.die').css({
					'margin-right' : '20px'
			});
			contentColumn1PlayboardWidth = (WinWidth/100)*58;
			contentColumn1PlayboardHeight = contentColumn1PlayboardWidth;
			
			
			cellwidth = (WinWidth/100)*5.8;
			cellheight = cellwidth;
			$('.column1 .playboard').css({
				'display' : 'block', 
				'width' : contentColumn1PlayboardWidth,
				'height' : contentColumn1PlayboardHeight,
				'margin' : 'auto',
				'line-height' : cellheight+'px'
			});

			$('.emptyCell').css({
				'display' : 'block',
				'float' : 'left',
				'width' : cellwidth,
				'height' : cellheight,
				'background-image' : 'url("conn4-overlay-tile.png")',
				'background-size' : '100%'
			});

			contentColumn2Width = (WinWidth/100)*28;
			contentColumn2PositionLeft = contentColumn1Width+((WinWidth/100)*6);
			contentColumn2BorderRadius = contentColumn1BorderRadius;
			var columnsideheight = (contentHeight/100)*48;
			
			$('.column2').css({
				'display' : 'block', 
					'width' : contentColumn2Width, 
					'height' : columnsideheight,
				'position' : 'absolute', 
					'top' : '0px', 
					'left' : contentColumn2PositionLeft, 
				
				'border-radius' : contentColumn1BorderRadius, 
					'-webkit-border-radius' : contentColumn1BorderRadius, 
					'-moz-border-radius' : contentColumn1BorderRadius
			});
			var column3top = columnsideheight+((contentHeight/100)*4);
			$('.column3').css({
				'display' : 'block', 
					'width' : contentColumn2Width, 
					'height' : columnsideheight,
				'position' : 'absolute', 
					'top' : column3top, 
					'left' : contentColumn2PositionLeft,
				
				
				'border-radius' : contentColumn1BorderRadius, 
					'-webkit-border-radius' : contentColumn1BorderRadius, 
					'-moz-border-radius' : contentColumn1BorderRadius
				
				
					
			});
		$('.footer').css({
			'display' : 'block', 
				'width' : '100%', 
				'height' : footerHeight,
			
			'position' : 'absolute', 
				'left' : '0px', 
				'bottom' : '0px'
		});
			$('.copy').css({
				
				'position' : 'absolute', 
					
					'left' : headerNavSpanMargin, 
					'bottom' : headerNavSpanMargin
					
				
				
			});
			$('.footer .navfoot').css({
				
				
				'position' : 'absolute', 
					'bottom' : headerNavSpanMargin, 
					'right' : headerNavSpanMargin
				
				
				
				
			});
			$('.navfoot span').css({
				
				'padding' : headerNavSpanMargin 
				
			});
}