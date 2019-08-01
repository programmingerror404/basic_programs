<?php
//Given a string, find the character that is repeated in the string and is present first.
function firstRepeating($str){
    $arr_str= str_split($str);
    $frequency=array();
    foreach($arr_str as $val){
        if(isset($frequency[$val])){
            if($frequency[$val]>=1){
                $frequency[$val]++;
            }
        } else{
            $frequency[$val]=1;
        }
    }
    foreach($frequency as $keys=>$vals){
        if($vals>1){
            return $keys;
        }
    }
}
$a="hellofellowcitizens";
echo firstRepeating($a) == 1 ?  "No Repeating Characters" : firstRepeating($a) ;
$a="deerdance";
echo firstRepeating($a) == 1 ?  "No Repeating Characters" : firstRepeating($a) ;
?>