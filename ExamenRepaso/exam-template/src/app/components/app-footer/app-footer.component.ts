// src/app/components/app-footer/app-footer.component.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {
  currentYear = new Date().getFullYear();
}
