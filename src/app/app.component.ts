import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Sample-app';

  constructor(private router: Router) { }

  public navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
