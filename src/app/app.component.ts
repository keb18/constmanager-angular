import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  path = '';
  checkPath: boolean;
  removeNavFrom = [
    '',
    '/login',
    '/register'
  ];

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((val) => {
      this.path = this.location.path();
      // console.log(this.path);
      this.checkPath = this.removeNavFrom.includes(this.path);
      // console.log(this.checkPath);
    });
   }
}
