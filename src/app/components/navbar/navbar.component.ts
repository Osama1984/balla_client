import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../../store/states/auth.state';
import { selectUser, selectError } from '../../store/selectors/auth.selector'; // Adjust path as necessary
import { User, userError } from '../../interfaces/user';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class AppNavbar implements OnInit {
  user$!: Observable<User | null>;
  error$!: Observable<userError | null>;

  constructor(private store: Store<{ auth: State }>) {}

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(selectUser));
    this.error$ = this.store.pipe(select(selectError));
  }
  logout(): void {
  }
}
