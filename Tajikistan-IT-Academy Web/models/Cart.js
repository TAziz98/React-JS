module.exports = function Cart(oldCart){
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;
  
  this.add = function(item, id){
 var storedItem = this.items[id];
 if(!storedItem){
     storedItem = this.items[id] = {item:item, qty:0, price:0};
 }
 var price = storedItem.item.moneyDescription;
 if(price==='FREE '){
     price = 0;
 }
 storedItem.qty++;
 storedItem.price =Number(price)*storedItem.qty;
 this.totalQty++;
 this.totalPrice +=Number(price);
  }


this.reduce = function(id){ 
    var price = this.items[id].item.moneyDescription;
    if(price==='FREE '){
        price = 0;
    }
    this.items[id].qty--;
    this.items[id].price -= Number(price);
    this.totalQty--;
    this.totalPrice -=Number(price);

    if(this.items[id].qty <=0){
        delete this.items[id];
    }
     }
 
     this.removeAll= function(id){ 
        this.totalQty-=this.items[id].qty;
        this.totalPrice -= this.items[id].price ;
        delete this.items[id];
         }
this.generateArray = function () {
    var arr = [];
    for (var id in this.items) {
        arr.push(this.items[id]);
    }
    return arr;
};
}

