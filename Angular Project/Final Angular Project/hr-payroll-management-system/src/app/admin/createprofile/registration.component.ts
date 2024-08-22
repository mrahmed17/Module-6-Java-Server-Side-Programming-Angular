import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../models/user.model';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private userService: UserprofileService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.registrationForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        position: [''], // Optional field for the position
        role: ['User'], // Default role is 'User'
      },
      { validator: this.passwordMatchValidator }
    );
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      const user: UserModel = this.registrationForm.value;
      this.authService.registration(user).subscribe({
        next: (res) => {
          console.log('User registered successfully:', res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/']); // Navigate to a protected route after registration
        },
        error: (err) => {
          console.error('Error registering user:', err);
        },
      });
    }
    const newUser: UserModel = this.registrationForm.value;
    this.userService.createUser(newUser).subscribe({
      next: () => {
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/login']);
      },
      error: (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      },
    });
  }
}
