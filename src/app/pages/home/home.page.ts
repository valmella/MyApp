import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { heartOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
})
export class HomePage {
  productos = [
    {
      nombre: 'Café Etíope Yirgacheffe',
      descripcion: 'Notas florales y cítricas. Tostado medio.',
      precio: 8900,
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Café Colombiano Supremo',
      descripcion: 'Cuerpo balanceado y dulce aroma. Tostado suave.',
      precio: 7500,
      imagen: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Café Kenia AA',
      descripcion: 'Sabor intenso, con notas frutales. Tostado oscuro.',
      precio: 9700,
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    }
  ];

  heartIcon = heartOutline;
  cartIcon = cartOutline;

  meGusta(producto: any) {
    alert(`¡Te gusta el café ${producto.nombre}!`);
  }

  agregarAlCarrito(producto: any) {
    alert(`Agregado al carrito: ${producto.nombre}`);
  }
}
