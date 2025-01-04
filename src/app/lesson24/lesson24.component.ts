import { ServiceLinksService } from './../services/service-links.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/Contact';

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
  btnRemove:string
  btnRegister:string
  btnUpdate:string
  txtname:string
  txtphone:string
  txtemail:string
  labelBtnUpdate:string = 'Update'
  labelBtnRegister:string = 'New'

  form01 = new FormGroup ({
    id: new FormControl(''),
    name:  new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  registerContact ():void {
    //this.service.registerContact(this.form01.value as Contact).subscribe((v)=> { this.contact.push(v)})
    this.registerRoutine()
  
  }

  updateContact():void {
    this.service.updateContact(this.form01.value as Contact).subscribe(objUpdated =>{
      let idxChanged = this.contact.findIndex(obj => {
          return this.form01.value.id === obj.id
      }) 
     this.contact[idxChanged] = objUpdated
    })
  }

  removeContact():void {

    this.service.deleteContact(this.form01.value.id).subscribe(()=>{
      let idxRemoved = this.contact.findIndex(obj => {
        return obj.id === this.form01.value.id
      })
      this.contact.splice(idxRemoved, 1)
    })
    this.cancelForm()
  }

  selectContact(index:number):void {
    this.form01.setValue({
      id:    this.contact[index].id,
      name:  this.contact[index].name,
      phone: this.contact[index].phone,
      email: this.contact[index].email
    })
    this.btnRegister = 'hidden'
  }

  cancelForm():void {
    this.form01.reset()

  }

  loadContacts():void {
    this.service.getContact().subscribe(result => { this.contact = result})
  }

  ngOnInit():void {
    this.loadContacts()
    this.textBoxRotines("locked")
  }

  updateRotine(option:boolean){
    //option === false ? this.btnUpdate = 'readonly' : this.btnUpdate = ''
  }

  textBoxRotines(option:string):void {
    if(option === 'locked'){
      this.txtname = 'readonly'
      this.txtphone = 'readonly'
      this.txtemail = 'readonly'
    } 

    if(option === 'unlocked'){
      this.txtname = ''
      this.txtphone = ''
      this.txtemail = ''
    } 
  }

  registerRoutine(){
    this.textBoxRotines('unlocked')
  }

}
