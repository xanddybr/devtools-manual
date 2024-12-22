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
    const txtbox = document.getElementById('message')
    txtbox.textContent == "" ? txtbox.textContent = "Well Come" : txtbox.textContent = ""
  }

}
