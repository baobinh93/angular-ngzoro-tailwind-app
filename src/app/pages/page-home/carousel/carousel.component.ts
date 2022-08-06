import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: false })
  myCarousel!: NzCarouselComponent;
  index = 0;
  myindex = 0;

  imgArr = [
    `./assets/images/crs-img-01.jpeg`,
    `./assets/images/crs-img-02.webp`,
    `./assets/images/crs-img-03.jpg`,
  ];
  testImg = './assets/images/logo.png';
  showIndex(event: any) {
    this.myindex = event;
    this.index = this.myindex;
    console.log(this.myindex);
  }
  goTo(i: number) {
    this.index = i;
    this.myCarousel.goTo(Number(i));
  }
  array = [1, 2, 3];
  effectCarousel = 'fade';
  constructor() {}
  // constructor() {}

  ngOnInit() {}
}
