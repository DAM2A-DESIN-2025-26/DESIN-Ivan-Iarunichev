import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonApp, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonRouterOutlet, IonApp, HttpClientModule]
})
export class AppComponent {
  constructor() {}
}
