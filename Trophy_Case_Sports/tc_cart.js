"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Mike Norrito 
   Date:   1/6/2020
   
   Filename: tc_cart.js
	

	The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
*/
// The total cost of the customers order 
var orderTotal = 0;
 

// HTML CODE for the content of the shopping cart (table)

var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//Loop through the item array 
 
for (var i = 0; i < item.length; i++) 
{
	cartHTML += "<tr>";
	cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] +"' /></td>";
	cartHTML += "<td>" + itemDescription[i] + "</td>";

	cartHTML += "<td>$" + itemPrice[i] + "</td>";
	cartHTML += "<td>" + itemQty[i] + "</td>";


	//new set of variables that equal the cost muoltiplied 

	var itemCost = itemPrice[i]*itemQty[i];
	cartHTML += "<td>$" + itemCost + "</td>";
	cartHTML += "</tr>"

	// Keep a running total of the customer order cost

	orderTotal += itemCost;
}

//HTml code completing the shopping cart table!! 

cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";

//MAKE THIS RUN LIKE A MAN WHO WANTS A PEICE OF PIZZA IN ITALY

document.getElementById("cart").innerHTML = cartHTML;
