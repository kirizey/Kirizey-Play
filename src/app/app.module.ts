import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { AngularFireModule } from "angularfire2";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from "./../environments/environment.prod";
import { AdminModule } from "./admin/admin.module";
import { AdminAuthGuard } from "./admin/services/admin-auth-guard.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/components/login/login.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsComponent } from "./shopping/components/products/products.component";
import { ShoppingModule } from "./shopping/shopping.module";
import { PreloaderComponent } from "./core/preloader/preloader.component";

let routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  declarations: [AppComponent, PreloaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: "", component: ProductsComponent },
      { path: "login", component: LoginComponent }
    ]),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
