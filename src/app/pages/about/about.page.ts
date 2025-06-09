import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { IonicModule, AnimationController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IonicModule, RouterModule], // 👈 AGREGA RouterModule AQUÍ
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements AfterViewInit {
  @ViewChild('title', { read: ElementRef }) title!: ElementRef;
  @ViewChild('pulseBtn', { read: ElementRef }) pulseBtn!: ElementRef;

  constructor(
    private animationCtrl: AnimationController,
    private router: Router // 👈 INYECTA Router AQUÍ
  ) {}

  ngAfterViewInit() {
    // Animación Fade-in para el título
    const fadeIn = this.animationCtrl.create()
      .addElement(this.title.nativeElement)
      .duration(1500)
      .fromTo('opacity', '0', '1');
    fadeIn.play();

    const pulse = this.animationCtrl.create()
      .addElement(this.pulseBtn.nativeElement)
      .duration(1000)
      .iterations(Infinity)
      .fromTo('transform', 'scale(1)', 'scale(1.1)')
      .fromTo('opacity', '1', '0.7');
    pulse.play();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
