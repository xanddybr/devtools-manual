import { ServiceLinksService } from './../services/service-links.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../models/Contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson24',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lesson24.component.html',
  styleUrl: './lesson24.component.scss'
})
export class Lesson24Component implements OnInit {

  constructor(private service:ServiceLinksService){}

  contact:Contact[]=[]
  index:number
  btnRemove:boolean
  btnUpdate:boolean
  btnRegister:boolean

  form01 = new FormGroup ({
    name:  new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  registerContact ():void {
    this.contact.push(this.form01.value as Contact)
    this.form01.reset()
  
  }

  updateContact():void {
    this.contact[this.index] = this.form01.value as Contact
    this.btnRemove = true
    this.btnUpdate = true
    this.cancelForm()
  }

  removeContact():void {
    this.contact.splice(this.index,1)
    this.btnRemove = true
    this.btnUpdate = true
    this.cancelForm()
  }

  selectContact(index:number):void {
    this.index = index
    this.form01.setValue({
      name: this.contact[index].name,
      phone: this.contact[index].phone,
      email: this.contact[index].email
    })
    this.btnRegister = true
    this.contact.length >= 0 ? this.btnRemove = false : this.btnRemove = true
    this.contact.length >= 0 ? this.btnUpdate = false : this.btnUpdate = true
  }

  cancelForm():void {
    this.form01.reset()
    this.btnRegister = false
    this.btnRemove = true
    this.btnUpdate = true
    
  }

  loadContacts():void {
    this.service.getContact().subscribe(value => { this.contact = value })
    this.btnRemove = true
    this.btnUpdate = true

  }

  ngOnInit():void {
    this.loadContacts()
  }


}
