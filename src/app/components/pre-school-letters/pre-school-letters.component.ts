import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pre-school-letters',
  templateUrl: './pre-school-letters.component.html',
  styleUrls: ['./pre-school-letters.component.scss']
})
export class PreSchoolLettersComponent {
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  rand() {
    return Math.floor(Math.random() * (26 - 0))
  }

  getRandomLetter() {
    return this.letters[this.rand()]
  }

}
