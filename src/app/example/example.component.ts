import { Component } from "@angular/core";


@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.css"]
})
export class ExampleComponent {
  showMe: boolean = true;
  status: boolean = false;
  names= 'Sejal Banta';

  items = [
    { name: "laptops" },
    { name: "brushes" },
    { name: "sofas" },
    
  ];

  onclick() {
    this.showMe = !this.showMe;
  }

  clickonme() {
    this.status = !this.status;
  }
}