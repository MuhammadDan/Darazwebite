const container = document.getElementById('container');
const tags = document.getElementById('tags');

var products;
async function getProducts(){
    var productResponse = await fetch('https://dummyjson.com/products')
    .then(res => res.json());

    products = productResponse.products;
    console.log(products);

    products.forEach((data) => {
        const card = `<div class = 'card'> 
        <img src = ${data.thumbnail} />
        <h4>${"Product Name : "} ${data.title} </h4>
        <h4>${"Product Price : "} ${data.price} </h4>
        </div>`
        container.innerHTML += card;
        
    });
    let categories = [];
    products.map((data)=>{
        if(!(categories.includes(data.category))){
           return (categories.push(data.category))
        }
    })
    // forming button
    console.log(categories);
    categories.forEach((data)=>{
        let button = `<button class = 'chip' id= 'chip' onclick=filter(this)>${data}</button>`
        tags.innerHTML += button;
    });

    const laptops = products.filter((data)=> data.category == "laptops")
    console.log("laptops --> " , laptops);

    laptops.forEach((data)=> {
    var card = `<div class = 'card'>
    <img src = ${data.thumbnail} />
    <h4> ${"Product Name : "} ${data.title} </h4>
    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
    </div>
    ` 
    container.innerHTML += card;
    // console.log("laptops --> " , card);
});
    // For Smartphone filter
    const smartphones = products.filter((data)=> data.category == "smartphones")
    console.log("smartphones --> " , smartphones);

    smartphones.forEach((data)=> {
    var card = `<div class = 'card'>
    <img src = ${data.thumbnail} />
    <h4> ${"Product Name : "} ${data.title} </h4>
    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card;
    // console.log("smartphones --> " , card); 
    });

    // For fragrances filter
    const fragrances = products.filter((data)=> data.category == "fragrances")
    console.log("fragrances --> " , fragrances);

    fragrances.forEach((data)=> {
    var card = `<div class = 'card'>
    <img src = ${data.thumbnail} />
    <h4> ${"Product Name : "} ${data.title} </h4>
    <h4> ${"Prodcuct Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card;
    // console.log("fragrances --> " , card); 
    });
    const  skincare = products.filter((data)=> data.category == "skincare")
    console.log("skincare --> " , skincare);
    skincare.forEach((data)=> {
        var card = `<div class = 'card'>
        <img src = ${data.thumbnail} />
        <h4> ${"Product Name : "} ${data.title} </h4>
        <h4> ${"Prodcuct Price : "} ${data.price} </h4>
        </div>`
        container.innerHTML += card;
      //   console.log("skincare --> " , card); 
        });

         // For groceries filter
         const groceries = products.filter((data)=> data.category == "groceries")
         console.log("groceries --> " ,groceries);

         groceries.forEach((data)=> {
         var card = `<div class = 'card'>
         <img src = ${data.thumbnail} />
         <h4> ${"Product Name : "} ${data.title} </h4>
         <h4> ${"Prodcuct Price : "} ${data.price} </h4>
         </div>`
         container.innerHTML += card;
      //    console.log("groceries --> " , card); 
         });
          // For home-decoration filter
        const homedecoration = products.filter((data)=> data.category == "home-decoration")
        console.log("home-decoration --> " ,homedecoration);

        homedecoration.forEach((data)=> {
        var card = `<div class = 'card'>
        <img src = ${data.thumbnail} />
        <h4> ${"Product Name : "} ${data.title} </h4>
        <h4> ${"Prodcuct Price : "} ${data.price} </h4>
        </div>`
        container.innerHTML += card;
      //   console.log("home-decoration --> " , card); 
        });

}
function filter(btn){
   
    if(btn.innerHTML == "smartphones"){
        const smartphones = products.filter((data)=> data.category == "smartphones")
        console.log("smartphones --> " , smartphones);
        
        container.innerHTML = '';
        smartphones.forEach((data)=> {
        var card = `<div class = 'card'>
        <img src = ${data.thumbnail} />
        <h4> ${"Product Name : "} ${data.title} </h4>
        <h4> ${"Prodcuct Price : "} ${data.price} </h4>
        </div>`
        container.innerHTML += card;
        // console.log("smartphones --> " , card); 
        });
    }
        else if(btn.innerHTML =="laptops"){
            const laptops = products.filter((data)=>data.category == "laptops")
            console.log("laptops-->", laptops);

            container.innerHTML ='';
            laptops.forEach((data)=>{
                var card = `<div class='card'>
                <img src= ${data.thumbnail} />
                <h4> ${"Product Name: "}${data.title}</h4>
                <h4> ${"Product Price:"} ${data.price}</h4>
                </div>`
                container.innerHTML += card;
        });
    }
    else if(btn.innerHTML =="fragrances"){
        const fragrances = products.filter((data)=>data.category == "fragrances")
        console.log("fragrances-->", fragrances);

        container.innerHTML ='';
        fragrances.forEach((data)=>{
            var card = `<div class='card'>
            <img src= ${data.thumbnail} />
            <h4> ${"Product Name: "}${data.title}</h4>
            <h4> ${"Product Price:"} ${data.price}</h4>
            </div>`
            container.innerHTML += card;
    });
}
else if(btn.innerHTML =="skincare"){
    const skincare = products.filter((data)=>data.category == "skincare")
    console.log("skincare-->", skincare);

    container.innerHTML ='';
    skincare.forEach((data)=>{
        var card = `<div class='card'>
        <img src= ${data.thumbnail} />
        <h4> ${"Product Name: "}${data.title}</h4>
        <h4> ${"Product Price:"} ${data.price}</h4>
        </div>`
        container.innerHTML += card;
});
}
else if(btn.innerHTML =="groceries"){
    const groceries = products.filter((data)=>data.category == "groceries")
    console.log("groceries-->", groceries);

    container.innerHTML ='';
    groceries.forEach((data)=>{
        var card = `<div class='card'>
        <img src= ${data.thumbnail} />
        <h4> ${"Product Name: "}${data.title}</h4>
        <h4> ${"Product Price:"} ${data.price}</h4>
        </div>`
        container.innerHTML += card;
});
}
else if(btn.innerHTML =="home-decoration"){
    const homedecoration = products.filter((data)=>data.category == "home-decoration")
    console.log("home-decoration-->", homedecoration);

    container.innerHTML ='';
    homedecoration.forEach((data)=>{
        var card = `<div class='card'>
        <img src= ${data.thumbnail} />
        <h4> ${"Product Name: "}${data.title}</h4>
        <h4> ${"Product Price:"} ${data.price}</h4>
        </div>`
        container.innerHTML += card;
});
}
}
getProducts();

let button1 = document.getElementById('button');
let searchbtn = document.getElementById('search');
var products;
button1.addEventListener('click', search)

// Functions for the search..
async function search() {
  const searchResponse = await fetch(`https://dummyjson.com/products/search?q=${searchbtn.value}`)
  .then(res => res.json())

  container.innerHTML = ''
  let products = searchResponse.products;
  products.forEach((data) => {
    const card = `<div class = 'card'> 
    <img src = ${data.thumbnail} />
    <h4>${"Product Name : "} ${data.title} </h4>
    <h4>${"Product Price : "} ${data.price} </h4>
    </div>`
    container.innerHTML += card; 
});
}