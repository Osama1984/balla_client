import { Component } from '@angular/core';
import { RegisterComponent } from '../../components/register/register.component';
@Component({
  selector: "",
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterPage {
  constructor(){}
}
