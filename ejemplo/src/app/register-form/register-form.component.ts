import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { User } from '../User';
import { Nullable } from '../types';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  constructor(private api: ApiService, private router: Router) {
    this.currentUser = null;
    this.errorMsg = null;
  }
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl('')
  });

  currentUser: User | null;

  errorMsg: string | null;

  registerUser = () => {
    this.errorMsg = null;
    const username = this.registerForm.get('username')?.value;
    const password = this.registerForm.get('password')?.value;
    const name = this.registerForm.get('name')?.value;
    if (!username || username.length === 0) {
      this.errorMsg = 'Username is required';
      return;
    }
    if (!password || password.length === 0) {
      this.errorMsg = 'Password is required';
      return;
    }
    if (!name || name.length === 0) {
      this.errorMsg = 'Name is required';
      return;
    }
    const newUser: User = {
      username,password,name
    }

    console.log(newUser);

    this.api.checkUser(username).subscribe((data) => {
      console.log(data);
      if (data.body) {
        this.errorMsg = 'Username already exists';
        return;
      }else{
        this.api.createUser(newUser).subscribe((data) => {
          console.log(data);
          this.errorMsg = 'User created successfully';
          this.router.navigate(['/']);
        });
      }
    });

    
  };

}
