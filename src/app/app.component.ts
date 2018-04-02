import { Component } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [QuestionService]
})
export class AppComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  value1 = '1';
  value2 = '1';
  value3 = '1';

  // 输入框的全部值
  onKeyOne(event: any) {
    this.value1 += event.target.value + ' | ';
  }

  // 每次输入的那个值
  onKeyTwo(event: any) {
    this.value2 += event.key + ' | ';
  }

  onKey(value: string) {
    this.value3 = value
  }

}
