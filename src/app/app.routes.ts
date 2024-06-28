import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { LoginPage } from './pages/login/login.component';
import { RegisterPage } from './pages/register/register.component';
export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomePage},
  {path:'login', component:LoginPage},
  {path:'register', component:RegisterPage }
];
