$(document).ready(function(){
    $('table').hide();
    $('.more-buttons').hide();

    // adding functionality to order button

    $('.order').click(function(){
        var pizzaSize = $('.size option:selected').val();
        var pizzaToppings = $('.toppings option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();
        var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        console.log(total);
    })
})





















