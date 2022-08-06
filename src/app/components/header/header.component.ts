import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imageLogo = './assets/images/logo.png';
  isVisible = true;

  @ViewChild('navbarBtn') navbarBtnRef!: ElementRef;
  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    this.isVisible = true;
  }
  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.isVisible = true;
  }
  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (this.navbarBtnRef.nativeElement.contains(event.target)) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  constructor(private eRef: ElementRef) {}

  ngOnInit() {}
}
