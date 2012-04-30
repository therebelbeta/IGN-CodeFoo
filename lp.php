<?php
/*Design and Development by Trent Oswald 2012*/
	$action = $_POST['action'];
	$digits = array('num', 'char');
	$digits['num'] = array('0','1','2','3','4','5','6','7','8','9');
	$digits['char'] = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	$i = 0;
	if ($action == 'possibilities'){
		$options = $_POST['options'];
		$optionsarray = explode(',', $options);
		array_splice($optionsarray, 100);
		$optioncount = count($optionsarray);
		
		$pop = $_POST['pops'];
		if ($pop > 100){
			$howmany = 100;
		}
		else{
			$howmany = $pop;
		}
		
		$i = 1;
		$each = $howmany/$optioncount;
		while ($i <= $howmany){
		
			foreach ($optionsarray as $template){
			 	$e = 1;
			 	while ($e <= $each){
					shuffle($digits['num']);
					shuffle($digits['char']);
						/*template = 'nnccccn' etc.*/
					
				/*mb_substr($str,$start,$length)*/
					$d1 = mb_substr($template,0,1);
					$d2 = mb_substr($template,1,1);
					$d3 = mb_substr($template,2,1);
					$d4 = mb_substr($template,3,1);
					$d5 = mb_substr($template,4,1);
					$d6 = mb_substr($template,5,1);
					$d7 = mb_substr($template,6,1);
					if ($d1 == 'n'){
						$array1 = $digits['num'];
					}
					elseif ($d1 == 'c'){
						$array1 = $digits['char'];
					}
					else{
						$array1 = array('');
					}
					
					if ($d2 == 'n'){
						$array2 = $digits['num'];
					}
					elseif ($d2 == 'c'){
						$array2 = $digits['char'];
					}
					else{
						$array2 = array('');
					}
					
					if ($d3 == 'n'){
						$array3 = $digits['num'];
					}
					elseif ($d3 == 'c'){
						$array3 = $digits['char'];
					}
					else{
						$array3 = array('');
					}
					
					if ($d4 == 'n'){
						$array4 = $digits['num'];
					}
					elseif ($d4 == 'c'){
						$array4 = $digits['char'];
					}
					else{
						$array4 = array('');
					}
						
					if ($d5 == 'n'){
						$array5 = $digits['num'];
					}
					elseif ($d5 == 'c'){
						$array5 = $digits['char'];
					}
					else{
						$array5 = array('');
					}
					
					if ($d6 == 'n'){
						$array6 = $digits['num'];
					}
					elseif ($d6 == 'c'){
						$array6 = $digits['char'];
					}
					else{
						$array6 = array('');
					}
						
					if ($d7 == 'n'){
						$array7 = $digits['num'];
					}
					elseif ($d7 == 'c'){
						$array7 = $digits['char'];
					}
					else{
						$array7 = array('');
					}
						
					$val1 = $array1[0];
					$val2 = $array2[1];
					$val3 = $array3[2];
					$val4 = $array4[3];
					$val5 = $array5[4];
					$val6 = $array6[5];
					$val7 = $array7[6];
				
					$result[]= $val1.$val2.$val3.$val4.$val5.$val6.$val7; 
					$i++;
					$e++;
				}
			}
		
		}	            
				//diplay output 
		foreach ($result as $poss){
				echo "<div class='plate'><span class='plateName'></span><span class='plateMain'>".$poss."</span></div>";
		}
				
			
			
		
		
	exit('');
	}
?>