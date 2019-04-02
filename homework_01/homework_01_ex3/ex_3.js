const item = {
  "name": "Avocado",
  "type": "Fruit",
  "catagory": "Food",
  "price": 200
}

function applyCoupon(item){
  return (discount)=>{
    item.price = item.price - discount*item.price/100;
    return item;

  }
}
console.log(applyCoupon(item)(10).price);