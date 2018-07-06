import { Observable } from "rxjs/Observable";
import { ShoppingCart } from "../../../shared/models/shopping-cart";
import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import { Component, OnInit } from "@angular/core";
import { fade } from "../../../animations/animations";

@Component({
  selector: "app-check-out",
  templateUrl: "./check-out.component.html",
  styleUrls: ["./check-out.component.css"],
  animations: [fade]
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }
}
