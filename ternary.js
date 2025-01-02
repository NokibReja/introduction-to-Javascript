let price = 300;
const isPoor = false;

// if (isPoor === true) {
//     if (price > 1000) {
//         price = price/2;
//         // price /= 2; another way
//     }else{
//         price = 0;
//     }
// } else {
//     price +=1000;
// }




// price > 1000 ? price = price/2 : price = 0;
// price > 1000 ? price/2 : 0;
// console.log(price)


// price = isPoor === true ? 0 : price + 1000;
price = isPoor === true ? price > 1000 ? price/2 : 0 : price + 1000;
console.log(price);

