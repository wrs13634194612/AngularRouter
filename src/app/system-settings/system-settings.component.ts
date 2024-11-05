import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './system-settings.component.html',
  styleUrl: './system-settings.component.css'
})
export class SystemSettingsComponent {

}
