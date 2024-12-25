import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lesson10.component.html',
  styleUrl: './lesson10.component.scss'
})

export class Lesson10Component {


optionsCourse:string[]=['html','Css','Js']
selectedValue:string = ''
course:string = ''


  selecteOption(){
    this.course = this.selectedValue
  }

  


}


