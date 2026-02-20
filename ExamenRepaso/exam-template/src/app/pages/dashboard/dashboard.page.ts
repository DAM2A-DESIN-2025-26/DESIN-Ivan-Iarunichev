import { Component, inject } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';
import { EnvironmentInjector } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, AppHeaderComponent, AppFooterComponent],
  templateUrl: './dashboard.page.html'
})
export class DashboardPage {
  protected environmentInjector = inject(EnvironmentInjector);
}
