import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-asset-system',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './asset-system.component.html',
  styleUrl: './asset-system.component.css'
})
export class AssetSystemComponent {

}
