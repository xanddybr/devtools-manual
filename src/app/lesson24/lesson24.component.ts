import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson24',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lesson24.component.html',
  styleUrl: './lesson24.component.scss'
})
export class Lesson24Component {

  form01 = new FormGroup ({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })
}
