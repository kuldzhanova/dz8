const products =[
    {title: 'milk', price: 150 , isAvailable: true},
    {title: 'butter', price: 100, isAvailable: false},
    {title: 'rice', price: 500, isAvailable: true},

]

btnSet = document.querySelector('#set');
btnGet = document.querySelector('#get');
btnRemove = document.querySelector('#remove');
divProducts = document.querySelector('#product');

btnSet.onclick = () => localStorage.setItem('products', JSON.stringify(products));
btnGet.onclick = () => {
    const json = localStorage.getItem("products");
    const products = JSON.parse(json);
    console.log(json);
    divProducts.innerHTML = products.map(product => `
       <div>
           <h4>${product.title}:</h4>
           <p> цена: ${product.price}</p>
           <p>${product.isAvailable ? "В наличии" : "Нет в наличии"}</p>
       </div>
       `).join('');
};
btnRemove.onclick = () => {
    localStorage.removeItem('products');
    divProducts.innerText = ``
}
