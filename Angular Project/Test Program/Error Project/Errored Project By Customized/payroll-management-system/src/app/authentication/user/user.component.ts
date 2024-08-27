import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initUserForm();
    this.loadUserProfile();
  }

  initUserForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });
  }

  get name() {
    return this.userForm.get('name')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get password() {
    return this.userForm.get('password')!;
  }

  get confirmPassword() {
    return this.userForm.get('confirmPassword')!;
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  loadUserProfile() {
    this.authService.getUserProfile().subscribe({
      next: data => {
        this.user = data;
        this.userForm.patchValue(this.user);
      },
      error: error => {
        console.error('Error loading user profile:', error);
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUser = this.userForm.value;
      this.authService.updateUserProfile(updatedUser).subscribe({
        next: response => {
          alert('Profile updated successfully!');
        },
        error: error => {
          console.error('Error updating profile:', error);
          alert('Failed to update profile. Please try again.');
        }
      });
    }
  }
}
