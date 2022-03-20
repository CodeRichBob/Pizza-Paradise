$(document).ready(function(){
    $('table').hide();
    $('.more-buttons').hide();

    // adding functionality to order button

    $('.order').click(function(){
        var item = 1
        var pizzaSize = $('.size option:selected').val();
        var pizzaToppings = $('.toppings option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();
        var totalPrice = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        console.log(totalPrice);
        var subTotal = 0

        // display table
    $('table').show();
    $('.more-buttons').show();
    $('.order').hide();


    //adding table data
    $('#size').html($('.size option:selected').text());
    $('#crust').html($('.crust option:selected').text());
    $('#toppings').html($('.toppings option:selected').text());
    $('#total').html(totalPrice);
    })

    
})





















