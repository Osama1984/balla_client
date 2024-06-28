import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/actions/auth.actions'; // Adjust path as necessary
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, AppNavbar ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'balla_client';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.authCheckToken({}));
  }
}
