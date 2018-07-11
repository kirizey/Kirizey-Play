import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFilterComponent } from "../shopping/components/products/product-filter/product-filter.component";
import { ProductsComponent } from "../shopping/components/products/products.component";
import { SidebarService } from "shared/services/sidebar.service";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [BsNavbarComponent, LoginComponent],
  exports: [BsNavbarComponent],
  providers: [ProductFilterComponent, SidebarService, ProductsComponent]
})
export class CoreModule {}
