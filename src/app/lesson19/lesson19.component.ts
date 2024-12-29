import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson19',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lesson19.component.html',
  styleUrl: './lesson19.component.scss'
})
export class Lesson19Component {

  name:string = ''
  phone:number
}
