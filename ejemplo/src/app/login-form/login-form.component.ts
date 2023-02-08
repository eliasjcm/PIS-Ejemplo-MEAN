import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { User } from '../User';
import { Nullable } from '../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  constructor(private api: ApiService) {
    this.currentUser = null;
    this.errorMsg = null;
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  currentUser: User | null;

  errorMsg: string | null;

  loginUser = () => {
    // let newErrorMsg: string | null = null;
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    if (!username || username.length === 0) {
      this.errorMsg = 'Username is required';
      return;
    }
    if (!password || password.length === 0) {
      this.errorMsg = 'Password is required';
      return;
    }

    this.api.getUser(username || '', password || '').subscribe((data) => {
      console.log(data);
      this.currentUser = data.body;
      if (!this.currentUser) {
        this.errorMsg = 'Invalid username or password';
        return;
      }
    });
    this.errorMsg = null;
  };
}
