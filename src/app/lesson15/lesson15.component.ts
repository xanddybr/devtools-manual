import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson15',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson15.component.html',
  styleUrl: './lesson15.component.scss'
})
export class Lesson15Component {

  nomes:string[] = ['Alexandre', 'Ana', 'Danilo', 'Camila'];

}
