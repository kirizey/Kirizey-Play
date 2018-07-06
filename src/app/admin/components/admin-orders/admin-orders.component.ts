import { Order } from "../../../shared/models/order";
import { OrderService } from "../../../shared/services/order.service";
import { Component, OnInit } from "@angular/core";
import { fade } from "../../../animations/animations";

@Component({
  selector: "app-admin-orders",
  templateUrl: "./admin-orders.component.html",
  styleUrls: ["./admin-orders.component.css"],
  animations: [fade]
})
export class AdminOrdersComponent {
  orders$;

  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders();
  }
}
