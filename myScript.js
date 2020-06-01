$(document).ready(function(){

$(".mojbuton").first().click(function(){
        $(".druginiz").slideDown(600);
        $(".crtapoveznica").slideDown(600);
        $(".podlogaZaListuNarudzbi").css("display", "none");
        $(".izracun").css("display", "initial");

});

$("#narudzba").hover(function(){

    $(".vanjskilayer").slideDown(600);
    $(".crtapoveznica2").slideDown(600);
    $(".crtapoveznica3").slideDown(600);
	$(".vanjskilayer2").slideUp(500);
	$(".vanjskilayer3").slideUp(500);
})

$("#narudzbakave").hover(function(){


	$(".vanjskilayer").slideUp(500);
    $(".crtapoveznica2").slideUp(500);
    $(".crtapoveznica3").slideUp(500);
	$(".vanjskilayer2").slideDown(600);
	$(".vanjskilayer3").slideUp(500);
	$(".vanjskilayer4").slideUp(500);

})

$("#bezalkoholnapica").hover(function(){


	$(".vanjskilayer").slideUp(500);
    $(".crtapoveznica2").slideUp(500);
    $(".crtapoveznica3").slideUp(500);
	$(".vanjskilayer2").slideUp(500);
	$(".vanjskilayer3").slideDown(600);
	$(".vanjskilayer5").slideUp(500);
	$(".vanjskilayer4").slideUp(500);

})

$("#alkoholnapica").hover(function(){


	$(".vanjskilayer").slideUp(500);
    $(".crtapoveznica2").slideUp(500);
    $(".crtapoveznica3").slideUp(500);
	$(".vanjskilayer2").slideUp(500);
	$(".vanjskilayer3").slideUp(500);
	$(".vanjskilayer5").slideUp(500);
	$(".vanjskilayer4").slideDown(600);

})

$("#snacks").hover(function(){


	$(".vanjskilayer").slideUp(500);
    $(".crtapoveznica2").slideUp(500);
    $(".crtapoveznica3").slideUp(500);
	$(".vanjskilayer2").slideUp(500);
	$(".vanjskilayer3").slideUp(500);
	$(".vanjskilayer4").slideUp(500);
	$(".vanjskilayer5").slideDown(600);
});


var products =(function(){

	var beer ={
			"beer 0,3l":{
        name: "beer 0,3l",
				price: 15,
				quantity: 75
				},

			"beer 0,5l":{
        name: "beer 0,5l",
				price: 18,
				quantity: 90

			},

      beerprice:function(type){

        return beer[type].price;

      },

      beername:function(type){

        return beer[type].name;

      }
		}

  var nonAlcoholicDrinks={

      "Tea":{
        name: "Tea",
        price: 7,
        quantity: 170
      },

      cola:{
        name: "Cola",
        price: 12,
        quantity: 200
      },

      "Orange Juice":{
        name: "Orange Juice",
        price: 14,
        quantity: 120
      },

      "Hot Chocolate":{
        name: "Hot Chocolate",
        price: 10,
        quantity: 70
      },

      "Mineral Water":{
        name: "Mineral Water",
        price: 5,
        quantity: 90
      },

      nonalcoholicdrinkprice:function(type){

				return nonAlcoholicDrinks[type].price;

			},

     		 nonalcoholicdrinkname:function(type){

				return nonAlcoholicDrinks[type].name;

			}

  }

  var alcoholicDrinks={

      "Wine 0,3l":{
        name: "Wine 0,3l",
        price: 16,
        quantity: 50
      },

      "Wine 0,5l":{
        name: "Wine 0,5l",
        price: 20,
        quantity: 50
      },

      "Bottled Wine":{
        name: "Bottled Wine",
        price: 60,
        quantity: 30
      },

      "Vodka":{
        name: "Vodka",
        price: 15,
        quantity: 30
      },

      "Whiskey":{
        name: "Whiskey",
        price: 15,
        quantity: 25
      },

      alcoholicdrinkprice:function(type){

				return alcoholicDrinks[type].price;

			},

     	alcoholicdrinkname:function(type){

				return alcoholicDrinks[type].name;

			}

  }

	var coffee ={
			smallCoffee:{
        name: "Small coffee",
				price: 5,
				quantity: 200
			},

			bigCoffee:{
        name: "Big coffee",
				price: 8,
				quantity: 200
			},

			whiteCoffee:{
        name: "White Coffee",
				price: 9,
				quantity:100
			},

			macchiato:{
        name: "macchiato",
				price:8,
				quantity:120,
				macchiatoprice: function(){

					console.log(coffee.macchiato.price);
			}
		},
			capuccino:{
        name: "capuccino",
				price:8,
				quantity:120
			},

			coffeeprice:function(type){

				return coffee[type].price;

			},

     		 coffeename:function(type){

				return coffee[type].name;

			}





			}

      var snacks ={
    			"Sandwich":{
            name: "Sandwich",
    				price: 15,
    				quantity: 15
    			},

    			"Hot-dog":{
            name: "Hot-dog",
    				price: 13,
    				quantity: 20
    			},

    			"Toast":{
            name: "Toast",
    				price: 11,
    				quantity:15
    			},

          snacksprice:function(type){

    				return snacks[type].price;

    			},

         		 snacksname:function(type){

    				return snacks[type].name;

    			}

}


	var Product = function(name, price){

		this.name=name;
		this.price=price;
    this.quantity=1;



	}




		Product.prototype.setProduct = function(product){

				currentOrder.setnewitemnameintothelist(product);

	}



    var currentOrder={

	  name:[],


      getcurrentorderlist: function(arrayid){

        return currentOrder.name[arrayid];
      },

      getcurrentorderprice: function(){
		       var sum = 0;
           console.log("unutra");
           for (var i=0; i<currentOrder.name.length; i++){
            sum+=  parseInt(currentOrder.name[i].price) * parseInt(currentOrder.name[i].quantity);


          }
          return sum;
  		   /* currentOrder.name.forEach(myFunction(item));
		      return sum;

		    function myFunction(item) {

		        sum += parseInt(item.price) * parseInt(item.quantity);

          }*/
              },


      getcurrentorderpricetotal: function(){
          var a= currentOrder.getcurrentorderprice();

          return a + (a * 25/100);

      },


      setnewitemnameintothelist:function(param){

		        currentOrder.name.push(param);

      },

      setnewitempriceintothelist:function(param){
            currentOrder.price.push(param);
      },

      deletecurrentorder: function(){

        currentOrder.name.length=0;
        sum=0;
      },

      getcompleteorder:function(){
          console.log("dvojka");
        return currentOrder.name;
      },

      removeoneitemquantity: function(param){
        for (var i=0; i<currentOrder.name.length; i++){
              console.log(param);
              console.log(currentOrder.name);
              if (currentOrder.name[i].name ==param) {

                      if (currentOrder.name[i].quantity ==0){

                            return false;}

                  else {

                    currentOrder.name[i].quantity-=1;
                    return true;
                  }

                }






                }

      },

      checkifitemexists: function(productName){
        console.log("u funkciji");

        if (currentOrder.name.length<1){

            return true;
        }

        else{

        for (var i=0; i<currentOrder.name.length; i++){

              if (currentOrder.name[i].name ==productName){
                  currentOrder.name[i].quantity+=1;

                  return false;}
            }
}




              return true;


    }






}


		return {

			coffeePrice:function(type){


				return coffee.coffeeprice(type);

			},


      coffeeName:function(type){


      				return coffee.coffeename(type);

      			},

      beerPrice:function(type){


      				return beer.beerprice(type);

      			},


      beerName:function(type){


            				return beer.beername(type);

            			},

      nonAlcoholicDrinksPrice:function(type){


        return nonAlcoholicDrinks.nonalcoholicdrinkprice(type);

                	},


      nonAlcoholicDrinksName:function(type){


        	return nonAlcoholicDrinks.nonalcoholicdrinkname(type);

                        			},

      alcoholicDrinksPrice:function(type){


      return alcoholicDrinks.alcoholicdrinkprice(type);

                                },


    alcoholicDrinksName:function(type){


      return alcoholicDrinks.alcoholicdrinkname(type);

                                  },
        snacksPrice:function(type){

              return snacks.snacksprice(type);

                    			},


        snacksName:function(type){


              return snacks.snacksname(type);

                      			},




      currentOrderList: function(arrayid){
		      console.log("da vidim da li sam tu");
          return currentOrder.getcurrentorderlist(arrayid);
      },

      currentOrderPrice: function(){

        return currentOrder.getcurrentorderprice();
      },

      currentOrderPriceTotal: function(){

        return currentOrder.getcurrentorderpricetotal();
      },

      setNewItemNameIntoTheList: function(item){
            currentOrder.setnewitemnameintothelist(item);
            console.log(item);

      },

      setNewItemPriceIntoTheList: function(item){
            currentOrder.setnewitempriceintothelist(item);
            console.log(item);

	  },

    deleteCurrentOrder: function(){

          currentOrder.deletecurrentorder();

    },

    checkIfItemExists: function(productName){

     return currentOrder.checkifitemexists(productName);
   },

   getCompleteOrder: function(){
     console.log("jedinica");
     return currentOrder.getcompleteorder();
   },

   removeOneItemQuantity: function(productName){

     return currentOrder.removeoneitemquantity(productName);
   },

    createProduct: function(productName, productPrice) {

                    var item1= new Product (productName, productPrice);
                      item1.setProduct(item1);







              }
		};


})();

var UIcontroller=(function(){

  return {




         addItem: function(obj){

            var html = '<tr><td class="itemName">%itemName%</td><td class="itemQuantity"><i class="material-icons">add</i>%itemQuantity%<i class="material-icons">remove</i></td><td>%itemPrice%</td></tr>';

            var newHtml = html.replace('%itemName%', obj['name']);
            newHtml= newHtml.replace ('%itemQuantity%', obj['quantity']);
            newHtml= newHtml.replace ('%itemPrice%', obj['price']);
            $("#prviTBody").append(newHtml);


        },

        addOrderToOrderList: function(obj){




           var html = `<p>
                      <a id="collapseA" class="btn btn-primary" data-toggle="collapse" href="#collapseExample${obj['orderId']}" role="button" aria-expanded="true" aria-controls="collapseExample${obj['orderId']}">
                        <table class="table" id="tableA"><tbody><tr class="redakTable"><td class="OrderId">%OrderId%.</td><td class="tableNumber">%tableName%</td>
                        <td class="orderDate">%orderDate%</td><td data-toggle="modal" data-target="#exampleModal1" class="orderStatus">%orderStatus%</td></tr></tbody></table>  </a>
                          </p>`;




              var newHtml = html.replace('%tableName%', obj['table']);
                  newHtml= newHtml.replace ('%OrderId%', obj['orderId']);
                  newHtml= newHtml.replace ('%orderDate%', obj['date']);
                  newHtml= newHtml.replace ('%orderStatus%', obj['status']);







                var additionalHtml =`<div class="collapse" data-toggle="true" id="collapseExample${obj['orderId']}"><div class="card card-body" >  <table class="tableSListom" ><thead><tr><th>Name</th><th>Quantity</th><th>Price</th></tr></thead>
                 <tbody id="orderContents">`;

                 var items=obj['content'];

                 items.forEach(function(item){

                    additionalHtml+= `<tr><td class="itemName">${item.name}</td><td class="itemQuantity">${item.quantity}</td><td>${item.price} kn</td></tr>`;

                 });

                 var finalHTML= newHtml + additionalHtml + `<tr><td class="crtaIznad"><i>Iznos bez PDV</i></td><td class="crtaIznad"></td><td class="crtaIznad"><i>${obj['iznosBezPDV']} kn</i></td>
                 </tr><tr><td><b>TOTAL</b></td><td></td><td><b>${obj['konacanIznos']} kn</b></td></tr></tbody></table></div></div>`;



                  $(".podlogaZaListuNarudzbi").append(finalHTML);




       },



        addTotatWithoutPdv: function(iznos){

            $(".iznosprijeporeza").text(iznos + ' kn');

        },

        addTotal: function(iznos){

          $(".totaliznos").text(iznos + ' kn');
        },

        deleteAllitems:function(){

          $("#prviTBody").empty();
        },

        updateItemQuantity: function(productName){

          $(".itemName").each(function(index){
                console.log("na kraju sam");

                  if ($(this).text() == productName){
                  //  var a= parseInt( $(this).siblings(".itemQuantity").text()) + 1;
                   var a=  $(this).siblings(".itemQuantity").text();

                   if (a.startsWith("add")){
                  // console.log(a);
                    var samiBroj = parseInt( a.substring(3,4)) +1;


                      $(this).siblings(".itemQuantity").html('<i class="material-icons">add</i>'+ samiBroj + '<i class="material-icons">remove</i>');}

                      else {

                        var b = parseInt(a) + 1;
                        $(this).siblings(".itemQuantity").html('<i class="material-icons">add</i>'+ b + '<i class="material-icons">remove</i>');
                      }

                  }

          });




        },


        updateItemQuantityMinus: function(productName){

          $(".itemName").each(function(index){
                console.log("na kraju sam");

                  if ($(this).text() == productName){
                  //  var a= parseInt( $(this).siblings(".itemQuantity").text()) + 1;
                   var a=  $(this).siblings(".itemQuantity").text();

                   if (a.startsWith("add")){
                  // console.log(a);
                    var samiBroj = parseInt( a.substring(3,4)) -1;


                      $(this).siblings(".itemQuantity").html('<i class="material-icons">add</i>'+ samiBroj + '<i class="material-icons">remove</i>');}

                      else {

                        var b = parseInt(a) - 1;
                        $(this).siblings(".itemQuantity").html('<i class="material-icons">add</i>'+ b + '<i class="material-icons">remove</i>');
                      }

                  }

          });
        },


        setTime: function(){

              setInterval(setDate, 1000);




              function setDate (){
              var today = new Date();
              var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              var dateTime = date+' '+time;
            $(".time").text(dateTime);
          };

        }












};


})();

var mainappcontroller=(function(products, UIcontroller, orders1){
	var arrayid=-1;
  var c;
  var completeOrderId=0;
  var orderId;
  var tajStatusButon;
    var addItemToTheBill = function(){

      UIcontroller.addItem(products.currentOrderList(arrayid));


    }

    var addTotatWithoutPdv= function(){
      UIcontroller.addTotatWithoutPdv(products.currentOrderPrice());
    }

    var addTotal = function(){
      UIcontroller.addTotal(products.currentOrderPriceTotal());
    }

    var deleteOrder= function(){

          UIcontroller.deleteAllitems();
          products.deleteCurrentOrder();
          addTotatWithoutPdv();
          addTotal();

          arrayid=-1;
    }

    var updateItemQuantity = function(productName){

      UIcontroller.updateItemQuantity(productName);


    }

    var updateItemQuantityMinus = function(productName){

      UIcontroller.updateItemQuantityMinus(productName);
    }

      UIcontroller.setTime();

    var addOrderToListOfOrders = function(obj){

      UIcontroller.addOrderToOrderList(obj);
    }





		$(".kava").click(clickOnKava);
    $(".pivo").click(clickOnPivo);
    $(".bezalkoholno, .bezalkoholno2, .bezalkoholno3, .bezalkoholno4, .bezalkoholno5").click(clickOnBezalkoholno);
    $(".bezalkoholno6, .bezalkoholno7, .bezalkoholno8, .bezalkoholno9").click(clickOnAlkoholno);
    $(".sandwich, .hotdog, .hotdog1").click(clickOnSnacks);

    $(".delete").click(deleteOrder);


    $("tbody").on('click', '.material-icons:nth-child(1)', clickOnPlusInIzracun);
    $("tbody").on('click', '.material-icons:nth-child(2)', clickOnMinusIzracun);


    $(".slikaStola").click(function(){

      $(".slikaStola").css("opacity", 0.4);

         $(this).css("opacity", 1.0);
         c=$(this).attr('title');
         console.log(c);

      });

      $("#confirmtablebtn").click(function(){
        $("#tblbutton").text(c);
      });


      $(".confirm").click(clickOnConfirmOrder);

      $(".podlogaZaListuNarudzbi").on("click", ".orderStatus", function(){
        tajStatusButon = this;
      var orderIdStockom = $(this).siblings(".OrderId").text();
       orderId = orderIdStockom.substring(parseInt(orderIdStockom.length) - 2, 1);


    });

    $("#finalOrderComplete").click(function(){
      orders1.updateOrderStatus(orderId);
      $(tajStatusButon).css("background-color", "green");
      $(tajStatusButon).text("Completed!");
      $(tajStatusButon).removeAttr("data-toggle");
      $(tajStatusButon).removeAttr("data-target");
      submitOrderToMongoDb();


    });


      $("#listaNarudzbi").click(function(){
          $(".izracun").css("display", "none");
          $(".podlogaZaListuNarudzbi").css("display", "initial");
          $(".druginiz").slideUp(200);
          $(".crtapoveznica").slideUp(200);
          $(".vanjskilayer").slideUp(200);
            $(".crtapoveznica2").slideUp(200);
            $(".crtapoveznica3").slideUp(200);
          $(".vanjskilayer2").slideUp(200);
          $(".vanjskilayer3").slideUp(200);
          $(".vanjskilayer4").slideUp(200);
          $(".vanjskilayer5").slideUp(200);

    }  );







      function submitOrderToMongoDb(){

        $.ajax({
          url: '../index.js',
          type: "post",
          contentType: 'application/json',
          data: JSON.stringify ({
          
          "id": 1,
          "name" : "Njonjo"
          
          
          }),
          dataType: 'json',
          success: function(){
            console.log("Data sent!");}
          
          
          });

      };


      function clickOnMinusIzracun(){

        var imeproizvoda = $(this).closest('tr', '.itemName').text();
        console.log("ime proizvoda: " + imeproizvoda);
        var pravoIme = imeproizvoda.split("add");
        var productName = pravoIme[0];


        if (products.removeOneItemQuantity(productName) ==true){
          updateItemQuantityMinus(productName);
          addTotatWithoutPdv();
          addTotal();
        }

          else {

            addTotatWithoutPdv();
            addTotal();

          }

        };





      function clickOnPlusInIzracun(){

        var imeproizvoda = $(this).closest('tr', '.itemName').text();
        var pravoIme = imeproizvoda.split("add");
        var productName = pravoIme[0];


        products.checkIfItemExists(productName);
        updateItemQuantity(productName);
        addTotatWithoutPdv();
        addTotal();

      };

      function clickOnKava(){

        var string=$(this).attr('name');
        //console.log(string);
        //console.log(products.coffeePrice(string))
        //console.log(products.coffeeName(string));
        var productPrice = products.coffeePrice(string);
        var productName = products.coffeeName(string);

        console.log(productPrice);
        console.log(productName);

        if (products.checkIfItemExists(productName)==true){
            products.createProduct(productName, productPrice);
          arrayid++;
          console.log("arrayid je " + arrayid);

              addItemToTheBill();
              addTotatWithoutPdv();
              addTotal();

        }

        else{

            updateItemQuantity(productName);
            addTotatWithoutPdv();
            addTotal();


        }



      };

      function clickOnConfirmOrder(){

        if (c==undefined){

          console.log(products.currentOrderPriceTotal);
          alert ("You have to pick a table");}

        else if(products.currentOrderPriceTotal() == 0){

          alert ("You cannot confirm order with total zero");

        }

        else {
          var order =  products.getCompleteOrder();
          var iznosbezPDV = products.currentOrderPrice();
          var konacanIznos = products.currentOrderPriceTotal();
          orders1.inputNewOrder(order, c, iznosbezPDV, konacanIznos);
         var i = orders1.getOrderList(completeOrderId);
          addOrderToListOfOrders(i);
          deleteOrder();
          $(".slikaStola").css("opacity", 0.4);
          $("#tblbutton").text("Table");
          completeOrderId++;
          c=undefined;

        }
      }

      function clickOnPivo(){

        var string=$(this).attr('name');
        console.log(string);
        //console.log(string);
        //console.log(products.coffeePrice(string))
        //console.log(products.coffeeName(string));
        var productPrice = products.beerPrice(string);
        var productName = products.beerName(string);


        console.log(productPrice);
        console.log(productName);

        if (products.checkIfItemExists(productName)==true){
            products.createProduct(productName, productPrice);
          arrayid++;
          console.log("arrayid je " + arrayid);

              addItemToTheBill();
              addTotatWithoutPdv();
              addTotal();

        }

        else{

            updateItemQuantity(productName);
            addTotatWithoutPdv();
            addTotal();


        }



      };

      function clickOnBezalkoholno(){

        var string=$(this).attr('name');
        console.log(string);
        //console.log(string);
        //console.log(products.coffeePrice(string))
        //console.log(products.coffeeName(string));
        var productPrice = products.nonAlcoholicDrinksPrice(string);
        var productName = products.nonAlcoholicDrinksName(string);


        console.log(productPrice);
        console.log(productName);

        if (products.checkIfItemExists(productName)==true){
            products.createProduct(productName, productPrice);
          arrayid++;
          console.log("arrayid je " + arrayid);

              addItemToTheBill();
              addTotatWithoutPdv();
              addTotal();

        }

        else{

            updateItemQuantity(productName);
            addTotatWithoutPdv();
            addTotal();


        }



      };

      function clickOnAlkoholno(){

        var string=$(this).attr('name');
        console.log(string);
        //console.log(string);
        //console.log(products.coffeePrice(string))
        //console.log(products.coffeeName(string));
        var productPrice = products.alcoholicDrinksPrice(string);
        var productName = products.alcoholicDrinksName(string);


        console.log(productPrice);
        console.log(productName);

        if (products.checkIfItemExists(productName)==true){
            products.createProduct(productName, productPrice);
          arrayid++;
          console.log("arrayid je " + arrayid);

              addItemToTheBill();
              addTotatWithoutPdv();
              addTotal();

        }

        else{

            updateItemQuantity(productName);
            addTotatWithoutPdv();
            addTotal();


        }



      };


      function clickOnSnacks(){

        var string=$(this).attr('name');
        console.log(string);
        //console.log(string);
        //console.log(products.coffeePrice(string))
        //console.log(products.coffeeName(string));
        var productPrice = products.snacksPrice(string);
        var productName = products.snacksName(string);


        console.log(productPrice);
        console.log(productName);

        if (products.checkIfItemExists(productName)==true){
            products.createProduct(productName, productPrice);
          arrayid++;
          console.log("arrayid je " + arrayid);

              addItemToTheBill();
              addTotatWithoutPdv();
              addTotal();

        }

        else{

            updateItemQuantity(productName);
            addTotatWithoutPdv();
            addTotal();


        }



      };





})(products, UIcontroller, orders1);





});


var orders1 = (function(){

let orderId=1;

        var currentOrders={

            orderList : [],

            inputneworder : function(order){

              currentOrders.orderList.push(order);


            },

            getorderlist: function(id){
              console.log(currentOrders.orderList);
              return currentOrders.orderList[id];
            },

            updateorderstatus:function(id){

                currentOrders.orderList.forEach(function(item){
                          if (item.orderId == id){

                            item.status = "completed";
                          }

                });

            }




        }



function date (){

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        return dateTime;

}


  var Order = function(content, table, iznosBezPDV, konacanIznos ){


		this.status="active";
    this.content=content;
    this.table=table;
    this.date = date();
    this.orderId=orderId;
    this.iznosBezPDV = iznosBezPDV;
    this.konacanIznos = konacanIznos;

  };


    return {

      inputNewOrder:function(order, table, iznosBezPDV, konacanIznos){

        var order1 = new Order(order, table, iznosBezPDV, konacanIznos);
        currentOrders.inputneworder(order1);
        orderId+=1;
      },

      getOrderList:function(id){

        return currentOrders.getorderlist(id);
      },

      updateOrderStatus: function(id){

        currentOrders.updateorderstatus(id);
      }


    };











})();
