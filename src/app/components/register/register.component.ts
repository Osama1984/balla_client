import { Component, EventEmitter } from '@angular/core';
import { UserInfoFormComponent } from '../../components/user-info-form/user-info-form.component';
import { UserAddressFormComponent } from '../../components/user-address-form/user-address-form.component';
import { UserConfirmFormComponent } from '../../components/user-confirm-form/user-confirm-form.component';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [UserInfoFormComponent, UserAddressFormComponent, UserConfirmFormComponent, StepperComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  step:number=1;
  constructor(){}
  changeStep(ev:any){
    this.step=ev;
  }
}
