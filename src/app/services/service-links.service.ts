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
      {title:"Angular",subtitle:"Aprentation",link:"/dashboard/lesson01"},
      {title:"Angular",subtitle:"Install Material and jquery",link:"/dashboard/lesson02"},
      {title:"Angular",subtitle:"Install API Json Server",link:"/dashboard/lesson03"},
      {title:"Angular",subtitle:"Create Component",link:"/dashboard/lesson04"},
      {title:"Angular",subtitle:"Text interpolation",link:"/dashboard/lesson05"},
      {title:"Angular",subtitle:"Event Binding",link:"/dashboard/lesson06"},
      {title:"Angular",subtitle:"Property Binding",link:"/dashboard/lesson07"},
      {title:"Angular",subtitle:"NgIf Directive",link:"/dashboard/lesson08"},
      {title:"Angular",subtitle:"NgFor Directive",link:"/dashboard/lesson09"},
      {title:"Angular",subtitle:"NgSwitch Directive",link:"/dashboard/lesson10"},
      {title:"Angular",subtitle:"NgStyle Directive",link:"/dashboard/lesson11"},
      {title:"Angular",subtitle:"NgClass Directive",link:"/dashboard/lesson12"},
      {title:"Angular",subtitle:"Router Link",link:"/dashboard/lesson13"},
      {title:"Angular",subtitle:"Condictional control flow",link:"/dashboard/lesson14"},
      {title:"Angular",subtitle:"Repeat Loop control flow",link:"/dashboard/lesson15"},
      {title:"Angular",subtitle:"Choise structure control flow",link:"/dashboard/lesson16"},
      {title:"Angular",subtitle:"Install Bootstraps",link:"/dashboard/lesson17"},
      {title:"Angular",subtitle:"NgModel with forms module 01",link:"/dashboard/lesson18"},
      {title:"Angular",subtitle:"NgModel with forms module 02",link:"/dashboard/lesson19"},
      {title:"Angular",subtitle:"Reactive forms Control",link:"/dashboard/lesson20"},
      {title:"Angular",subtitle:"Routers",link:"/dashboard/lesson21"},
      {title:"Angular",subtitle:"StrictNullChecks",link:"/dashboard/lesson23"},
      {title:"Angular",subtitle:"CRUD Project with Json-server",link:"/dashboard/lesson24"},
      {title:"Angular",subtitle:"Validation of Router ",link: "/dashboard/lesson25"},
      {title:"JavaScript",subtitle:"Fetch data",link:"/dashboard/lesson26"},
      {title:"Angular",subtitle:"Validators",link:"/dashboard/lesson27"},
      {title:"Angular",subtitle:"Create Model Contact",link:"/dashboard/lesson28"},
      {title:"Angular",subtitle:"Messages of validation",link:"/dashboard/lesson29"},
      {title:"Angular",subtitle:"Input autofill - Element datalist",link:"/dashboard/lesson30"},
      {title:"Angular",subtitle:"Modal dialog",link:"/dashboard/lesson31"},
      {title:"Angular",subtitle:"Function of Register",link:"/dashboard/lesson32"},
      {title:"Angular",subtitle:"Function Selection",link:"/dashboard/lesson33"},
      {title:"Angular",subtitle:"Function Update",link:"/dashboard/lesson34"},
      {title:"Angular",subtitle:"Function Exclude",link:"/dashboard/lesson35"},
      {title:"JavaScript",subtitle:"Fetch (method promise)",link:"/dashboard/lesson36"},
      {title:"JavaScript",subtitle:"Try Catch",link:"/dashboard/lesson37"}

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
