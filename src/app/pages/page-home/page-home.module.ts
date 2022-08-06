import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AntdModule } from 'src/app/antd/antd.module';

@NgModule({
  imports: [CommonModule, AntdModule],
  declarations: [PageHomeComponent, CarouselComponent],
  exports: [PageHomeComponent, CarouselComponent],
})
export class PageHomeModule {}
