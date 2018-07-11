import { ShoppingCart } from "../../../shared/models/shopping-cart";
import { Observable } from "rxjs/Observable";
import { ShoppingCartService } from "../../../shared/services/shopping-cart.service";
import { AppUser } from "../../../shared/models/app-user";
import { AuthService } from "../../../shared/services/auth.service";
import { Component, OnInit, HostListener } from "@angular/core";
import { ProductsComponent } from "../../../shopping/components/products/products.component";
import { SidebarService } from "shared/services/sidebar.service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService,
    private productsComponent: ProductsComponent,
    private sidebarService: SidebarService
  ) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => (this.appUser = appUser));
    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

  @HostListener('openSidebar')
  openSidebar() {
    this.sidebarService.toggle();
  }
}
