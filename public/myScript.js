$(document).ready(function(){

  $.ajaxSetup({ cache: false });

  $(window).on("load", function(){

   
    $('#loginModal').modal("show");
  
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

        addOrderToOrderList: function(piece){

            piece.forEach(function(obj){

             

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
                  
                  if (obj['status']==="Completed"){
                        
                    $(".orderStatus").css("background-color", "green");
                   
                   $("td").removeAttr("data-toggle");
                   $("td").removeAttr("data-target");
          };

            });

       },

       addDataToUserList: function (data){
        console.log(data);  
        data.forEach(function(row){

          for (var i= 0; i<15; i++){
            
           $("#lastLoginData").append('<a class="dropdown-item popisVremena" href="#">' + row.loginTime[i] + '</a>');
           
          }
          });



       },


       addUserOrderIdToList: function(data){
          console.log(data);
        data.forEach(function(row){

         
            
           $("#userOrdersData").append('<a class="dropdown-item popisVremena" href="#">' + row.orderId + '</a>');
           
          
          });


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
  $("#loginConfirm").click(loginConfirmModal);
  function loginConfirmModal(){

        
    username1 = $("#username").val();
  password = $("#password").val();
    $.ajax({
     
      url: '../api/users',
      type: "post",
      contentType: 'application/json',
      data: JSON.stringify({
        username : username1,
        password: password
      }),
      dataType: 'json',
      success: function(data){
        if (data==false){
            $("div.modal-body.loginBody").append('<div style="color:red;">Incorrect username or password</div>');

        }
        else{
          $('#loginModal').modal("hide");
          
          $("#loggedInAs").html('logged in as <h6 style="color:white; font-size: 14px; padding-left: 10px;">  @' + username1 + '</h6><div><button type="button" id="logOutButton" class="btn btn-warning btn-sm">Log out</button></div>');
        }
      }
      
      
      });

      };


  
  
  
      var arrayid=-1;
      var c;
      var completeOrderId=0;
      var orderId;
      var tajStatusButon;
      let username1;
      var password;
      var jebomajku="dajan";
  
  

  $(".mojbuton").first().click(function(){
    $(".druginiz").slideDown(600);
    $(".crtapoveznica").slideDown(600);
    $(".podlogaZaListuNarudzbi").css("display", "none");
    $(".izracun").css("display", "initial");
    $("#listaNarudzbi").css("opacity", 0.4);
    $(".ostali").css("opacity", 0.4);
    $(this).css("opacity", 1.0);
    $(".podlogaZaPodatkeOUseru").css("display", "none");

});

$("button#listaNarudzbi").click(function(){
  $(this).css("opacity", 1.0);
  $(".izracun").css("display", "none");
  $(".podlogaZaListuNarudzbi").css("display", "initial");
  $(".podlogaZaListuNarudzbi").empty();
  $(".druginiz").slideUp(200);
  $(".crtapoveznica").slideUp(200);
  $(".vanjskilayer").slideUp(200);
    $(".crtapoveznica2").slideUp(200);
    $(".crtapoveznica3").slideUp(200);
  $(".vanjskilayer2").slideUp(200);
  $(".vanjskilayer3").slideUp(200);
  $(".vanjskilayer4").slideUp(200);
  $(".vanjskilayer5").slideUp(200);
  $(".ostali").css("opacity", 0.4);
  $("#prviButon").css("opacity", 0.4);
  getOrdersFromMongoDb();
  $(".podlogaZaPodatkeOUseru").css("display", "none");


}  );

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



  getLatestOrderId();

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

    var addDataToUserList = function (data){

      UIcontroller.addDataToUserList(data);
    }

    var addUserOrderId = function(data){

      UIcontroller.addUserOrderIdToList(data);
    }




		$(".kava").click(clickOnKava);
    $(".pivo").click(clickOnPivo);
    $(".bezalkoholno, .bezalkoholno2, .bezalkoholno3, .bezalkoholno4, .bezalkoholno5").click(clickOnBezalkoholno);
    $(".bezalkoholno6, .bezalkoholno7, .bezalkoholno8, .bezalkoholno9").click(clickOnAlkoholno);
    $(".sandwich, .hotdog, .hotdog1").click(clickOnSnacks);

  


    $(".delete").click(deleteOrder);


    $("tbody").on('click', '.material-icons:nth-child(1)', clickOnPlusInIzracun);
    $("tbody").on('click', '.material-icons:nth-child(2)', clickOnMinusIzracun);

    $(".izbornik").on("click", "#logOutButton", function(){

      window.location.href=window.location.href;
      onLogOut();
    });

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


    //$(".podlogaZaPodatkeOUseru").on("click", )

    $("#usersList").click(function(){

      
      $(".podlogaZaListuNarudzbi").css("display", "none");
      $(".podlogaZaPodatkeOUseru").css("display", "inherit");
      
      $("#listaNarudzbi").css("opacity", 0.4);
      $(".izracun").css("display", "none");
      $(".podlogaZaListuNarudzbi").css("display", "none");
      $(".podlogaZaListuNarudzbi").empty();
      $(".druginiz").slideUp(200);
        $(".crtapoveznica").slideUp(200);
      $(".vanjskilayer").slideUp(200);
      $(".crtapoveznica2").slideUp(200);
      $(".crtapoveznica3").slideUp(200);
      $(".vanjskilayer2").slideUp(200);
       $(".vanjskilayer3").slideUp(200);
       $(".vanjskilayer4").slideUp(200);
        $(".vanjskilayer5").slideUp(200);
      $(".ostali").css("opacity", 0.4);
      $(this).css("opacity", 1.0);
       $("#prviButon").css("opacity", 0.4);

      $(".podlogaZaPodatkeOUseru").load("userTable.html");
      
     
     
    
      //
    // gettingUserLoginData()
    });

    $('body').on('click', '#dropdownMenuButton1', function(){

      gettingUserLoginData();
      getUserOrderId();
    });


    


    $("#finalOrderComplete").click(function(){
      orders1.updateOrderStatus(orderId);
      $(tajStatusButon).css("background-color", "green");
      $(tajStatusButon).text("Completed");
      $(tajStatusButon).removeAttr("data-toggle");
      $(tajStatusButon).removeAttr("data-target");
      
      var metodaPlacanja = $("input[name=inlineRadioOptions]:checked").val();
      updateOrderStatusToMongoDb(orderId, metodaPlacanja);


    });

    function updateOrderStatusToMongoDb(orderIdnovi, metodaPlacanja){
     
      $.ajax({

        url: '../api/looney/updateorderstatus',
        type: "post",
        contentType: 'application/json',
        data: JSON.stringify({
          orderId : orderIdnovi,
          paymentMethod: metodaPlacanja
        }),
        dataType: 'json',
        success: function(){
          console.log("Data sent!");}
        
        
        });



    }

    
       

     function onLogOut (){

      $.ajax({
        
        url: '../api/users/logout',
        type: "post",
        contentType: 'application/json',
        data: JSON.stringify({
          
          username : username1
         

        }),

        dataType: 'json',
        success: function(){
        console.log("Successfully logged out!");
        }
        
         });


    };


     


    function gettingUserLoginData(){

      $.ajax({
        
        url: '../api/looney/userdata',
        type: "post",
        contentType: 'application/json',
        data: JSON.stringify({
          
          username : username1
         

        }),

        dataType: 'json',
        success: function(data){
        

            addDataToUserList(data);
            //getUserOrderId();
        }
        
         });


    };


    function getUserOrderId(){
        
      console.log(jebomajku);
      $.ajax({
        asyns: false,
        url: '../api/orders/username',
        type: "post",
        contentType: 'application/json',
        data: JSON.stringify({
          
          username : username1
         

        }),

        dataType: 'json',
        success: function(data){
        

            addUserOrderId(data);
        }
        
         });


    };


    
      
    function submitOrderToMongoDb(obj){

      $.ajax({
        url: '../api/looney',
        type: "post",
        contentType: 'application/json',
        data: JSON.stringify (obj),
        dataType: 'json',
        success: function(){
          console.log("Data sent!");}
        
        
        });

    };


    function getOrdersFromMongoDb(){

      $.ajax({
        url: '../api/looney',
        type: "get",
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){

          
          console.log(data);
         addOrderToListOfOrders(data);
        
        }
        
        
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


      function getLatestOrderId(){

          $.ajax({
            url: '../api/looney/orderid',
            type: "get",
            contentType: 'application/json',
            dataType: 'text',
            success: function(data){
        
              console.log(data );
              orders1.setOrderId(data);
             
            
            }
            
            
            });
        }


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
          orders1.inputNewOrder(order, c, iznosbezPDV, konacanIznos, username);
         var i = orders1.getOrderList(completeOrderId);
         submitOrderToMongoDb(i);
          //addOrderToListOfOrders(i);
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








var orders1 = (function(){

let orderId;


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

function setorderid(id){

orderId = parseInt(id) + 1;
};



function date (){

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        return dateTime;

}


  var Order = function(content, table, iznosBezPDV, konacanIznos, username ){


		this.status="active";
    this.content=content;
    this.table=table;
    this.date = date();
    this.orderId=orderId;
    this.iznosBezPDV = iznosBezPDV;
    this.konacanIznos = konacanIznos;
    this.username = username;

  };


    return {

      inputNewOrder:function(order, table, iznosBezPDV, konacanIznos, user){

        var order1 = new Order(order, table, iznosBezPDV, konacanIznos, user);
        currentOrders.inputneworder(order1);
        orderId+=1;
      },

      getOrderList:function(id){

        return currentOrders.getorderlist(id);
      },

      updateOrderStatus: function(id){

        currentOrders.updateorderstatus(id);
      },

      setOrderId:function(id){

        setorderid(id);
      }


    };











})();

});