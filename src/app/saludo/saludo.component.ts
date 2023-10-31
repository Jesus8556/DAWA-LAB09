import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-saludo',
  templateUrl:'./saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  titulo: String = "Bienvenido a Angular";
  mensaje: String = "Este es un componente de saludo creado en Angular"

  constructor() {}
  ngOnInit(): void {
  }
}