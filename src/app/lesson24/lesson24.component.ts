import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../models/Contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson24',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lesson24.component.html',
  styleUrl: './lesson24.component.scss'
})
export class Lesson24Component {

  contact:Contact[]=[]


  form01 = new FormGroup ({
    name:  new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  registerContact (): void {
    this.contact.push(this.form01.value as Contact)
    this.form01.reset()
  }

  cleanForm():void {
    this.form01.reset()
  }

}
