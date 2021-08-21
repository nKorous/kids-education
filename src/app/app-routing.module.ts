import { PreSchoolLettersComponent } from './components/pre-school-letters/pre-school-letters.component';
import { PreSchoolMathComponent } from './components/pre-school-math/pre-school-math.component';
import { SecondGradeMathComponent } from './components/second-grade-math/second-grade-math.component';
import { FourthGradeMathComponent } from './components/fourth-grade-math/fourth-grade-math.component';
import { PreSchoolHomeComponent } from './components/pre-school-home/pre-school-home.component';
import { GradeHomeComponent } from './components/grade-home/grade-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'gradeHome/:id', component: GradeHomeComponent },
  { path: 'preSchoolHome', component: PreSchoolHomeComponent },
  { path: 'fourthGradeMath', component: FourthGradeMathComponent },
  { path: 'secondGradeMath', component: SecondGradeMathComponent },
  { path: 'preSchoolNumbers', component: PreSchoolMathComponent },
  { path: 'preSchoolLetters', component: PreSchoolLettersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
