import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css'],
})
export class PageLayoutComponent implements OnInit {
  isVisible = true;
  @ViewChild('buttonScrolltoTop') topBtn!: ElementRef;
  scrolltoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    document.body.scrollTop > 40 || document.documentElement.scrollTop > 40
      ? (this.isVisible = false)
      : (this.isVisible = true);
    //console.log('roll', this.isVisible);
  }
  constructor() {}

  ngOnInit() {}
}
