var catalog= [];
var categories= [];
function fetchData(){
    $.ajax({
        url: 'http://restclass.azurewebsites.net/api/test',
        type:'GET',
        success:function(allItems){
            this.catalog= res;
            for(let i=0; i< allItems.length;i++){
                var item = allItems[i];
                if(item.user==="wes"){
                    catalog.push(item);
                    if(!categories.includes(item.category)){
                        
                    
                    categories.push(item.category);
                    }
                }

            }
            displayCatalog();
            displayCategories();

        },
        error: function(details){
            console.error("Error getting Data", details);
        }

    });
}
var catalog= [];



function fetchData(){
    catalog = [
        {
            code:'123',
            title:'First product on the list',
            price:19.27,
            imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhASEBAVEBUVFRAVFhUWFRUVFRUSFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDg0NDjcZFRktKy0tNzcrKysrKysrLS0rKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBgcIBAX/xABBEAACAQIBCAcECAUDBQAAAAAAAQIDEQQFBgcSIUFRcRMiMWGBkaEUMlKxI0JicpKywfBDgqLC0TSDkxUkM1Nj/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AN4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfPyplvDYVXxFeFLub6z5RW1+CA+gDB8ZpSwEPd6Wr92CS/raPm1dL+HT6uFqPnKK9NoGyga0jpgob8LUX88X+h66GlrBP3qVeP8sGvzgbABiOH0kZOna9aUPvU5/omfWw2dWBqe5jKPJ1IxflJpgfYBRSqxmrxkpLimmvNFYAAAAAAAAAAAAAAAAAAAAAAAAAt4ivGnGU5yUIxTcpN2SS7W2XDTWl/OxzqexUZWhTa6Vr61Tt1eUfnyArzz0nzm5UsC3ShtTq/wASX3fgXry7DWmIx0ptylJybd227t97bPJOpco1gLzqsjXLLY1gL2uOkLNw2Bf6Vkquzz6w1gPfh8oTpu8Jyg+MW0/NGQZNz9x9G2ripyS3TaqLl17+hiCZUmBtrJGl6qrLE0I1F8UG4Styd0/QznImfmBxVlGt0U3bqVeo78E/dfgzm6Mi5GqwOtEwc4',
            quantity: 0,
            category: 'coding',
        }
,
         {   code: '1224',
            title: 'Coding Book 2',
            price: 39.27,
            imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFhUVGBcYFxgVFRUXFxcXFhUXGBcYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAcGBQj/xABBEAACAQIBCQQGCAQGAwAAAAAAAQIDEQQFBhIhMUFRYYEHInGREzJSobHBIyRCcoKistFEYnPwFDRTksLSFzOD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EAB4RAQEBAAMAAgMAAAAAAAAAAAABEQISMSFRAxNB/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGc0k22klrbepJc2BIHj8tdoGGpXjS+mlydoL8W/omeJynnzjKt0qipR4U1o/mev3mLzkanC12DEYqnTV5zjBcZSUfifJxGd2Chtrxf3VKXvSscVrYtyd5ScpcW235sqVW5j9t+m/1uwVM/sItnpJeEUvizXl2iUN1Ko+sV8zlGmuJlVETvV6R1P/yLR/0annEsh2iYffSqr/a/+Ryj0iJemHenSOvUs/cG9rqR8Yfs2fQoZ1YKezEQX3rw/UkcRdVEfTl/ZU6R+g6GKhNXhOMl/K1L4Fx+eIYtxd02nxTs/NH28BnrjKOys5r2Z99eb1+8s/Il/G7YDweRu0ilOyxEHTftRvKHVbY+89thcTCpFTpyUovY4tNPqjpOUrFlnq4AFQAAAAAAAAAAAAAAD5Gc+XqeDourPW9kI75y3Lw3tgM484aODp6dV636sF603yXDmcgziztr4ttTlo091OLej19p+PuPkZ',
            quantity: 0,
            category: 'Code',
    }
,   
{
            code: '4586',
            title: 'mma',
            price: 43.23,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsHsoArO7giTOkQf6_CrXYKdiuLMIklp5hQw&usqp=CAU',
            quantity: 0,
            category: 'mma'



        }
    ]

}
function displayCategories(){
    for(let i=0; i<categories.length; i++){
        var cat = categories[i];
        var syntax = '<li class="list-group-item list-group-item-action">${cat}</li>';
        $("#categories").append(syntax);
    }


}
function displayCatalog() {
    for(let i=0; i < catalog.length; i++){
        var item = catalog[i];
        
        // display on html
        var syntax = 
        `<div class="item">
            <img src="${item.image}">
            <div class="info">
                <label class="code">${item.code}</label>
                <label class="title">${item.title}</label>
                <label class="price">$ ${item.price}</label>

                <button class="btn btn-info btn-sm">Add</button>
            </div>
        </div>`;


        $("#catalog-container").append(syntax);
    }
}



function init(){
    console.log("catalog Working");
fetchData();
displayCatalog();
}

window.onload = init;