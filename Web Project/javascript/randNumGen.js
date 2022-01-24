// Create a random number generator that generates a random number between 0 and 100 when the user clicks the button.
// Test code:
$(document).ready(function () {

    $('#randNumBtn10').click(function () {

        var randomNumber = Math.floor((Math.random() * 10) + 1);
        $('#randomNum10').html(randomNumber);
        // alert(randomNumber);
    });

    $('#randNumBtn100').click(function () {

        var randomNumber = Math.floor((Math.random() * 100) + 1);
        $('#randomNum100').html(randomNumber);
        // alert(randomNumber);
    });

    $('#randNumBtn1000').click(function () {

        var randomNumber = Math.floor((Math.random() * 1000) + 1);
        $('#randomNum1000').html(randomNumber);
        // alert(randomNumber);
    });

});
