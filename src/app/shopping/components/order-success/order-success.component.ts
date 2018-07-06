import { Component, OnInit } from "@angular/core";
import { fade } from "../../../animations/animations";

@Component({
  selector: "app-order-success",
  templateUrl: "./order-success.component.html",
  styleUrls: ["./order-success.component.css"],
  animations: [fade]
})
export class OrderSuccessComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
