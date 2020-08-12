function Item(code,title,price,cat,image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = cat;
    this.image = image;
    this.user = "wes"; 

}



function register(){
    var code= $("#txtCode").val();
    var title= $("#txtTitle").val();
    var price= $("#txtPrice").val();
    var cat= $("#txtCategory").val();
    var image=$("#txtImage").val();
    console.log(code,title,price,cat,image);

    var item = new Item(code,title,price,cat,image);
    console.log(item);

    $.ajax({
        url: 'http://localhost:8080/api/items',
        type:'POST',
        data: JSON.stringify(item),
        contentType:'application/json',
        success:function(response){
        console.log('yees',response);
    },
        error: function(){
        console.log('nope');
    }
});
}

function init(){
    $("#btnSave").click(register);

}

window.onload = init;