import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson09',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson09.component.html',
  styleUrl: './lesson09.component.scss'
})
export class Lesson09Component {
  courses:string[]=['html','css','javascript']
}
