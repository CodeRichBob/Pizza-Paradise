$(document).ready(function(){
    $('table').hide();
    $('.more-buttons').hide();
    $('.yesno').hide();

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
        subTotal = subTotal + totalPrice;
        item = item + 1
        
        var newPizzaOrder = new pizzaOrder(pizzaSize,pizzaCrust,pizzaToppings,item,totalPrice)
        var orderDetails = '<tr><th scope="row">' + newPizzaOrder.item + '</th><td id="size">' + $(".size option:selected").text() +'</td><td id="crust">' + $(".crust option:selected").text() +'</td><td id="toppings">' + $(".toppings option:selected").text() +'</td><td id="total">' + newPizzaOrder.totalPrice + '</td></tr>'
        //appending order details to the table
        $('.displayOrder').append(orderDetails);
        console.log(subTotal);
    });
    //checkout
    $('.Checkout').click(function(){
        $('.addPizza').hide();
        $('.Checkout').hide();
        $('.yesno').show();
        subTotal = subTotal + totalPrice
        
    })
    $('.yes').click(function(){
        prompt("Where would you like your order to be delivered?");
        alert("We have received your order and it shall be delivered to you at an additional cost of Sh 100");
        alert("Your bill is Ksh:"+parseInt(subTotal + 100));
    })
    $('.no').click(function(){
        alert("Thank you for enjoying our pizza. Your bill is Ksh:"+subTotal);
    })

    });

    
})





















