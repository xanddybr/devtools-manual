import { ServiceLinksService } from './services/service-links.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Cep } from './models/Cep';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  constructor(private servLinks:ServiceLinksService){ }

  ceps:Cep[];
  myitem:any;
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
