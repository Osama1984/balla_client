import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { State } from '../../store/states/auth.state';
import { Store, select } from '@ngrx/store';
import { Address } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { authAddUserAddress } from '../../store/actions/auth.actions';
import { selectAuthState } from '../../store/selectors/auth.selector';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-address-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-address-form.component.html',
  styleUrl: './user-address-form.component.scss'
})
export class UserAddressFormComponent {
  @Input() step!: number;
  @Output() changeStep: EventEmitter<number> = new EventEmitter<number>();
  userAddressForm!:FormGroup;

  constructor(private fb: FormBuilder, private store:Store<{auth:State}>, private authService:AuthService) {
    this.userAddressForm = this.fb.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userAddressForm.valid) {
      this.changeStep.emit(this.step + 1);
      const userAddress: Address = {
          address: this.userAddressForm.get("address")?.value,
          city: this.userAddressForm.get("city")?.value,
          state: this.userAddressForm.get("state")?.value,
          country: this.userAddressForm.get("country")?.value,
          zip: this.userAddressForm.get("zip")?.value
      };
      this.store.dispatch(authAddUserAddress({ userAddress }));
      const user = this.store.pipe(select(selectAuthState));
      user.subscribe((data)=>{this.authService.addUser(data.user).subscribe((data)=>{console.log(data)})});
    }
    else{
      console.log(this.userAddressForm.errors)
    }
  }

}


