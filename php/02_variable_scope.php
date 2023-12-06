<!-- Variable Scope is defined as the range in the program under which a variable can be accessed. -->

<!-- Local Variable are those variables which are defined within the function.These variables can be accessed within the function only. -->
<?php 
    echo("Local Variable");
    function mytest(){
        $class = "BIT-5th Semester";
        echo("My class is ". $class);
    }
    mytest();
?>

<!-- Global Variable are those variables which are defined outside the function. These variables can be accessed anywhere in the program. -->
<?php 
    echo("Global Variable");
    $number = 1;
    function test2(){
        global $number;
        echo("The number is : $number");
    }
    test2();
?>

<!-- Static Variable are those variables which exists only in local variable scope, but does not lose its value when the program execution leaves this scope. -->
<?php 
    echo("Static Variable");
    function test(){
        echo("</br>");
        static $num1 = 6;
        $num2 = 6;
        $num1++;
        $num2++;
        echo("Static".$num1."</br>");
        echo("Non-Static".$num2."</br>");
    }
    test();
    test();
?>