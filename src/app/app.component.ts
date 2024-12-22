import { ServiceLinksService } from './services/service-links.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {



  constructor(private servLinks:ServiceLinksService){
    
  }
  
  myitem:any
  angularImg:string = 'assets/angular.png'
  title:string = 'course_angular';


  filllinks() {
    this.myitem = this.servLinks.fillItensLink() 
  }
 
  ngOnInit() {
    this.filllinks()
  }


}
