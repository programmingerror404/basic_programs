<?php
//Given an array of integers, remove duplicate elements from the array without using any inbuilt functions.
function removeDuplicate($array) {
    $duplicate = array();
    $new = array();
    foreach($array as $val){
        if (!isset($duplicate[$val])) {
            $duplicate[$val] = $val;
        }
    }
    foreach($duplicate as $val){
        $new[]=$val;
    }
    return $new;
}
$a = array(1,4,2,1,6,4,9,7,2,9);
print_r(removeDuplicate($a));
?>