import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { UserprofileService } from '../../service/userprofile.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  user: UserModel | null = null;
  private subscription: Subscription = new Subscription();


  constructor(
    private userProfileService: UserprofileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userProfileService.getUserProfile().subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
        }
      },
      error: (err) => {
        console.error('Error, loading user profile:', err);
      }
    });
    this.subscription.add(sub);  // Manage the subscription
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  // Unsubscribe when the component is destroyed
  }

  // ngOnInit(): void {
  //   this.userProfileService.getUserProfile().subscribe(profile => {
  //     this.user = profile;
  //      });
  //    }

}