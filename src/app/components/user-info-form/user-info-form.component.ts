import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { User, userInfo } from '../../interfaces/user';
import { authAddUserInfo } from '../../store/actions/auth.actions';
import { selectUser } from '../../store/selectors/auth.selector';
import { Observable } from 'rxjs';
import { State } from '../../store/states/auth.state';
@Component({
  selector: 'app-user-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-info-form.component.html',
  styleUrl: './user-info-form.component.scss'
})
export class UserInfoFormComponent {
  user$!: Observable<User|null>;
  @Input() step!:number;
  @Output() changeStep:EventEmitter<number> = new EventEmitter<number>();
  userInfoForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<{ auth: State }>) {
    this.userInfoForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      profileImage: [null, Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.userInfoForm.valid) {
      this.changeStep.emit(this.step+1);
      const userInfo: userInfo = {
        username: this.userInfoForm.get("username")?.value,
        email: this.userInfoForm.get("email")?.value,
        phone: this.userInfoForm.get("phone")?.value,
        password: this.userInfoForm.get("password")?.value,
        profile_image: this.userInfoForm.get("profileImage")?.value
      };
      this.store.dispatch(authAddUserInfo({userInfo:userInfo}));
    }
  }
  ngOnInit() {
    this.user$=this.store.pipe(select(selectUser));
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userInfoForm.patchValue({
        profileImage: file
      });
    }
  }

}
