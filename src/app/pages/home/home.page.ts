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
      imagen: 'https://images.unsplash.com/photo-1605478073376-ec7fa4fc29df?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Café Brasil Santos',
      descripcion: 'Suave y achocolatado, perfecto para espresso.',
      precio: 8200,
      imagen: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Café Guatemala Antigua',
      descripcion: 'Aromático y con notas a cacao. Tostado medio.',
      precio: 9100,
      imagen: 'https://images.unsplash.com/photo-1470137430626-983a37b8ea46?auto=format&fit=crop&w=600&q=80'
    },
    {
      nombre: 'Café Perú Orgánico',
      descripcion: 'Dulce, suave y con aroma herbal.',
      precio: 8800,
      imagen: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80'
    }
  ];

  productosFiltrados = [...this.productos];

  heartIcon = heartOutline;
  cartIcon = cartOutline;

  meGusta(producto: any) {
    alert(`¡Te gusta el café ${producto.nombre}!`);
  }

  agregarAlCarrito(producto: any) {
    alert(`Agregado al carrito: ${producto.nombre}`);
  }

  buscarProducto(event: any) {
    const texto = event.detail.value?.toLowerCase() || '';
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.descripcion.toLowerCase().includes(texto)
    );
  }
}
