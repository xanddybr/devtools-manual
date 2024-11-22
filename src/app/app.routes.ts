import { Routes } from '@angular/router';
import { Lesson04Component } from './lesson04/lesson04.component';
import { Lesson05Component } from './lesson05/lesson05.component';

export const routes: Routes = [ 
    {path:'lesson04', component:Lesson04Component},
    {path:'lesson05', component:Lesson05Component},
    {path:'', redirectTo:'',pathMatch:'full'}

];

