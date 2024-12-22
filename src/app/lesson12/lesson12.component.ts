import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson12',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson12.component.html',
  styleUrl: './lesson12.component.scss'
})
export class Lesson12Component {

  textOption:string[]=['Text black, small size and Arial font','Text red, large size and Courier font']

}
