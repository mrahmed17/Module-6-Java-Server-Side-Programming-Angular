import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotpasswordComponent {
  forgotPasswordForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.value.email;
      this.authService.requestPasswordReset(email).subscribe(
        () => {
          this.successMessage =
            'A password reset link has been sent to your email.';
          this.forgotPasswordForm.reset();
        },
        (error) => {
          this.errorMessage =
            'Failed to send password reset link. Please try again.';
          console.error('Error sending password reset link', error);
        }
      );
    }
  }
}
