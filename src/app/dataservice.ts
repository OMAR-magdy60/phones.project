import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login() {
    throw new Error('Method not implemented.');
  }
  isLoggedIn = signal(false);

  loginSuccess() {
    this.isLoggedIn.set(true);  
  }

  logout() {
    this.isLoggedIn.set(false);
  }
}
