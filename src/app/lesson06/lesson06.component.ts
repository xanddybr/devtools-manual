import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson06',
  standalone: true,
  imports: [],
  templateUrl: './lesson06.component.html',
  styleUrl: './lesson06.component.scss'
})
export class Lesson06Component {

  addmessage() {
    document.getElementById('message').append("Add message in body div")
  }

}
