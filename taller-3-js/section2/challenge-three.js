//Challenge three
const optionChooseUser = () => prompt("Ingrese la opción del menú");
const enterNameProduct = () => prompt("Ingrese el nombre del producto: ");
const enterPriceProduct = () => prompt("Ingrese el precio del producto: ");
const enterQuantityProduct = () => prompt("Ingrese la cantidad del producto: ");
const enterDescripcionProduct = () => prompt("Ingrese la descripción del producto: ");
const enterIdentifierProduct = () => prompt("Ingrese el identificador del producto");
const enterPriceIntervalProduct = () => prompt("Ingrese el intervalo del precio del producto separados por coma ");
const enterOptionSorted = () => prompt("Ingrese una opción para ordenar los productos");

let flag = true;
const menu = () =>{ //Fucttion menu
    console.log("Reto 3: Sistema de Gestión de Inventario");
    console.log(`
    Opciones---------------------------------------------->
    1.Creación de Productos
    2.Duplicación de productos
    3.Visualización y búsqueda de productos
    4.Actualización de productos
    5.Eliminación de productos
    6.Verificación de existencia de productos e inventario
    7.Venta de productos
    8.Compra de productos
    9.Cálculo de valor total del inventario
    10.Ordenamiento de productos
    11.Identificación de productos con posibles malas palabras en la descripción
    12. Reporte general de productos.
    13.Salir`)
}
const verifyDataNumber = (dataNumber) =>{ //Verify data enter user number
    return(!isNaN(dataNumber))
            ?true
            :false
}
const showMessage = (message) =>{ //Function show message - true or false
    (message)
    ?console.log("...")
    :console.log("Upss. Ocurrió un error!...");
}
const getIdentifierOnly = (products) =>{
    let count = 1;
    for(let i= 0; i<products.length; i++){ //Identifier only
        count++;
    }
    return count;
}
const addProduct = (products,identifierOnlyGet,nameProduct,priceProduct,quantityProduct,descriptionProduct) =>{
    products.push({identifier: identifierOnlyGet, name: nameProduct, price:priceProduct,quantity:quantityProduct,description:descriptionProduct});
    console.log("El producto se agregó correctamente!...");
}
const filterProducts = (products,nameProductEnterCopy) =>{
    const productsFilter = products.filter(product=>product.name == nameProductEnterCopy);
    return productsFilter
}
const addProductDuplicate = (products,productsFilter,identifierOnlyGetCopy) =>{
    let count = 0;
    for(let i = 0; i<products.length; i++){
        count++;    
    }
    const productDuplicate = [...productsFilter]; //Duplicate objet 
    //Add product
    products.push({...productDuplicate[0],identifier:identifierOnlyGetCopy,name: productDuplicate[0].name + " Copy" + count});
}
const showProducts = (products,message) =>{ //show products
    console.log(message);
    products.forEach((product,index)=>{
        console.log(`Producto ${index+1}`)
        console.log(`
        Identificador del producto: ${product.identifier}
        Nombre del producto: ${product.name}
        Precio del producto: ${product.price}
        Cantidad del producto: ${product.quantity}
        Descripción del prducto: ${product.description}
        `)
    })
}
const filterProductsForInterval = (products,intervalOne,intervalTwo) =>{ //Function filter product for inteval
    const productsForIntervalFilter = products.filter(product=>product.price >= intervalOne && product.price <= intervalTwo);
    return productsForIntervalFilter;

}
const updateProducts = (products,identifierProductEnter,nameProductEnterUpdate,priceProductEnterUpdate,quantityProductEnterUpdate,descriptionProductEnterUpdate) =>{
    const productsUpdate = products.find(product=>product.identifier === identifierProductEnter) //Find product for identifier
    productsUpdate.name = nameProductEnterUpdate;
    productsUpdate.price = priceProductEnterUpdate;
    productsUpdate.quantity = quantityProductEnterUpdate;
    productsUpdate.description = descriptionProductEnterUpdate;
    console.log("El producto fue actualizado correctamente!...");
}
const removeProducts = (products,identifierProductEnterRemove) => {
    const productsNew = products.filter(product=>product.identifier !== identifierProductEnterRemove); //Remove products
    return productsNew;
}
const VerifyExistProductForName = (products,nameProductEnterSearch) =>{ //Search products for name
    const productForNameSearch = products.some(product=>product.name === nameProductEnterSearch)
    return productForNameSearch;
}
const verifyQuantityProduct = (products) =>{ //Function verify quantity 
    const quantityProductVerify = products.filter(product=>product.quantity > 0);
    return quantityProductVerify;
}
const sellProducts = (products,identifierProducEnterSell,nameProductEnterSell,quantityProductEnterSell) =>{ //sell products
    const productSell = products.find(product=>product.identifier === identifierProducEnterSell && product.name === nameProductEnterSell)
    productSell.quantity -= quantityProductEnterSell;
    if(productSell.quantity === 0){
        console.log("No hay más cantidades del producto para vender");
        return;
    }
    console.log("El producto se vendió correctamente!.")
}
const buyProducts = (products,identifierProducEnterBuy,nameProductEnterBuy,quantityProductEnterBuy) =>{ //Buy products
    const productsBuy = products.find(product=>product.identifier === identifierProducEnterBuy && product.name === nameProductEnterBuy);
    productsBuy.quantity += quantityProductEnterBuy;
    console.log("El producto se compró correctamente");
}
const calculateTotalValueInventory = (products) =>{ //Calculate total price of the products
    let prices = [];
    products.forEach(product=>{
        prices.push(product.price)
    })
    const totalPrice = prices.reduce((accum,item)=>{
        return accum+=item;
    })
    console.log(new Intl.NumberFormat('es-CO').format(totalPrice)); //New instance of number.format
}
const sortedProductsAscendant = (products)=>{// Funcion sorted  products ascendant
   products.sort((a,b)=>a.name.localeCompare(b.name));
   console.log("Productos ordenenados por nombre");
   console.log(products); //   Products sorte for name
   products.sort((a,b)=> a.price - b.price); //Products sorte for price
   console.log("Productos ordenenados por precio");
   console.log(products);
   products.sort((a,b)=>a.quantity - b.quantity); //Products sorte for quantity
   console.log("Productos ordenenados por cantidad");
   console.log(products);
   products.sort((a,b)=>a.description.localeCompare(b.description)); //Producst sorete for description
   console.log("Productos ordenenados por descripción");
   console.log(products);

}
const sortedProductsDescendant = (products)=>{ // Funcion sorted  products descendant
    products.sort((a,b)=>b.name.localeCompare(a.name));
    console.log("Productos ordenenados por nombre");
    console.log(products); //   Products sorte for name
    products.sort((a,b)=> b.price - a.price); //Products sorte for price
    console.log("Productos ordenenados por precio");
    console.log(products);
    products.sort((a,b)=>b.quantity - a.quantity); //Products sorte for quantity
    console.log("Productos ordenenados por cantidad");
    console.log(products);
    products.sort((a,b)=>b.description.localeCompare(a.description)); //Producst sorete for description
    console.log("Productos ordenenados por descripción");
    console.log(products);
 
}
const identifyProductWithBadWords = (products,badWord) =>{
    const listBlackProduct = [];
    products.forEach(product=>{
        const productWithBadWords = badWord.some(word=>product.description.includes(word));
        if(productWithBadWords){
            listBlackProduct.push(Object.assign({},product));
        }
    })
    return listBlackProduct;   
}
const quantityProducts = (products) =>{
    let productsQuantity = 0;
    products.forEach(product=>{
        if(product){
            productsQuantity++;
        }
    })
    return productsQuantity;
}
const productsExpensive = (products) =>{
    const priceExpensive = 79000;
    const expensiveProducts = products.filter(product=>product.price>= priceExpensive)
    return expensiveProducts;
}
const productsCheap = (products) =>{
    const priceCheap = 10000;
    const cheapProducts = products.filter(product=>product.price < priceCheap);
    return cheapProducts;
}
const productsWithGreaterQuantity = (products,greaterQuantity) =>{
    const withGreaterQuantityProducts = products.filter(product=>product.quantity >= greaterQuantity);
    return withGreaterQuantityProducts;
}
const productWithSmallerQuantity = (Products,greaterQuantity) =>{
    const withSmallerQuantityProduct = products.filter(product=>product.quantity < greaterQuantity);
    return withSmallerQuantityProduct;
}
const challegengeThree = (flag) =>{ //Function first
    const products = [];
    menu();
    while(flag){
        const chooseUserOption = optionChooseUser(); //Option choose user
        const dataNumberVerify = verifyDataNumber(chooseUserOption)
        if(!dataNumberVerify){ //Verify data number - true or false Not string
            showMessage(dataNumberVerify);
            return;
        }
        switch(parseInt(chooseUserOption)){ //
            case 1:
                const nameProductEnter = enterNameProduct(); //Data enter user
                let priceProductEnter = enterPriceProduct(); //
                const dataNumberVerify = verifyDataNumber(priceProductEnter)
                if(!dataNumberVerify){
                    showMessage(dataNumberVerify);
                    return;
                }
                priceProductEnter = parseFloat(priceProductEnter); //Convert to float
                let quantityProductEnter = enterQuantityProduct(); //
                if(!verifyDataNumber(quantityProductEnter)){
                    showMessage(verifyDataNumber(quantityProductEnter))
                    return;
                }
                quantityProductEnter = parseFloat(quantityProductEnter); //Convert to float
                const descriptionProductEnter = enterDescripcionProduct(); //
                const identifierOnlyGet = getIdentifierOnly(products);
                addProduct(products,identifierOnlyGet,nameProductEnter,priceProductEnter,quantityProductEnter,descriptionProductEnter);
                showProducts(products);
                break;
            case 2:
                const nameProductEnterCopy = enterNameProduct(); //Enter name product
                const productsFilter = filterProducts(products,nameProductEnterCopy); //Filter products for name
                const identifierOnlyGetCopy = getIdentifierOnly(products); //Obtain identifier only
                addProductDuplicate(products,productsFilter,identifierOnlyGetCopy); //Add a new product duplicate
                showProducts(products);
                // verifyProductDuplicate(products);
                break;
            case 3:
                showProducts(products,"Productos almacenados"); //Show all products available-------->
                const nameProduct = enterNameProduct(); // enter name product
                const productsFilterShow = filterProducts(products,nameProduct); //filter product for name
                showProducts(productsFilterShow, "Productos encontrados por nombre"); //show product for name
                let priceIntervalProductEnter =  enterPriceIntervalProduct(); // enter interval separate for ,
                priceIntervalProductEnter = priceIntervalProductEnter.split(","); // separate values for ,
                let [intervalOne, intervalTwo] = priceIntervalProductEnter; //Destructure the two values
                intervalOne = parseFloat(intervalOne); // convert to float price enter for user
                intervalTwo = parseFloat(intervalTwo); 
                const filterForIntervalProduct = filterProductsForInterval(products,intervalOne,intervalTwo); // filter product for interval
                showProducts(filterForIntervalProduct, "Productos encontrados por el intervalo de precio"); //show products for interval price
                break;
            case 4:
                let identifierProductEnter = enterIdentifierProduct(); // enter identifier for user
                if(!verifyDataNumber(identifierProductEnter)){ //Verify not a number
                    showMessage(verifyDataNumber(identifierProductEnter))
                    return;
                }
                identifierProductEnter = parseInt(identifierProductEnter);// convert to int value enter user - identifier
                const nameProductEnterUpdate = enterNameProduct(); 
                const priceProductEnterUpdate = enterPriceProduct();
                const quantityProductEnterUpdate = enterQuantityProduct();
                const descriptionProductEnterUpdate = enterDescripcionProduct();
                updateProducts(products,identifierProductEnter,nameProductEnterUpdate,priceProductEnterUpdate,quantityProductEnterUpdate,descriptionProductEnterUpdate);
                console.log(products);
                break;
            case 5:
                let identifierProductEnterRemove = enterIdentifierProduct(); //Enter identifier
                if(!verifyDataNumber(identifierProductEnterRemove)){ //Verify data enter user - number
                    showMessage(verifyDataNumber(identifierProductEnterRemove));
                    return;
                }
                identifierProductEnterRemove = parseInt(identifierProductEnterRemove) //Convert to int value enter user 
                const productsNew = removeProducts(products,identifierProductEnterRemove);
                console.log("El producto ha sido eliminado correctamente!...");
                showProducts(productsNew);
                break;
            case 6:
                const nameProductEnterSearch = enterNameProduct();
                const existProductForNameVerify = VerifyExistProductForName(products,nameProductEnterSearch);
                if(!existProductForNameVerify){
                    console.log("No existe el producto. Intenta de nuevo!...");
                    return;
                }
                console.log("El producto existe!.")
                const quantityProductVerify = verifyQuantityProduct(products);
                if(quantityProductVerify){
                    console.log("Hay suficiente cantidad disponible");
                }
                break;
            case 7:
                let identifierProducEnterSell = enterIdentifierProduct(); // enter identifier for user
                if(!verifyDataNumber(identifierProducEnterSell)){
                    showMessage(!verifyDataNumber(identifierProducEnterSell));
                    return;
                }
                identifierProducEnterSell = parseInt(identifierProducEnterSell); // convert to float identifier
                const nameProductEnterSell = enterNameProduct(); // enter name product
                let quantityProductEnterSell = enterQuantityProduct();
                if(!verifyDataNumber(quantityProductEnterSell)){
                    showMessage(!verifyDataNumber(quantityProductEnterSell));
                    return;
                }
                quantityProductEnterSell = parseInt(quantityProductEnterSell);
                SellProducts(products,identifierProducEnterSell,nameProductEnterSell,quantityProductEnterSell);
                showProducts(products);
                break;
            case 8:
                let identifierProducEnterBuy = enterIdentifierProduct(); // enter identifier for user
                if(!verifyDataNumber(identifierProducEnterBuy)){
                    showMessage(!verifyDataNumber(identifierProducEnterBuy));
                    return;
                }
                identifierProducEnterBuy = parseInt(identifierProducEnterBuy); // convert to float identifier
                const nameProductEnterBuy = enterNameProduct(); // enter name product
                let quantityProductEnterBuy = enterQuantityProduct();
                if(!verifyDataNumber(quantityProductEnterBuy)){
                    showMessage(!verifyDataNumber(quantityProductEnterBuy))
                    return;
                }
                quantityProductEnterBuy = parseInt(quantityProductEnterBuy);
                buyProducts(products,identifierProducEnterBuy,nameProductEnterBuy,quantityProductEnterBuy);
                showProducts(products);
                break;
            case 9:
                console.log("El valor total del inventario es:  ")
                calculateTotalValueInventory(products);
                break;
            case 10:
                console.log("Ordenamiento de productos: ");
                console.log(`
                1.Ordenar ascendentemente
                2.Ordenar descendentemente
                `)
                const optionSortedEnter = enterOptionSorted();
                if(!verifyDataNumber(optionSortedEnter)){
                    showMessage(verifyDataNumber(optionSortedEnter));
                    return;
                }
                switch(parseInt(optionSortedEnter)){
                    case 1:
                        sortedProductsAscendant(products);
                        break;
                    case 2:
                        sortedProductsDescendant(products);
                        break;
                    default:
                        console.log("Opción inválida!")
                }
                break;
            case 11:
                const badWord = ['palabra1', 'palabra2', 'palabra3', 'palabra4', 'palabra5'];
                const productWithBadWordIdentify = identifyProductWithBadWords(products,badWord);
                console.log(productWithBadWordIdentify);
                break;
            case 12:
                const greaterQuantity = 10;
                console.log("Reporte de productos-----");
                const productsQuantity = quantityProducts(products);
                const expensiveProducts =  productsExpensive(); //Products expensive
                const cheapProducts = productsCheap(); //Product cheap
                const withGreaterQuantityProduct = productsWithGreaterQuantity(products,greaterQuantity)
                const withSmallerQuantityProduct =  productWithSmallerQuantity(products,greaterQuantity);
                console.log(`
                Cantidad de productos ${productsQuantity}
                Total de los precios de los productos: $${calculateTotalValueInventory(products)} // Value total
                Productos caros ${expensiveProducts}
                Productos baratos ${cheapProducts}
                Productos con mayor cantidad ${withGreaterQuantityProduct}
                Productos con menor cantidad ${withSmallerQuantityProduct}`)
                break;
            case 13:
                flag = false;
                break;
            default:
                console.log("La opción es inválida!...");
        }

    }
}
const main = (flag) =>{
    challegengeThree(flag);
}
main(flag);