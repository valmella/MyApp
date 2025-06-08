import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  user = {
    name: 'Valentina Mella',
    email: 'valentina@example.com',
    bio: 'Desarrolladora móvil con Ionic + Angular.'
  };
}
