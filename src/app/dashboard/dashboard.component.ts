import { Items } from '../models/Items';
import { ServiceLinksService } from '../services/service-links.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,MatSlideToggleModule,RouterLinkActive,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private servLinks:ServiceLinksService){ }

  myitem:Items[]=[]
  vetor:string[]=[]
  angularImg:string = 'assets/angular.png';
  title:string = 'course_angular';
  myValueSearc:string
  valueDl:string 
 
  filllinks() {
    this.myitem = this.servLinks.fillItensLink() 
  }
   
  ngOnInit() {
 
    this.filllinks()
  }

  loadLinkRoute(){
    const txtBox = document.getElementById('txt').textContent
  
  }

}
