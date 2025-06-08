import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  ngOnInit() {
    
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  login() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      alert('Por favor, complete ambos campos.');
      return;
    }
    
    // localStorage
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);

    alert('Inicio de sesión exitoso');
  }
}
