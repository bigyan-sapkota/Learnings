<!-- For accessing individual character within a string we can use square brackets and the index of the desired character. -->
<!-- We can also use substr() function to access character in string in PHP. -->

<?php
    $name = "Bigyan";
    echo ($name[3]);
    echo "</br>";
    echo substr($name, 4,2);
?>