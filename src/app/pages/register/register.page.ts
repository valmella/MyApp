import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  email: string = '';
  password: string = '';

  register() {
    if (this.username.trim() === '' || this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Guardar datos en localStorage como un objeto JSON
    const user = {
      username: this.username,
      email: this.email,
      password: this.password,  // Solo para demo; no guardes contraseñas en texto plano en producción
    };

    // Guardar el usuario
    localStorage.setItem('registeredUser', JSON.stringify(user));

    alert('Registro exitoso');
    
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
