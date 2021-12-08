const name = 'Rwitesh';
const userAge = 20;

const user = {
    name,
    age: userAge,
    location: 'Kolkata'
}

// console.log(user);


// Object Destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// console.log(product.label);
// console.log(product.price);
// console.log(product.stock);
// console.log(product.salePrice);

const {label, price, stock, salePrice, rating=5} = product;
console.log(label);
console.log(price);
console.log(stock);
console.log(salePrice);
console.log(rating);