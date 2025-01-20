import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModalServiceService } from '../services/modal-service.service';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})


export class ModalComponent implements OnInit {

  

constructor(private mdService:ModalServiceService){ }

  txtContent:string 
  txtTitle:string = "Learn-Angular 17"
  @Input() msgChild:string
   
  closeDialog(){
  const dg = document.querySelector('dialog')
  document.body.style.overflow = '';
  dg.close()
  }

  ngOnInit(): void {
    this.txtContent = this.mdService.getMsg()

  }

  


}
