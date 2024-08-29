import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  submitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]], // Changed from email to identifier
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { identifier, password } = this.loginForm.value;
      this.submitting = true;
      this.authService.login(identifier, password).subscribe({
        next: () => {
          this.submitting = false;
          this.router.navigate(['/dashboard']); // Redirect to a dashboard or another route upon successful login
        },
        error: (error) => {
          this.submitting = false;
          this.errorMessage = 'Invalid credentials. Please try again.';
          console.error('Login error:', error);
        },
      });
    }
  }
}
