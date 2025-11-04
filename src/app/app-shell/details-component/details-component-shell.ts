import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'details-component-shell',
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './details-component-shell.html',
  styleUrl: './details-component-shell.css'
})
export class DetailsComponentShell {

}
