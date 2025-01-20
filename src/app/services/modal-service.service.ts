import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService implements OnInit {

  ngOnInit(): void {
    this.txtContent
  }

  constructor() {}

  txtContent:string

  getMsg():string {
    return this.txtContent
  }

  setMsg(msg:string){
    this.txtContent = msg
  }

  
}
