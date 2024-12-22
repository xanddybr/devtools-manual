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



  constructor(private servLinks:ServiceLinksService){
    
  }
  
  cep:any
  myitem:any
  angularImg:string = 'assets/angular.png'
  title:string = 'course_angular';


  filllinks() {
    this.myitem = this.servLinks.fillItensLink() 
  }

  getCep() {
    this.servLinks.getCep().subscribe({
      next:(v) => this.cep = v,
      error:(e) => console.log(e,"erro ao efetuar a requisição na API"),
      complete:()=> console.log("Dados carregados com sucesso!")
    })
  }
   
  ngOnInit() {
    this.filllinks()
    this.getCep()
  }



}
