import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UserprofileService } from '../../services/userprofile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
})
export class UserprofileComponent implements OnInit, OnDestroy {
  user: UserModel | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private userProfileService: UserprofileService) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  // ngOnInit(): void {
  //   this.userProfileService.getUserProfile().subscribe(profile => {
  //     this.user = profile;
  //      });
  //    }

  loadUserProfile(): void {
    const sub = this.userProfileService.getUserProfile().subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      },
    });
    this.subscription.add(sub);
  }

  // loadUserProfile(): void {
  //   const sub = this.userProfileService.getUserProfile().subscribe({
  //     next: (user) => {
  //       if (user) {
  //         this.user = user;
  //       }
  //     },
  //     error: (err) => {
  //       console.error('Error, loading user profile:', err);
  //       // You can handle the error further, e.g., showing an error message to the user
  //     }
  //   });
  //   this.subscription.add(sub);  // Manage the subscription
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Unsubscribe when the component is destroyed
  }
}
