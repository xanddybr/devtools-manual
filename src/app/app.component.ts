import { ServiceLinksService } from './services/service-links.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Cep } from './models/Cep';
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

  ceps:Cep[];
  myitem:any;
  frutas:string[]=['mamão','pera','uva','maçã']
  angularImg:string = 'assets/angular.png';
  title:string = 'course_angular';
  
  

  filllinks() {
    this.myitem = this.servLinks.fillItensLink() 
  }
   

  getCep() {
    this.servLinks.getCep().subscribe({
      next:(v)=> this.ceps = v, 
      error:(e)=> console.log("Error try it ", e), 
      complete:()=> console.log("complete load data!")})
  } 
   
  ngOnInit() {
    this.getCep()
    this.filllinks()
    
  }



}
