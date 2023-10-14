<?php 
    $a = 4;
    $b = 5;
    echo "Sum calculator<br/>";
    echo "Sum = $a + $b<br/>";
    echo ".....................................<br/>";
    // LOGICAL OPERATOR
    $cl = 12;
    $subject = "Computer";

    if($cl == 12 AND $subject == "Computer"){
        echo "Welocme to Class 12 Computer class.<br/>";
    }
    

    if($cl == 13 OR $subject == "Computer"){
        echo "Welcome to Class 12 or computer class.<br/>";
    }

    echo"..............................................<br>";

    // Arrays
    $arr1 = array(1,2,3);
    $arr2 = array(25, 40, 55);

    print_r($arr1);

    if($arr1 != $arr2){
        echo "<br/><b>Both array are not same</b>";
    }
    ?>
