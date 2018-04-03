import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { states, Address, Hero } from '../data-model';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  ngOnChanges() {
    this.rebuildForm();
  }
  @Input() hero: Hero;
  heroForm: FormGroup;
  states = states;
  // heroForm = new FormGroup({
  // FormControl 构造函数接收三个可选参数： 初始值、验证器数组和异步验证器数组。
  // name: new FormControl()
  // })

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // 赋值给任何表单控件之前先检查数据对象的值。
    this.heroForm.setValue({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    })
    // 不会检查缺失的控件值，并且不会抛出有用的错误信息。
    this.heroForm.patchValue({
      name: this.hero.name
    });
  }
  createForm() {
    // 它接受一个对象，对象的键和值分别是 FormControl 的名字和它的定义。 在这个例子中，name 控件的初始值是空字符串。
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      // power: '',
      // sidekick: ''
    });
  }
  // 重置英雄的名字和地址。
  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name,
      address: this.hero.addresses[0] || new Address()
    });
  }
}
