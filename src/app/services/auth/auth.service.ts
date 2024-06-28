import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public addUser(user: User | null) {
    if (user) {
      if (user.profile_image instanceof File) {
        const formData = new FormData();
        formData.append('username', JSON.stringify(user.username));
        formData.append('email', JSON.stringify(user.email));
        formData.append('password', JSON.stringify(user.password));
        formData.append('phone', JSON.stringify(user.phone));
        formData.append('address', JSON.stringify(user.address));
        formData.append('profile_image', user.profile_image, user.profile_image.name);

        return this.http.post<any>(`http://localhost:5005/auth/register`, formData).pipe(
          catchError((error) => {
            console.error('Error occurred:', error);
            return throwError(error);
          })
        );
      } else {
        return this.http.post<any>("/api/", user).pipe(
          catchError((error) => {
            console.error('Error occurred:', error);
            return throwError(error);
          })
        );
      }
    } else {
      return throwError('User data is null');
    }
  }
}
