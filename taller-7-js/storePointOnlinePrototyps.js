function Person(name,email,key){ //Entidad Person
    this.name = name;
    this.email = email;
    this.key = key;
    this.talk = function(){
        console.log("Estoy hablando");
    }
    this.walk = function(){
        console.log("Estoy caminando");
    }
    this.decide = function(){
        console.log("Estoy decidiendo");
    }
}
export function User(name,email,key,pointAccum){ //Entidad User 
    Person.call(this,name,email,key); //Generar herencia - llamado
    this.pointAccum = pointAccum;
    this.accumPoint = function(){
        console.log("Acumulando puntos...");
    }
    this.redeemProduct = function(){
        console.log("Canjeando puntos");
    }
    this.showData = function(){
        console.log(`
        Usuario
        Nombre: ${this.name}
        correo: ${this.email}
        Clave: ${this.key}
        Puntos acumulanles: ${this.pointAccum}
        `)
    }
}
export function Administrador(name,email,key){ //Entidad Administrador
    Person.call(this,name,email,key);
    this.addProduct = function(){
        console.log(`
        Nombre: ${this.name}
        Correo: ${this.email}
        Clave: ${this.key}
        `);
        console.log("Estoy agregando un producto...");
    }
    this.modifyProduct = function(){
        console.log("Estoy modificando un producto...");
    }
    this.deleteProduct = function(){
        console.log("Estoy eliminando un producto");
    }
}
User.prototype = Object.create(Person.prototype);
Administrador.prototype = Object.create(Person.prototype);
//------------------------------->
function Product(name,quantityAvailable,pointNecessary,stock){
    this.name = name;
    this.quantityAvailable = quantityAvailable;
    this.pointNecessary = pointNecessary;
    this.stock = stock;
    this.obtainInfo = function(){
        console.log(`
        Información producto
        Nombre: ${this.name}
        Cantidad disponible: ${this.quantityAvailable}
        Puntos necesarios: ${this.pointNecessary}
        Stock: ${this.stock}
        `)
    }
}
export function ProductPhysical(name,pointNecessary,quantityAvailable,stock,price){
    Product.call(this,name,pointNecessary,quantityAvailable,stock);
    this.price = price;
    this.updateStock = function(){
        console.log(`
        Nombre del producto: ${this.name}
        Actualizando stock: ${this.stock}
        `)
    }
    this.sendProduct = function(){
        console.log("Enviando productos");
    }
}
export function ProductDigital(name,pointNecessary,quantityAvailable,stock,url){
    Product.call(this,name,pointNecessary,quantityAvailable,stock);
    this.url = url;
    this.download = function(){
        console.log("Descargando!...");
    }
}
ProductPhysical.prototype = Object.create(Product.prototype);
ProductDigital.prototype = Object.create(Product.prototype);
//--------------------------------->
export function Activity(type,pointAwarded){
    this.type = type;
    this.pointAwarded = pointAwarded;
    this.CompleteActivity = function(){
        console.log("Completando actividad...");
    }
}
//---------------------------------->
export function CategoryProduct(name,description){
    Product.call(this,name);
    this.description = description;
    this.listProducts = function(){
        console.log("Listando productos");
    }
}
//------------------------------------>
export function ExchangeOrder(name,product,date){
    this.name = name;
    this.product = product;
    this.date = date;
    this.confirmProduct = function(){
        console.log("Confirmar product");
    }
    this.cancelProduct = function(){
        console.log("Cancelando");
    }
}






