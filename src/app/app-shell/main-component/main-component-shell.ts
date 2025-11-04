import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'main-component-shell',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './main-component-shell.html',
  styleUrl: './main-component-shell.css'
})
export class MainComponentShell {

}
