let price = 100 ;
let delivery = 30;
let quantity = prompt("How much pizza do you want to order ?");
let city_user = prompt("Where do you want to deliver pizza ?");
let city = "Chisinau";
let card = prompt("Do you have a vip card");
let vip_card = "Yes";
let order = price * quantity;

if (vip_card == card) {
    document.write(`<p>The price of your order is ${order} lei</p>`);
  } else if (city == city_user) {
    document.write(`<p>The price of your order is ${order} lei</p>`);
  } else if (order >= 500) {
    document.write(`<p>The price of your order is ${order} lei</p>`);;
  } else {
    document.write(`<p>The price of your order is ${order + delivery} lei</p>`);
  }