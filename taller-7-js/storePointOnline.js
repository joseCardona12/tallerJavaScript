import { User,Administrador,ProductDigital,ProductPhysical,Activity,CategoryProduct,ExchangeOrder } from "./storePointOnlinePrototyps.js";

const user = new User("jose","jose@gmail.com", "123AN",12);
user.accumPoint();
user.redeemProduct();
user.showData();
//-------------------------------------------------->
const administrador = new Administrador("juan","juan@gmail.com", "12AA");
administrador.addProduct();
administrador.deleteProduct();
administrador.modifyProduct();

// ----Accediendo a los métodos de los función constructora padre
user.talk();
user.walk();
user.decide();
administrador.talk();
administrador.walk();
administrador.decide();
//---------------------------------------------------->
const productPhysical = new ProductPhysical();
productPhysical.updateStock();
productPhysical.sendProduct();
const productDigital = new ProductDigital("celular", 12, 76,100,"product/intento1"); 
productDigital.download();
productDigital.obtainInfo();
//------------------------------------------------------>
const activity = new Activity();
activity.CompleteActivity();
const categoryProduct = new CategoryProduct();
categoryProduct.listProducts();
const exchangeOrder = new ExchangeOrder();
exchangeOrder.confirmProduct();
exchangeOrder.cancelProduct();
