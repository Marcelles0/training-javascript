/*for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
  for (
    let j = 0;
    j < Object.keys(shoppingCart[Object.keys(shoppingCart)[i]]).length;
    j++
  ) {
    console.log(${Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]}:
${
  shoppingCart[Object.keys(shoppingCart)[i]][
    Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]
  ]
}
);
  }
}*/

//------------------------------------------------------------------------------------------

/*
let shoppingCart = {};
shoppingCart.product01 = {
product_id: 1525,
name: "Flowers",
price: "$55.3",
quantity: 4,
color: "Yellow",
};
shoppingCart.product02 = {
product_id: 2534,
name: "Bag",
price: "$140.5",
quantity: 8,
};
shoppingCart.product03 = {
product_id: 4387,
name: "Shirt",
price: "$24.0",
quantity: 2,
};
shoppingCart.product04 = {
product_id: 3344,
name: "Shoes",
price: "$67.2",
quantity: 1,
color: "Black",
discount: "15%",
};
let itemText = "";
let arrayItemsInCart = Object.keys(shoppingCart);
// console.log(arrayItemsInCart:);
// console.log(arrayItemsInCart);
let objectPropertiesOfItem;
let arrayPropertiesOfItem;
for (let i = 0; i < arrayItemsInCart.length; i++) {
itemText =  >;
itemText =  >;
// We can access shoppingCart.product01 using the format: shoppingCart["product01"]
objectPropertiesOfItem = shoppingCart[arrayItemsInCart[i]];
// console.log(objectPropertiesOfItem:);
// console.log(objectPropertiesOfItem);
arrayPropertiesOfItem = Object.keys(objectPropertiesOfItem);
// console.log(arrayPropertiesOfItem:);
// console.log(arrayPropertiesOfItem);
for (let j = 0; j < arrayPropertiesOfItem.length; j++) {
    itemText +=  ${arrayPropertiesOfItem[j]}: ${objectPropertiesOfItem[arrayPropertiesOfItem[j]]},;
    }
    console.log(itemText);
    } */