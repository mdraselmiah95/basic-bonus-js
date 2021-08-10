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
    {
        name: 'samsung watch',
        price: 21050
    },
    {
        name: 'Hp laptop',
        price: 69050
    },
]

/* function searchProduct(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;
}

const matched = searchProduct(products, 'laptop');
console.log(matched); */

/* for (const product of products) {
    if (product.price < 10000) {
        break;
    }
    console.log(product);
} */

for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}