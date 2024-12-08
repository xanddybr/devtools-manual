import { Routes } from '@angular/router';
import { Lesson04Component } from './lesson04/lesson04.component';
import { Lesson05Component } from './lesson05/lesson05.component';
import { Lesson06Component } from './lesson06/lesson06.component';
import { Lesson07Component } from './lesson07/lesson07.component';

export const routes: Routes = [ 
    {path:'lesson04', component:Lesson04Component},
    {path:'lesson05', component:Lesson05Component},
    {path:'lesson06', component:Lesson06Component},
    {path:'lesson07', component:Lesson07Component},
    {path:'', redirectTo:'',pathMatch:'full'}

];

