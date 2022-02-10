<?php
// Test Logika

// No.1

$arr1 = [10,20,10,10,30,50,10,20];
$arr2 = [6,5,2,3,5,2,2,1,1,5,1,3,3,3,5];
$arr3 = [1,1,3,1,2,1,3,3,3,3];

function hitungPasangan($arr)
{    
    $result = array_count_values($arr);
    $count = 0;
    foreach ($result as $value) {
        $pasang = floor($value/2);
        $count = ( $pasang >= 1) ? $count+$pasang : $count;
    }
    print($count);
}

hitungPasangan($arr1);
hitungPasangan($arr2);
hitungPasangan($arr3);


// No.2

$string1= "Saat meng*ecat tembok, Agung dib_antu oleh Raihan";
$string2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
$string3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda";

function getCountSpecialChar($str)
{
    $pattern =  '/[!*#$%^&*()_+=]/';
    $counter = 0;
    preg_replace($pattern, "", $str, -1, $counter);
    print($counter);
}

getCountSpecialChar($string1);
getCountSpecialChar($string2);
getCountSpecialChar($string3);