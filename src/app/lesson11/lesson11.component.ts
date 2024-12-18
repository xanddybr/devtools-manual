import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson11',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson11.component.html',
  styleUrl: './lesson11.component.scss'
})
export class Lesson11Component {

  optionColor:string = 'blue'
  optionText:string[] = ['very','very','good']

}
