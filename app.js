// JavaScript source code
const goods = document.querySelector('.goods');
const basket = document.querySelector('.basketContent');

const products = [
    {
        productId: 0,
        productName: 'name1',
        productImage: 'picture',
        productDiscription: 'Elitr sit sit molestie sit diam Vero no elitr takimata sit ipsum justo lorem facilisis sanctus consetetur erat at nonumy in tempor diam at in sit',
        productPrice: 100
    },

    {
        productId: 1,
        productName: 'name2',
        productImage: 'picture',
        productDiscription: 'blaConsequat dolor accusam nonumy erat eabla Qui et dolore augue ad accusam sit nulla et voluptua sanctus ad erat vel feugait lorem tincidunt dolore enim labore',
        productPrice: 200
    },

    {
        productId: 2,
        productName: 'name3',
        productImage: 'picture',
        productDiscription: 'Dignissim sed aliquyam nam eirmod delenit Et voluptua tempor invidunt diam aliquyam no te illum eu ea et magna dolore consetetur dolor ipsum imperdiet exerci aliquyam',
        productPrice: 300
    }
];

const basketProducts = [];

const menuBasket = document.querySelector('.menuBasket');
const closeBtn = document.querySelector('.closeBtn');

menuBasket.addEventListener('click', function () {
    document.querySelector('.basketBg').style.display = 'flex';
    update();
});

closeBtn.addEventListener('click', function () {
    document.querySelector('.basketBg').style.display = 'none';

});

products.forEach(function (item) {
    let product = document.createElement('div');
    product.classList.add('product');
    goods.appendChild(product);

    let name = document.createElement('h3');
    name.classList.add('name');
    name.innerText = item.productName;
    product.appendChild(name);

    let image = document.createElement('div');
    image.classList.add('image');
    image.innerText = item.productImage;
    product.appendChild(image);


    let discription = document.createElement('p');
    discription.classList.add('discription');
    discription.innerText = item.productDiscription;
    product.appendChild(discription);

    let price = document.createElement('p');
    price.classList.add('price');
    price.innerText = 'Price: ' + item.productPrice;
    product.appendChild(price);

    let button = document.createElement('button');
    button.innerText = 'BUY';
    button.addEventListener('click', function () {
        basketProducts.push(item);
        console.log(item);
    });

    product.appendChild(button);

});

function update() {
    basket.innerHTML = '';
    basketProducts.forEach(function (item) {
        let basketItem = document.createElement('div');
        basketItem.classList.add('basketItem');
        basket.appendChild(basketItem);

        let basketId = document.createElement('div');
        basketId.classList.add('basketId');
        basketId.innerText = item.productId;
        basketItem.appendChild(basketId);

        let basketName = document.createElement('div');
        basketName.classList.add('basketName');
        basketName.innerText = item.productName;
        basketItem.appendChild(basketName);

        let basketPrice = document.createElement('div');
        basketPrice.classList.add('basketPrice');
        basketPrice.innerText = item.productPrice;
        basketItem.appendChild(basketPrice);
    });
    const sum = document.querySelector('.sum');
    let sumElement = 0;
    basketProducts.forEach(function (basketProduct) {
        sumElement += basketProduct.productPrice;
    });

    sum.innerText = 'sum: ' + sumElement;
}




