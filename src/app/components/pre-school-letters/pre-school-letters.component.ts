import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pre-school-letters',
  templateUrl: './pre-school-letters.component.html',
  styleUrls: ['./pre-school-letters.component.scss']
})
export class PreSchoolLettersComponent {
  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  currentLetter: string = ''
  currentAnswer: string = ''
  answerCorrect: boolean = false

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getRandomLetter()
  }

  rand() {
    return this.dataService.rand(0, 26)
  }

  getRandomLetter() {
    this.currentLetter = this.letters[this.rand()]
  }

  checkAnswer() {
    return this.currentLetter === this.currentAnswer
  }

  onKeyup(event: KeyboardEvent) {
    this.currentAnswer = event.key.toUpperCase()
    this.answerCorrect = this.checkAnswer()

  }

}
