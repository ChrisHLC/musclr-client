import { Component, OnInit } from '@angular/core';
import {NguCarousel} from '@ngu/carousel';
import {CommunityService} from '../community.service';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-carousel',
  templateUrl: './user-carousel.component.html',
  styleUrls: ['./user-carousel.component.scss']
})
export class UserCarouselComponent implements OnInit {
  public carouselOne: NguCarousel;
  public carouselUserList: User[] = [];
  public firstTurnCarousel: User[] = [];
  public secondTurnCarousel: User[] = [];
  public thirdTurnCarousel: User[] = [];

  constructor(private communityService: CommunityService) {
    this.communityService.loadCarouselUsers().subscribe(
      (data: User[]) => {
        this.carouselUserList = data;
      }
    );
  }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      // interval: 4000,
      point: {
        visible: true
      },
      load: 3,
      touch: true,
      loop: true,
      custom: 'banner'
    };

    this.communityService.loadCarouselUsers().subscribe(
      (data: User[]) => {
        this.carouselUserList = data;
      }
    );
    this.firstTurnCarousel = [this.carouselUserList[0], this.carouselUserList[1], this.carouselUserList[2]];
    this.secondTurnCarousel = [this.carouselUserList[3], this.carouselUserList[4], this.carouselUserList[5]];
    this.thirdTurnCarousel = [this.carouselUserList[6], this.carouselUserList[7], this.carouselUserList[8]];
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this function when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }


}
