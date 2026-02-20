import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, RouterLink],
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {}
