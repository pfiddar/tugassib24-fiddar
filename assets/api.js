let endpoint = "https://reqres.in/api/products"; 
let content = document.getElementById('content');

let produk = [{
    id : 1,
    nama : "Chessecake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqi4u0x9sYoyI53hxrTB-q5xR7amd8UrWj3Q&usqp=CAU",
    harga : "Rp. 20.000"
},
{
    id : 2, 
    nama : "Choco Muffin",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj66Y47aMrlY3zLZYnOPnK-gFp7q4ucupD-w&usqp=CAU",
    harga : "Rp. 10.000"
},
{
    id : 3, 
    nama : "Chiffon Cake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtFHiPO61y9cO5KEzI5ksSborCuCEe-7R5Q&usqp=CAU",
    harga : "Rp. 25.000"
},
{
    id : 4, 
    nama : "Croissant",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq86INfgcDFfiaMYw8768L-3eEBhpXV0sGxQ&usqp=CAU",
    harga : "Rp. 20.000"
},
{
    id : 5, 
    nama : "Strawberry Chessecake",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAG4LfhcfWMXcOeVzq6Yhe-jrg3jy-_Y6Ow&usqp=CAU",
    harga : "Rp. 45.000"
},
{
    id : 6, 
    nama : "Nutella Stuffed Cookies",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUAIG8yEoS1BmkZ0crgEsAAvcvapl9aSjf_A&usqp=CAU",
    harga : "Rp. 15.000"
},
{
    id : 7, 
    nama : "Biscoff Stuffed Cookies",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBHEMDvWEtoRoO8Y624aSyK2fygrS9k6iSw&usqp=CAU",
    harga : "Rp. 15.000"
}];
let fetchOption = {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({produk: produk})
};
fetch(endpoint, fetchOption)
    .then((res) => res.json())
    .then((response) => {

        response.produk.forEach(element => {
            content.innerHTML += `
                    <div class="column">
                        <div class="card">
                            <div><img src="${element.img}" alt="gambar1"></div>
                            <h3>${element.nama}</h3>
                            <p>${element.harga}</p>
                            <a href="#">Read More...</a>
                        </div>
                    </div>
            `
            // console.log(element);
        });
    })