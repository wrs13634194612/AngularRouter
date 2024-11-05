import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { MY_TOKEN } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: MY_TOKEN, useValue: 'my-sample-token' }],
})
export class AppComponent {
  title = 'untitled4';
}
