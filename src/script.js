const arrProduct = [];
$("#add_product").click(function(){
var sku=$("#product_sku").val();
var nname=$("#product_name").val();
var price=$("#product_price").val();
var quantity=$("#product_quantity").val();
console.log(sku,nname,price,quantity);
arrProduct.push({ sku: sku, name: nname, price: price,quantity:quantity });
    addElement(arrProduct);
});



    function addElement(arr) {
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
            '<a href="#" onclick=EditForm('+arr[i].sku+')>Edit</a>' +
            "</td></tr>";
        }
        document.getElementById("table").innerHTML = table + "</table>";
      }
     
      function EditForm(sku){
          $("#add_product").val("Update Product");
          $("#product_sku").val("");
          $("#product_name").val("");
          $("#product_price").val("");
          $("#product_quantity").val("");
          
      }
      $("add_product").click(function(){
        var sku=$("#product_sku").val();
        var nname=$("#product_name").val();
        var price=$("#product_price").val();
        var quantity=$("#product_quantity").val();
        for (let i = 0; i < arr.length; i++) {
            if(sku == arrProduct.sku){
                arrProduct.sku=sku;
                arrProduct.name=nname;
                arrProduct.price=price;
                arrProduct.quantity=quantity;
            }
        }
        addElement(arrProduct);
        
      });