import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonImg, IonIcon
} from '@ionic/angular/standalone';
import { heartOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonImg, IonIcon
  ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  heartIcon = heartOutline;
  cartIcon = cartOutline;

  productos = [
    {
      id: 1,
      nombre: 'Café Etiopía Guji',
      descripcion: 'Notas florales, limón y miel. Proceso lavado.',
      precio: 8900,
      imagen: 'assets/img/etiopia.jpg',
    },
    {
      id: 2,
      nombre: 'Café Colombia Huila',
      descripcion: 'Dulce, acidez media, notas de panela y frutas rojas.',
      precio: 8200,
      imagen: 'assets/img/colombia.jpg',
    },
    {
      id: 3,
      nombre: 'Café Kenya AA',
      descripcion: 'Intenso, con notas a frutos del bosque y cuerpo medio.',
      precio: 9500,
      imagen: 'assets/img/kenya.jpg',
    }
  ];

  agregarAlCarrito(producto: any) {
    console.log('Agregado al carrito:', producto.nombre);
    // Aquí puedes implementar localStorage o navegación
  }

  meGusta(producto: any) {
    console.log('¡Te gustó:', producto.nombre);
  }
}
