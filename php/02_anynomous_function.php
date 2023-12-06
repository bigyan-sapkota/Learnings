<?php
    $var = function($x){
        return pow($x, 3);
    };
    echo ("Cube is:".$var(5));
    echo("</br>");
?>

<?php
    $multiply = function($a, $b){
        $product = $a * $b;
        return $product;
    };
    echo "The product is:".$multiply(2,5);
?>