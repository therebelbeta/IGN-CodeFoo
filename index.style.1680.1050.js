function sizing1680(){

	headerHeight = (WinHeight/100)*20;
	headerLogoImgHeight = (WinHeight/100)*18;
	headerLogoImgMarginTop = WinHeight/100;
	headerLogoImgMarginBottom = WinHeight/100;
	headerNavPositionTop = (WinHeight/100)*16;
	headerNavSpanMargin = WinWidth/100;
	footerHeight = (WinHeight/100)*10;

		positionLeft = (WinWidth-1500)/2;
		$('.header').css({
			'display' : 'block', 
				'width' : '1500px', 
				'height' : headerHeight,
			
			'position' : 'absolute', 
				'top' : '0px', 
				'left' : positionLeft+'px',
			
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
				headerLogoH1Width = (1500/100)*30;
				headerLogoH1WordSpacing = (1500/100)*2;
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
				'left' : positionLeft+'px',
				
				'margin-left' : '2%', 
				'margin-right' : '2%'
			

		});
		contentColumn1Width = (1500/100)*54;
		contentColumn1PaddingLeft = (1500/100)*2;
		contentColumn1PaddingRight = (1500/100)*2;
		contentColumn1BorderRadius = (1500/100)*2;
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
			contentColumn1PlayboardWidth = (1500/100)*58;
			contentColumn1PlayboardHeight = contentColumn1PlayboardWidth;
			
			
			cellwidth = (1500/100)*5.8;
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
			
			contentColumn2Width = (1500/100)*17;
			contentColumn2PositionLeft = contentColumn1Width+((1500/100)*6);
			contentColumn2BorderRadius = contentColumn1BorderRadius;
			var columnsideheight = (contentHeight/100)*48;
			$('.column2').css({
				'display' : 'block', 
					'width' : contentColumn2Width, 
					'height' : contentHeight,
				'position' : 'absolute', 
					'top' : '0px', 
					'left' : contentColumn2PositionLeft, 
				
				'border-radius' : contentColumn1BorderRadius, 
					'-webkit-border-radius' : contentColumn1BorderRadius, 
					'-moz-border-radius' : contentColumn1BorderRadius
			});
			var column3left = contentColumn2PositionLeft+contentColumn2Width+((1500/100)*2);
			$('.column3').css({
				'display' : 'block', 
					'width' : contentColumn2Width, 
					'height' : contentHeight,
				'position' : 'absolute', 
					'top' : '0px', 
					'left' : column3left,
				
				
				'border-radius' : contentColumn1BorderRadius, 
					'-webkit-border-radius' : contentColumn1BorderRadius, 
					'-moz-border-radius' : contentColumn1BorderRadius
				
				
					
			});
		$('.footer').css({
			'display' : 'block', 
				'width' : '100%', 
				'height' : footerHeight,
			
			'position' : 'absolute', 
				'left' : positionLeft+'px',
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