import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // this.loginForm = this.formBuilder.group({
    //   email: [''],
    //   password: ['']
    // });
  }

  login() {
    // Assuming you get the role after login
    const role = 'admin';  // This should be retrieved from your login response
    this.authService.setUserRole(role);
    this.router.navigate(['/dashboard']);  // Navigate to dashboard or any other route
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      const isAuthenticated = this.authService.login(credentials);

      if (isAuthenticated) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please fill in all fields');
    }
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const credentials = this.loginForm.value;
  //     this.authService.login(credentials).subscribe({
  //       next: (res) => {
  //         console.log('User logged in successfully:', res);
  //         this.authService.storeToken(res.token);
  //         this.router.navigate(['userprofile']); // Navigate to a protected route after login
  //       },
  //       error: (error) => {
  //         console.error('Error logging in:', error);
  //       }
  //     });
  //   }
  // }




}