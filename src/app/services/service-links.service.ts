import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceLinksService {

  url:string = "http://localhost:3000/contact"
  

  fillItensLink() {
    return [
      {title:"Angular",subtitle:"Aprentation",link:"/lesson01"},
      {title:"Angular",subtitle:"Install Material and jquery",link:"/lesson02"},
      {title:"Angular",subtitle:"Install API Json Server",link:"/lesson03"},
      {title:"Angular",subtitle:"Create Component",link:"/lesson04"},
      {title:"Angular",subtitle:"Text interpolation",link:"/lesson05"},
      {title:"Angular",subtitle:"Event Binding",link:"/lesson06"},
      {title:"Angular",subtitle:"Property Binding",link:"/lesson07"},
      {title:"Angular",subtitle:"NgIf Directive",link:"/lesson08"},
      {title:"Angular",subtitle:"NgFor Directive",link:"/lesson09"},
      {title:"Angular",subtitle:"NgSwitch Directive",link:"/lesson10"},
      {title:"Angular",subtitle:"NgStyle Directive",link:"/lesson11"},
      {title:"Angular",subtitle:"NgClass Directive",link:"/lesson12"},
      {title:"Angular",subtitle:"Router Link",link:"/lesson13"},
      {title:"Angular",subtitle:"Condictional control flow",link:"/lesson14"},
      {title:"Angular",subtitle:"Repeat Loop control flow",link:"/lesson15"},
      {title:"Angular",subtitle:"Choise structure control flow",link:"/lesson16"},
      {title:"Angular",subtitle:"Install Bootstraps",link:"/lesson17"},
      {title:"Angular",subtitle:"NgModel with forms module 01",link:"/lesson18"},
      {title:"Angular",subtitle:"NgModel with forms module 02",link:"/lesson19"},
      {title:"Angular",subtitle:"Reactive forms Control",link:"/lesson20"},
      {title:"Angular",subtitle:"Routers",link:"/lesson21"},
      {title:"Angular",subtitle:"StrictNullChecks",link:"/lesson23"},
      {title:"Angular",subtitle:"CRUD Project with Json-server",link:"/lesson24"},
      {title:"Angular",subtitle:"Validation of Router ",link: "/lesson25"},
      {title:"Angular",subtitle:"Firebase",link:"/lesson26"},
      {title:"Angular",subtitle:"Validators",link:"/lesson27"},
      {title:"Angular",subtitle:"Create Model Contact",link:"/lesson28"},
      {title:"Angular",subtitle:"Messages of validation",link:"/lesson29"},
      {title:"Angular",subtitle:"Input autofill - Element datalist",link:"/lesson30"},
      {title:"Angular",subtitle:"Modal dialog",link:"/lesson31"},
      {title:"Angular",subtitle:"Function of Register",link:"/lesson32"},
      {title:"Angular",subtitle:"Function Selection",link:"/lesson33"},
      {title:"Angular",subtitle:"Function Update",link:"/lesson34"},
      {title:"Angular",subtitle:"Function Exclude",link:"/lesson35"},
      {title:"JavaScript",subtitle:"Fetch (method promise)",link:"/lesson36"},
      {title:"JavaScript",subtitle:"Try Catch",link:"/lesson37"}

    ]
  }

  constructor(private http:HttpClient) { }

  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url);
  }

  registerContact(obj:Contact):Observable<any>{
    return this.http.post<Contact>(this.url,obj)
  } 

  updateContact(obj:Contact):Observable<Contact> {
    return this.http.put<Contact>(`${this.url}/${obj.id}`,obj)
  }

  deleteContact(id:string):Observable<any> {
    return this.http.delete<Contact>(`${this.url}/${id}`)
  }


}
