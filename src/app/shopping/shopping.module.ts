import { SharedModule } from "./../shared/shared.module";
import { AuthGuard } from "shared/services/auth-guard.service";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { NgModule } from "@angular/core";

import { CheckOutComponent } from "./components/check-out/check-out.component";
import { MyOrdersComponent } from "./components/my-orders/my-orders.component";
import { OrderSuccessComponent } from "./components/order-success/order-success.component";
import { ProductFilterComponent } from "./components/products/product-filter/product-filter.component";
import { ProductsComponent } from "./components/products/products.component";
import { ShippingFormComponent } from "./components/shipping-form/shipping-form.component";
import { ShoppingCartSummaryComponent } from "./components/shopping-cart-summary/shopping-cart-summary.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

let routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  {
    path: "check-out",
    component: CheckOutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "order-success/:id",
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "my/orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      {
        path: "check-out",
        component: CheckOutComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "order-success/:id",
        component: OrderSuccessComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuard]
      }
    ]),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    SidebarComponent
  ]
})
export class ShoppingModule {}
