import { CommonModule } from '@angular/common';
import { FollowersListComponent } from './followers-list/followers-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FollowersListComponent],
  imports: [
    CommonModule
  ],
  exports:[FollowersListComponent]
})
export class FollowersModule { }
