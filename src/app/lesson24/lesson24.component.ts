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
  labelBtnRegister:string = 'New Register'
  counter:number
  idtab:number
  bloked:boolean=true
  

  

  form01 = new FormGroup ({
    id:    new FormControl(''),
    name:  new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  counterId():any {
  let soma = this.counter++
 }

  registerContact ():void {
    this.service.registerContact(this.form01.value as Contact).subscribe((v)=> { this.contact.push(v)})
    console.log(this.counter)
  }

  updateContact() {
    this.service.updateContact(this.form01.value as Contact).subscribe(objUpdated =>{
      let idxChanged = this.contact.findIndex(obj => {
          return  obj === this.form01.value
      })

     this.contact[idxChanged] = objUpdated
     
    })
  }

  removeContact():void {

    this.service.deleteContact(this.form01.value.id).subscribe(()=>{
      let idxRemoved = this.contact.findIndex(obj => {
        return obj === this.form01.value
      })
      this.contact.splice(idxRemoved, 1)
    })
    this.cancelForm()
  }

  selectContact(idx:number):void {
    this.idtab = idx
    this.form01.setValue({
      id:    this.contact[idx].id,
      name:  this.contact[idx].name,
      phone: this.contact[idx].phone,
      email: this.contact[idx].email
    })
  }

  cancelForm():void {
    this.form01.reset()
  }

  loadContacts():void {
    this.service.getContact().subscribe(result => { this.contact = result})
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

  }

  ngOnInit():void {
    this.loadContacts()

  }

}
