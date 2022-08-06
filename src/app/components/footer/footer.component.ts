import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  isVisibleModal = true;
  imageLogo = './assets/images/logo.png';
  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisibleModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisibleModal = false;
  }
  constructor() {}

  ngOnInit() {}
}
