
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

// второе
const products =[
    {title: 'milk', price: 150 , isAvailable: true},
    {title: 'butter', price: 100, isAvailable: false},
    {title: 'rice', price: 500, isAvailable: true},
]

const addButton = document.getElementById('add');
const titleInput = document.getElementById('title');
const priceInput = document.getElementById('price');
const selectInput = document.getElementById('select');
const showButton = document.getElementById('show');
const deleteButton = document.getElementById('delete');
const newDiv = document.querySelector('#products')

titleInput.value = '';
priceInput.value = '';
selectInput.selectedIndex = 0;


addButton.addEventListener('click', () => {
    const title = titleInput.value;
    const price = priceInput.value;
    const availability =  selectInput.value === '1';

    const newItem= {title: title, price: price, isAvailable: availability};
    products.push(newItem)
    console.log(products);
    localStorage.setItem('newProducts', JSON.stringify(products));
})

showButton.addEventListener('click', () => {
    const product2 = JSON.parse(localStorage.getItem('newProducts'));

    newDiv.innerHTML = product2.map(product => `
       <div>
           <h4>${product.title}:</h4>
           <p> цена: ${product.price}</p>
           <p>${product.isAvailable ? "В наличии" : "Нет в наличии"}</p>
       </div>
       `).join('');
});

deleteButton.addEventListener('click', () => {
    localStorage.removeItem('newProducts');
    newDiv.innerText = ``
})