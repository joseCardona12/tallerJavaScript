function Person(name,email,key){ // Entidad principal / fuerte
    this.name = name;
    this.email = email;
    this.key = key;
    this.authentication = function(){
        console.log("Autenticando");
        console.log(`
        Persona
        Nombre: ${this.name}
        Correo: ${this.email}
        Clave: ${this.key}
        `)
    }
}
export function Delivery(name,email,key,vehicle,available){ //Entidad derivada de Person
    Person.call(this,name,email,key);
    this.vehicle = vehicle;
    this.available = available;

    this.acceptShipment = function(){
        console.log("Aceptar envío");
    }
    this.updateLocation = function(){
        console.log("Actualizar dirección...");
    }
    this.completeDelivery = function(){
        console.log("Completar entrega");
    }
    this.updateState = function(){
        console.log("Actualizar estado...");
    }
}
export function Client(name,email,key,address,cellphone){ //Entidad derivada de Client
    Person.call(this,name,email,key);
    this.address = address;
    this.cellphone = cellphone;
    this.makeOrder = function(){
        console.log("Hacer Pedido");
    }
    this.showHistoricalOrder = function(){
        console.log("Ver el historial de los pedidos");
    }
}
Delivery.prototype = Object.create(Person.prototype);
Client.prototype = Object.create(Person.prototype);
//--------------------------------------->
function Restaurant(name){
    this.name = name;
    this.addDish = function(){
        console.log("Agregar plato");
    }
}
export function RestaurantPhysical(name,address,menuPhysical){
    Restaurant.call(this,name);
    this.address = address;
    this.menuPhysical = menuPhysical;
    this.deleteDish = function(){
        console.log("Eliminar plato");
    }
}
export function RestaurantDigital(name,menuQR){
    Restaurant.call(this,name);
    this.menuQR = menuQR;
}
RestaurantPhysical.prototype = Object.create(Restaurant.prototype);
RestaurantDigital.prototype = Object.create(Restaurant.prototype);
//---------------------------->
export function Dish(name,price,ingredients){
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.obtainInfo = function(){
        console.log("Obtener info");
    }
}
export function MenuQr(dish,url){
    this.dish = dish;
    this.url = url;
    this.generateQR = function(){
        console.log("Generar QR");
    }
}
export function MenuPhysical(dish){
    this.dish = dish;
    this.print = function(){
        console.log("Imprimir")
    }
    this.visualize = function(){
        console.log("Visualizar");
    }
}
export function Order(client,restaunt,detailsOrder,stateOrder){
    this.client = client;
    this.restaunt = restaunt;
    this.detailsOrder = detailsOrder;
    this.stateOrder = stateOrder;
    this.updateState = function(){
        console.log("Actualizar state")
    }
    this.calculateTotal = function(){
        console.log("Calcular el total")
    }

}