import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../dataservice';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  loginobj = { Email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.loginobj.password === '1234') {
      this.auth.loginSuccess();  
      this.router.navigate(['/home']);
    } else {
      alert('Wrong password!');
    }
  }
}
