import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { BsNavbarComponent } from "./components/bs-navbar/bs-navbar.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFilterComponent } from "../shopping/components/products/product-filter/product-filter.component";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([])],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [BsNavbarComponent],
  providers: [ProductFilterComponent]
})
export class CoreModule {}
