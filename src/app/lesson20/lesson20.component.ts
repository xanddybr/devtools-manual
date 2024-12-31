import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson20',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lesson20.component.html',
  styleUrl: './lesson20.component.scss'
})
export class Lesson20Component {

  form1 = new FormGroup({ 
    name: new FormControl(''),
    phone: new FormControl('')
  })

}
