        $("#cancel_del").hide();
        $(".success").hide();
        $("#delete_product").hide();
        $(".error").hide();
        $("#update_product").hide();
const arrProduct = [];
$("#add_product").click(function(){
var sku=$("#product_sku").val();
var nname=$("#product_name").val();
var price=$("#product_price").val();
var quantity=$("#product_quantity").val();
console.log(sku,nname,price,quantity);
arrProduct.push({ sku: sku, name: nname, price: price,quantity:quantity });
    display(arrProduct);
});



    function display (arr) {
        var table =
          "<table> <tr><th>SKU</th><th>Name</th><th> Price</th><th>Quantity</th><th>Action</th></tr> ";
        for (let i = 0; i < arr.length; i++) {
          //printing the full array
          console.log(arr[i]);
          table +=
            "<tr><td>" +
            arr[i].sku +
            "</td><td>" +
            arr[i].name +
            "</td><td>" +
            "$" +
            arr[i].price +
            "</td><td>"+ arr[i].quantity + "</td><td>" +
            '<a href="#" onclick=setElements('+arr[i].sku+')>Edit</a>' +
            '<a href="#" onclick=deleteElements('+arr[i].sku+')>  Delete</a>'+
            "</td></tr>";
        }
        document.getElementById("table").innerHTML = table + "</table>";
        $(".success").show();
        $(".success").text("Product Added Successfully")
        $(".error").hide();
        clearInput();
      }
     
      
        function setElements(id) {
          $(".success").hide();
          $("#update_product").show();
          $("#add_product").hide();
          var index = arrProduct.findIndex((x) => x.sku == id); //finding index of element
          console.log(arrProduct[index]);
          $("#product_sku").val(arrProduct[index].sku);
          $("#product_name").val(arrProduct[index].name);
          $("#product_price").val(arrProduct[index].price);
          $("#product_quantity").val(arrProduct[index].quantity);
          $("#product_sku").attr("disabled", "disabled");
      }
          
      
      $("#update_product").click(function(){
        var sku=$("#product_sku").val();
        var nname=$("#product_name").val();
        var price=$("#product_price").val();
        var quantity=$("#product_quantity").val();
        for (let i = 0; i < arrProduct.length; i++) {
            if(sku == arrProduct[i].sku){
                arrProduct[i].sku=sku;
                arrProduct[i].name=nname;
                arrProduct[i].price=price;
                arrProduct[i].quantity=quantity;
            }
        }
        display(arrProduct);
        clearInput();
        $("#add_product").show();
        $("#update_product").hide();
        $("#product_sku").attr("disabled", false);
        $(".success").show();
        $(".error").hide();
        $(".success").html("Product updated Successfully")
    
        
      });
      function clearInput(){
        $("#product_sku").val("");
        $("#product_name").val("");
        $("#product_price").val("");
        $("#product_quantity").val("");
      }

      function deleteElements(id){
            $("#delete_product").show();
            $("#cancel_del").show();
            $("#delete_product").click(function(){
              var index = arrProduct.findIndex((x) => x.sku == id);
              arrProduct.splice(index, 1);
              display(arrProduct);
              $(".success").text("Product Deleted Successfully");
              $(".success").show();
              $("#delete_product").hide();
              $("#cancel_del").hide();
            });
              // successMessage("Product deleted Successfully");
            $("#cancel_del").click(function(){
                $("#delete_product").hide();
                $("#cancel_del").hide();
            });
            
      }