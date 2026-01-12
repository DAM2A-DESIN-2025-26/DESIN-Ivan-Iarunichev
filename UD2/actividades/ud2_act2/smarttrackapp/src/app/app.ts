import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmartTrackNavbar } from './component/smart-track-navbar/smart-track-navbar';
import { UserListComponent } from "./component/user-list-component/user-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmartTrackNavbar, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smarttrackapp');
}
