import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  constructor(private router: Router) {}

  navToRoute(route: string) {
    this.router.navigate([`/gradeHome/${route}`])
  }

}
