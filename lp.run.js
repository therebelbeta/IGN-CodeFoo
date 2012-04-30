$(document).ready(function(){
				runAll();
				prettyPrint();
				$('.header .nav').click(function(){
					window.location = "/index.html";
				});
				$('.name').keyup(function(){
					addName();
					$('.content').find('.plate').each(function(){
						$(this).plateSize();
					});
					
				});
				
				/*Run Program*/
				$('.run').click(function(){
					var population = $('.pop').val();
					population = parseFloat(population);
					$('.output').plateGen(population);
					runAll();
				});
				$('.run10').click(function(){
					$('.name').val('Whitehall WI');
					$('.pop').val('10');
					$('.content .plate .plateName').html('Whitehall WI');
					$('.output').plateGen('10');
					runAll();
				});
				$('.run25').click(function(){
					$('.name').val('Grenville NM');
					$('.pop').val('25');
					$('.content .plate .plateName').html('Grenville NM');
					$('.output').plateGen('25');
					runAll();
				});
				$('.runUtah').click(function(){
					$('.name').val('Utah');
					$('.pop').val('2817222');
					$('.content .plate .plateName').html('Utah');
					$('.output').plateGen('2817222');
					runAll();
				});
				$('.runUS').click(function(){
					$('.name').val('United States');
					$('.pop').val('311591917');
					$('.content .plate .plateName').html('United States');
					$('.output').plateGen('311591917');
					runAll();
				});
				$('.runNA').click(function(){
					$('.name').val('North America');
					$('.pop').val('528720588');
					$('.content .plate .plateName').html('North America');
					$('.output').plateGen('528720588');
					runAll();
				});
				$('.runWorld').click(function(){
					$('.name').val('3rd Planet, Sol');
					$('.pop').val('6840507003');
					$('.content .plate .plateName').html('3rd Planet, Sol');
					$('.output').plateGen('6840507003');
					runAll();
				});
				$(window).resize(function(){
					runAll();
				});
});