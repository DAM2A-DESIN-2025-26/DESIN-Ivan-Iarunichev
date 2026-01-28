import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../shared/services/producto-service';
import { IonList, IonItem, IonThumbnail, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonThumbnail, IonLabel],
})
export class ListaProductosPage implements OnInit {

  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    let respuesta = this.productosService.getAll();
    respuesta.subscribe({
      next: (data) => {
        this.productos = data.products;
        console.log(data.products);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Completado');
      }
    });
  }
}
