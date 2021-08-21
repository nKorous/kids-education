import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-grade-home',
  templateUrl: './grade-home.component.html',
  styleUrls: ['./grade-home.component.scss']
})
export class GradeHomeComponent implements OnInit {
  grade: string = ''


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.grade = this.activatedRoute.snapshot.params.id;
  }

  ngOnDestory() {
    this.grade = '';
  }

  navToGradeMath() {
    this.router.navigate([`${this.grade}GradeMath`])
  }

}
