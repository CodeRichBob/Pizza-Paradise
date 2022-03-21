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
        //console.log(totalPrice);
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

    //creating a function to create pizza

    function pizzaOrder (size,toppings,crust,item,totalPrice){
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.item = item
        this.totalPrice = totalPrice
    }
    $('.addPizza').click(function(){
        var pizzaSize = $('.size option:selected').val();
        var pizzaToppings = $('.toppings option:selected').val();
        var pizzaCrust = $('.crust option:selected').val();
        var totalPrice = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
        subTotal = subTotal + totalPrice
        item = item + 1
        
        var newPizzaOrder = new pizzaOrder(pizzaSize,pizzaCrust,pizzaToppings,item,totalPrice)
        var orderDetails = '<tr><th scope="row">' + newPizzaOrder.item + '</th><td id="size">' + $(".size option:selected").text() +'</td><td id="crust">' + $(".crust option:selected").text() +'</td><td id="toppings">' + $(".toppings option:selected").text() +'</td><td id="total">' + newPizzaOrder.totalPrice + '</td></tr>'
        //appending order details to the table
        console.log(newPizzaOrder.totalPrice);
        $('.displayOrder').append(orderDetails);
    });

    });

    
})





















