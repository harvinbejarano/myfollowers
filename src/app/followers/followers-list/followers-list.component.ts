import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/data.service';
import { Follower } from './../../follower';

@Component({
  selector: 'app-followers-list',
  templateUrl: './followers-list.component.html',
  styleUrls: ['./followers-list.component.scss']
})
export class FollowersListComponent implements OnInit {

  followersList : Follower[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getFollowers()
      .subscribe((list: Follower[]) => { 
        this.followersList = list;
      });
  }

}
