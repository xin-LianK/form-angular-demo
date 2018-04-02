import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, DynamicFormComponent, DynamicFormQuestionComponent,
    HeroFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}