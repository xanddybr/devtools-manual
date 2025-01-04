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
      {title:"Lesson 01",subtitle:"Aprentation",link:"/lesson01"},
      {title:"Lesson 02",subtitle:"?...",link:"/lesson02"},
      {title:"Lesson 03",subtitle:"Install API Json Server",link:"/lesson03"},
      {title:"Lesson 04",subtitle:"Create Component",link:"/lesson04"},
      {title:"Lesson 05",subtitle:"Text interpolation",link:"/lesson05"},
      {title:"Lesson 06",subtitle:"Event Binding",link:"/lesson06"},
      {title:"Lesson 07",subtitle:"Property Binding",link:"/lesson07"},
      {title:"Lesson 08",subtitle:"NgIf Directive",link:"/lesson08"},
      {title:"Lesson 09",subtitle:"NgFor Directive",link:"/lesson09"},
      {title:"Lesson 10",subtitle:"NgSwitch Directive",link:"/lesson10"},
      {title:"Lesson 11",subtitle:"NgStyle Directive",link:"/lesson11"},
      {title:"Lesson 12",subtitle:"NgClass Directive",link:"/lesson12"},
      {title:"Lesson 13",subtitle:"Router Link",link:"/lesson13"},
      {title:"Lesson 14",subtitle:"Condictional control flow",link:"/lesson14"},
      {title:"Lesson 15",subtitle:"Repeat Loop control flow",link:"/lesson15"},
      {title:"Lesson 16",subtitle:"Choise structure control flow",link:"/lesson16"},
      {title:"Lesson 17",subtitle:"Bootstraps",link:"/lesson17"},
      {title:"Lesson 18",subtitle:"NgModel with forms module 01",link:"/lesson18"},
      {title:"Lesson 19",subtitle:"NgModel with forms module 02",link:"/lesson19"},
      {title:"Lesson 20",subtitle:"Reactive forms Model",link:"/lesson20"},
      {title:"Lesson 21",subtitle:"Project brief",link:"/lesson21"},
      {title:"Lesson 23",subtitle:"StrictNullChecks",link:"/lesson23"},
      {title:"Lesson 24",subtitle:"Form Create",link:"/lesson24"},
      {title:"Lesson 25",subtitle:"Table Create",link:"/lesson25"},
      {title:"Lesson 26",subtitle:"Reactive Form Implementation",link:"/lesson26"},
      {title:"Lesson 27",subtitle:"Validators",link:"/lesson27"},
      {title:"Lesson 28",subtitle:"Create Model Person",link:"/lesson28"},
      {title:"Lesson 29",subtitle:"Messages of validation",link:"/lesson29"},
      {title:"Lesson 30",subtitle:"Property disable",link:"/lesson30"},
      {title:"Lesson 31",subtitle:"Create Vetor",link:"/lesson31"},
      {title:"Lesson 32",subtitle:"Function of Register",link:"/lesson32"},
      {title:"Lesson 33",subtitle:"Function Selection",link:"/lesson33"},
      {title:"Lesson 34",subtitle:"Function Update",link:"/lesson34"},
      {title:"Lesson 35",subtitle:"Function Exclude",link:"/lesson35"},
      {title:"Lesson 36",subtitle:"Function Cancel",link:"/lesson36"}
    ]
  }

  constructor(private http:HttpClient) { }

  getContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url);
  }

  registerContact(obj:Contact):Observable<Contact> {
    return this.http.post<Contact>(this.url,obj)
  }

  updateContact(obj:Contact):Observable<Contact> {
    return this.http.put<Contact>(`${this.url}/${obj.id}`,obj)
  }

  deleteContact(id:string):Observable<any> {
    return this.http.delete<Contact>(`${this.url}/${id}`)
  }


}
