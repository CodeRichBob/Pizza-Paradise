$(document).ready(function(){
    $('table').hide();
    $('.more-buttons').hide();

    // adding functionality to order button

    $('.order').click(function(){
        var # = 1
        var pizzaSize = $('.size option:selected').val();
        var pizzaToppings = $('.toppings option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();
        var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        console.log(total);
        var subTotal = 0

        // display table
    $('table').show();
    $('.more-buttons').show();
    $('.order').hide();
    })

    //adding table data
    $('#size').html($('.size option:selected').text());
    $('#crust').html($('.crust option:selected').text());
    $('#toppings').html($('.toppings option:selected').text());
    $('#total').html(total);
})





















