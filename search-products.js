const products = [{
        name: 'Apple for iphone',
        price: 70000
    },
    {
        name: 'Apple watch',
        price: 35000
    },
    {
        name: 'Realme phone',
        price: 17000
    },
    {
        name: 'Asus laptop',
        price: 50000
    },
    {
        name: 'Ig smart tv',
        price: 150000
    },
    {
        name: 'bosundhara binding paper',
        price: 150
    },
    {
        name: 'olg granny phone',
        price: 1500
    },
    {
        name: 'samsung s5 phone',
        price: 11050
    },
]

function searchProduct(products, searchText) {
    for (const product of products) {
        console.log(product);
    }
}

const matched = searchProduct(products);
console.log(matched);