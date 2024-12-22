import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cep } from '../models/Cep';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceLinksService {

  url = "https://brasilapi.com.br/api/cep/v1/21730000"

  fillItensLink() {
    return [
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
      {title:"Lesson 18",subtitle:"Forms module part 01",link:"/lesson18"},
      {title:"Lesson 19",subtitle:"Forms module part 02",link:"/lesson19"},
      {title:"Lesson 20",subtitle:"Reactive Forms",link:"/lesson20"},
      {title:"Lesson 21",subtitle:"Project brief",link:"/lesson21"},
      {title:"Lesson 23",subtitle:"Scrictnullcheks",link:"/lesson23"},
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


  getCep(): Observable<Cep[]> {
    return this.http.get<Cep[]>(this.url)
  }

 
  

}
