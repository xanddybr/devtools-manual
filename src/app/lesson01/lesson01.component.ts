import { Cep } from './../models/Cep';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-lesson01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lesson01.component.html',
  styleUrl: './lesson01.component.scss'
})
export class Lesson01Component implements OnInit {

  ngOnInit(): void {
   
    const button1 = document.getElementById('button')

    button1.addEventListener('click', ()=> {
      this.loadData()
    })
  }

  dataCep:Cep[]=[]

  loadData(){
    const url = "https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/"
    fetch(url)
    .then(response => {
      if(!response.ok) {
        alert('erro ao carregar a lista de ceps')
      }
      response.json()
      .then(data => { if(this.dataCep.length == 0 ){
        this.dataCep = data as Cep[]
      } })
      .finally(()=>{console.log('Concluido com sucesso!')})
    })
    
  }




}
