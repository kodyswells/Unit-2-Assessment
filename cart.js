///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


const summedPrice = cart.reduce((sum,food) => sum + food.price, 0);

console.log(summedPrice);



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal,couponValue,tax) => {
    const totalWithTax = cartTotal + (cartTotal * tax);
    const finalPrice = totalWithTax - couponValue;
    return finalPrice;
}

console.log(calcFinalPrice(15,2,.06));



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Name- It's essential for personalizing the service, for order identification, and for any communication needed with the customer. Use a string because its a textual data.
    Address - Necessary for delivering orders to the correct location. Use a string because it has multiple string components.
    Email - For sending order confirmations, promotional materials, and communication regarding their orders or account. Use a string because it contains symbols and characters.
    Phone - For contacting the customer in case of issues with the order, for delivery confirmations, or for sending SMS notifications. Number or string, but sting would be better because it contains a dash.
    Order - So the staff and customer know what they are ordering. String because its information in text format.
    Total Price - So the customer knows how much it's going to cost. Number because its a price.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: `Kody Wells`,
    address: `123 N 456 E Orem, Ut`,
    email: `example@email.com`,
    phone: `123 456-7890`,
    order: `pasta`,
    total: 8.99

};
