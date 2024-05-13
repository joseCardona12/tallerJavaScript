import { Delivery,Client} from "./foodDeliveryServicePrototyps.js";
const delivery = new Delivery("jose","jose@gmail.com", "AA1");
delivery.completeDelivery();
delivery.updateLocation();
delivery.updateState();
delivery.acceptShipment();
//Accediendo a su prototipo y sus métodos
delivery.authentication();
const client = new Client("carlos","carlos@gmail.com", "HH1");
client.makeOrder();
client.showHistoricalOrder();
client.authentication();
//---------------------------->

