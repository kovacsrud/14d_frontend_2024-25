import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:"",component:MainComponent},
    {path:"register",component:RegisterComponent}
];
