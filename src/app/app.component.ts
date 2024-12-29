import { Items } from './models/Items';
import { ServiceLinksService } from './services/service-links.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink, MatSlideToggleModule,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  constructor(private servLinks:ServiceLinksService){ }

  myitem:Items[]=[]
  angularImg:string = 'assets/angular.png';
  title:string = 'course_angular';
  

  filllinks() {
    this.myitem = this.servLinks.fillItensLink() 
  }
   


   
  ngOnInit() {
    this.filllinks()
    
  }



}
