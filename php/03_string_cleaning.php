<!-- Cleaning string often involves removing unwanted characters, trimming white space, changing string case or removing unwanted characters from the string. -->

<!-- REMOVING WHITESPACE : using trim() -->
<?php
    $name = "aBigyan  Sapkota  a";
    echo trim($name);
    echo "</br>";
?>

<!-- REPLACING UNWANTED CHARACTERS: using str_replace() -->
<?php
    $name = "Hbw are ybu?";
    echo str_replace("b","o",$name);
    echo "</br>";
?>

<!-- CONVERTING CASE: strtolower() or strtoupper() -->
<?php
    $name = "BiGyAn";
    echo strtolower($name);
    echo "</br>";
    echo strtoupper($name);
    echo "</br>";
?>

<!-- CLEANING HTML or special characters: strip_tags() -->
<?php
    $name = "<p><b>Hi I am bigyan</b></p>";
    echo "</br>";
    echo "Without striping: $name";
    echo "</br>";
    $stripped = strip_tags($name);
    echo "After striping : $stripped";
?>


























































































