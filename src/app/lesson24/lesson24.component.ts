import { ServiceLinksService } from './../services/service-links.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/Contact';
import { ModalComponent } from '../modal/modal.component';
import { ModalServiceService } from '../services/modal-service.service';

@Component({
  selector: 'app-lesson24',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ModalComponent],
  templateUrl: './lesson24.component.html',
  styleUrl: './lesson24.component.scss'
})

export class Lesson24Component implements OnInit {

  constructor(private service:ServiceLinksService, private mdService:ModalServiceService){}

  form01 = new FormGroup ({
    id:    new FormControl(''),
    name:  new FormControl('',[Validators.required] ),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required])
  })
  
  errors:string[]=[]
  contact:Contact[]=[]
  classTextBox:string
  btnDelete:boolean
  btnRegister:boolean
  btnUpdate:boolean
  btnCancel:boolean
  btnSelect:boolean
  inputRdln:string
  labelBtnUpdate:string
  labelBtnRegister:string 
  labelBtnDelete:string
  arrayCount:number
  idxMain:number 
  dialogModal:boolean = false


  
  
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
      this.inputRdln = ""
      break;

     case "Save":
      if(this.form01.get('name').invalid){
        this.mdService.setMsg("This fiel don't stay empty!")
        this.openDialog()
        return
      }
      this.service.registerContact(this.form01.value as Contact).subscribe((v)=> {this.contact.push(v)})
      this.classTextBox = "form-control inputReadOnly"
      this.inputRdln = "readonly"
      this.cancelForm()
      break;  
         
    }
  }
 
  updateContact() {

    switch (this.labelBtnUpdate){
      case "Update" :
        this.labelBtnUpdate = "Confirm"
        this.classTextBox = "form-control"
        this.inputRdln = ""
        this.btnDelete = true
        this.btnSelect = true
        this.btnCancel = false
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
        this.cancelForm()
      
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
    this.idxMain = idx
    this.form01.setValue({
      id:    this.contact[idx].id,
      name:  this.contact[idx].name,
      phone: this.contact[idx].phone,
      email: this.contact[idx].email
    })

    this.btnUpdate = false
    this.btnDelete = false
    
  }

  cancelForm():void {
    this.btnSelect = false
    this.btnCancel = true
    this.labelBtnUpdate = 'Update'
    this.labelBtnRegister = 'New'
    this.labelBtnDelete  = "Delete"
    this.classTextBox = "form-control inputReadOnly"
    this.inputRdln = "readonly"
    this.selectContact(this.idxMain)
    this.btnUpdate = true
    this.btnDelete = true
    
 
   
  }

  loadContacts():void {
    this.service.getContact().subscribe(result => { this.contact = result})
    this.arrayCount = this.contact.length
  }
  

  ngOnInit():void {

    $('body').keyup(function(event) {
      if (event.keyCode == 27) {
        document.body.style.overflow = ''}
    })

    this.loadContacts()
    this.labelBtnUpdate = 'Update'
    this.labelBtnRegister = 'New'
    this.labelBtnDelete  = "Delete"
    this.inputRdln = "readonly"
    this.classTextBox = "form-control inputReadOnly"
    this.btnUpdate = true
    this.btnDelete = true
    this.btnCancel = true
    
  
  }

validateForm(): boolean { 

    if (this.form01.get('name').invalid) { 
      this.errors.push('Name is required'); 
    } 
    
    if (this.form01.get('phone').invalid) { 
      this.errors.push('Email is required'); 
    }
      
    if (this.form01.get('email').invalid) {
       this.errors.push('Password is required');
    }
    
    if (this.errors.length > 0) { 
      
      
      }
      
      return true; 
    
    }

    openDialog() {
      const dg = document.querySelector('dialog')
      document.body.style.overflow = 'hidden';
      dg.showModal()
    }

    closeDialog(){
      const dg = document.querySelector('dialog')
      document.body.style.overflow = '';
      dg.close()
    }


    }

    
    



