import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-confirm-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-confirm-form.component.html',
  styleUrl: './user-confirm-form.component.scss'
})
export class UserConfirmFormComponent {
verificationCode: any;
verifyUser() {
throw new Error('Method not implemented.');
}

}
