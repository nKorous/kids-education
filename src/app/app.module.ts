import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


import { TopbarComponent } from './components/topbar/topbar.component';
import { GradeHomeComponent } from './components/grade-home/grade-home.component';
import { PreSchoolHomeComponent } from './components/pre-school-home/pre-school-home.component';
import { FourthGradeMathComponent } from './components/fourth-grade-math/fourth-grade-math.component';
import { SecondGradeMathComponent } from './components/second-grade-math/second-grade-math.component';
import { PreSchoolMathComponent } from './components/pre-school-math/pre-school-math.component';
import { PreSchoolLettersComponent } from './components/pre-school-letters/pre-school-letters.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    GradeHomeComponent,
    PreSchoolHomeComponent,
    FourthGradeMathComponent,
    SecondGradeMathComponent,
    PreSchoolMathComponent,
    PreSchoolLettersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
