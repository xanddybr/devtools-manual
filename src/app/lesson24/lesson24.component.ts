import { ServiceLinksService } from './../services/service-links.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';
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

  form01 = new FormGroup ({
    id:    new FormControl(''),
    name:  new FormControl('',[Validators.required]),
    phone: new FormControl(''),
    email: new FormControl('')
  })

  contact:Contact[]=[]
  classTextBox:string

  btnDelete:boolean
  btnRegister:boolean
  btnUpdate:boolean
  btnCancel:boolean
  btnSelect:boolean
  inputReadOnly:string
  labelBtnUpdate:string
  labelBtnRegister:string 
  labelBtnDelete:string
  arrayCount:number
  idtab:number 
  bloked:boolean = true
  
  registerContact ():void {

    switch (this.labelBtnRegister) {
      case "New":
        let c = this.contact.length + 1
        this.form01.setValue({
        id:  c.toString(),
        name:  '',
        phone: '',
        email: ''
      })
      this.btnSelect = true
      this.btnCancel = false
      this.labelBtnRegister = "Save"
      this.classTextBox = "form-control"
      break;

     case "Save":
      this.service.registerContact(this.form01.value as Contact).subscribe((v)=> {this.contact.push(v)})
      this.classTextBox = "form-control inputReadOnly"
      this.cancelForm()
      break;
    }
  }
 
  updateContact() {

    switch (this.labelBtnUpdate){
      case "Update" :
        this.labelBtnUpdate = "Confirm"
        this.classTextBox = "form-control"
        this.btnDelete = true
        this.btnSelect = true
      break;

      case "Confirm" :
        if(this.form01.valid){
        this.service.updateContact(this.form01.value as Contact).subscribe(objUpdated =>{
          let idxChanged = this.contact.findIndex(obj => {
              return this.form01.value.id === obj.id         
        })
        this.contact[idxChanged] = objUpdated
        })
        } else {
          this.form01.hasError
        }
        
        
        this.labelBtnUpdate = "Update"
        this.classTextBox = "form-control inputReadOnly"
        this.btnDelete = false
        this.btnRegister = true
        this.btnSelect = false
        this.btnCancel = false
      
      break;           
    }
   
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

    this.btnUpdate = false
    this.btnDelete = false
    this.btnCancel = false
    this.btnRegister = true
    
  }

  cancelForm():void {
    this.form01.reset()
    this.labelBtnUpdate = 'Update'
    this.labelBtnRegister = 'New'
    this.labelBtnDelete  = "Delete"
    this.classTextBox = "form-control inputReadOnly"
    this.btnUpdate = true
    this.btnDelete = true
    this.btnCancel = true
    this.btnSelect = false
    this.btnRegister = false   
  }

  loadContacts():void {
    this.service.getContact().subscribe(result => { this.contact = result})
    this.arrayCount = this.contact.length
  }
  
  routineElementsForm(){
    this.labelBtnUpdate = 'Update'
    this.labelBtnRegister = 'New'
    this.labelBtnDelete  = "Delete"
    this.classTextBox = "form-control inputReadOnly"
    this.btnUpdate = true
    this.btnDelete = true
    this.btnCancel = true
    this.btnSelect = false
    this.btnRegister = false  
  }

  ngOnInit():void {

    this.labelBtnUpdate = 'Update'
    this.labelBtnRegister = 'New'
    this.labelBtnDelete  = "Delete"
    this.classTextBox = "form-control inputReadOnly"
    this.btnUpdate = true
    this.btnDelete = true
    this.btnCancel = true
    this.loadContacts()
  
  }



 get name() { return this.form01.get('name')}


}
